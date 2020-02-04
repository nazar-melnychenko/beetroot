$(window).ready(function() {
  $('.hamburger').on('click', function () {
	 $('.siteWrapper').toggleClass('activeWrapper');
	 $('.menuu').toggleClass('activeMenu');
  });

  $('.wrapperMenu a').on('click', function () {
	 $('.siteWrapper').toggleClass('activeWrapper');
	 $('.menuu').toggleClass('activeMenu');
  });


  $(window).scroll((e) => {
	 let headerDesc= $('.header__desc');
    let opacity =(100/(e.currentTarget.scrollY))/10;
	 headerDesc.css({
		"paddingTop": `${e.currentTarget.scrollY}px`,
		"opacity": `${opacity}`
  });
	 if (e.currentTarget.scrollY === 0) {
		headerDesc.css("opacity", "1");
	 }

  });

});