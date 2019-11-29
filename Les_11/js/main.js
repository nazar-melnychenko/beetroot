$(document).ready(function(){
	$("a[href^='#']").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 1) {
			$('#nav-scroll').addClass('nav_logo-scroll');
		}
		else {
			$('#nav-scroll').removeClass('nav_logo-scroll');
		}
	});
});