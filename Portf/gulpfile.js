const 	gulp 			= require('gulp'),
		autoprefixer 	= require('gulp-autoprefixer'),
		cleanCss 		= require('gulp-clean-css'),
		rename 			= require('gulp-rename'),
		gcmq 			= require('gulp-group-css-media-queries'),
		imagemin 		= require('gulp-imagemin'),
		pngquant 		= require('imagemin-pngquant'),
		sass 			= require('gulp-sass'),
		sourceMaps 		= require('gulp-sourcemaps'),
		uglify 			= require('gulp-uglify'),
		gutil 			= require('gulp-util'),
		concat 			= require('gulp-concat'),
		browserSync 	= require('browser-sync'),
		del 			= require('del'),
		babel 			= require('gulp-babel'),
		reload 			= require('browser-sync');

const path = {
	app: {
		app:			'app/',
		html: 			'app/*.html',
		libsStyles: 	'app/libs/**/*.{sass,scss,css}',
		libsJs: 		'app/libs/**/*.js',
		js: 			'app/js/',
		sass: 			'app/sass/main.sass',
		img: 			'app/img/**/*.*',
		fonts: 			'app/fonts/**/*.*',
		css: 			'app/css/'
	},
	watch: {
		html: 			'app/**/*.html',
		js: 			'app/js/**/common.js',
		sass: 			'app/sass/**/*.sass',
	},
	build: {
		html: 			'dist',
		js: 			'dist/js',
		css: 			'dist/css',
		img: 			'dist/img',
		fonts: 			'dist/fonts'
	},
	clean: 				'./dist'
};

const config = {
	server: {
		baseDir: 		'./app'
	},
	tunnel: false
};

function libsStyles(){
	return gulp.src(path.app.libsStyles)
		.pipe(sourceMaps.init())
		.pipe(sass({
			sourceMap: true,
			errLogToConsole: true
		}).on('error', sass.logError))
		.pipe(concat('libs.min.css'))
		.pipe(autoprefixer())
		.pipe(cleanCss({
			level: 2
		}))
		.pipe(sourceMaps.write('.'))
		.pipe(gulp.dest(path.app.css))
}

function preSass(){
	return gulp.src(path.app.sass)
		.pipe(sourceMaps.init())
		.pipe(sass({
			sourceMap: true,
			errLogToConsole: true
		}).on('error', sass.logError))
		.pipe(gcmq())
		.pipe(autoprefixer())
		.pipe(cleanCss({
			level: 2
		}))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(sourceMaps.write('.'))
		.pipe(gulp.dest(path.app.css))
		.pipe(reload.stream());
}

function libsJs(){
	return gulp.src(path.app.libsJs)
		.pipe(concat('libs.min.js'))
		.pipe(sourceMaps.init())
		.pipe(babel({
			presets: ['@babel/preset-env']
		}))
		.pipe(uglify().on('error', gutil.log))
		.pipe(sourceMaps.write('.'))
		.pipe(gulp.dest(path.app.js))
}

function js(){
	return gulp.src(path.app.js+'common.js')
		.pipe(sourceMaps.init())
		.pipe(babel({
			presets: ['@babel/preset-env']
		}))
		.pipe(uglify().on('error', gutil.log))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(sourceMaps.write('.'))
		.pipe(gulp.dest(path.app.js))
		.pipe(reload.stream());
}

function gWatch(){
	browserSync(config);
	gulp.watch(path.watch.sass, preSass),
	gulp.watch(path.watch.js, js),
	gulp.watch(path.watch.html).on('change', reload.reload);
}

function removeDist(){
	return del(path.clean)
}

function htmlBuild() {
	return gulp.src([
		path.app.html,
		path.app.app + '.htaccess'
	])
		.pipe(gulp.dest(path.build.html));
}

function jsBuild() {
	return gulp.src([
		path.app.js + '*.js',
		'!'+path.app.js + 'common.js'
	])
		.pipe(gulp.dest(path.build.js));
}

function cssBuild() {
	return gulp.src(path.app.css + '**/*.css')
		.pipe(gulp.dest(path.build.css));
}

function fontsBuild() {
	return gulp.src(path.app.fonts)
		.pipe(gulp.dest(path.build.fonts));
}

function imgBuild() {
	return gulp.src(path.app.img)
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()],
			interlaced: true
		}))
		.pipe(gulp.dest(path.build.img));
}

gulp.task ('libs', gulp.parallel(libsStyles,libsJs));
gulp.task ('dev', gulp.parallel(js,preSass,libsStyles,libsJs,gWatch));
gulp.task ('del', removeDist);
gulp.task('prod', gulp.parallel(htmlBuild,jsBuild,cssBuild,fontsBuild,imgBuild));
