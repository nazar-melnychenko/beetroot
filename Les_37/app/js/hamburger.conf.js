$(window).ready(function() {
  let $items = $('.portfolio__items');
  $items.isotope({
	 filter: '*',
  });

  $('ul li a').click(function(){
	 $('ul .active').removeClass('active');
	 $(this).addClass('active');

	 let selector = $(this).attr('data-filter');
	 $items.isotope({
		filter: selector,
		animationOptions: {
		  duration: 500,
		  animationEngine : "jquery"
		}
	 });
  });
});