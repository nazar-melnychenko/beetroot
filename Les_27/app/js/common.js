$(document).ready(function(){
	$('.mainScreen__sliders').slick({
		dots: true,
		arrows: false,
		autoplay: true
	});

	$('.sayWrapper').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		// autoplay: true,
		asNavFor: '.sayWrapper-nav'
	});
	$('.sayWrapper-nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		variableWidth: true,
		centerMode: true,
		focusOnSelect: true,
		asNavFor: '.sayWrapper',
		nextArrow: '<img class="nextArrowImg" src="../img/feedback/back.png" alt="Next Picture">',
		prevArrow: '<img class="prevArrowImg" src="../img/feedback/forward.png" alt="Previous Picture">',
		responsive: [
			{
				breakpoint: 420,
				settings: {
					arrows: false
				}
			},
		]
	});

	$('.hamb').on('click', function () {
		$(this).toggleClass('hamb__active');
		$('.overlay').toggleClass('overlay__active')
	});

	$('.overlay a').on('click', function () {
		$('.overlay').toggleClass('overlay__active');
		$('.hamb').toggleClass('hamb__active');
	});

	$("a[href^='#']").click(function () {
		let elementClick = $(this).attr("href");
		let destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});

	$(document).scroll(function() {
		if ($(this).scrollTop() > 150) {
			$('#scrollTop').css('bottom','10px')
		}
		else {
			$('#scrollTop').css('bottom','-100px')
		}
	});

	$('.ourWorks__portfolio').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true,
		},
		zoom: {
			enabled: true,
			duration: 300
		}
	});

	new WOW().init();

});
