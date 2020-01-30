$(window).ready(function() {

  let $items = $('.portfolio__items');
  $items.isotope({
	 filter: '*',
  });

  $('ul li').click(function(){
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
	 return false;
  });

  (function initMap() {
	 let uluru = {lat: 48.9224993, lng: 24.7109985};
	 let map = new google.maps.Map(
		document.getElementById('map'), {zoom: 7, center: uluru});
	 let marker = new google.maps.Marker({position: uluru, map: map});
  })();

});
