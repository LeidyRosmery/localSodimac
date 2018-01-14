$(document).ready( function() {
  // var contenedor1 = $('.container-more-accordion').html();
  // // var contenedor2 = $('.container-more-accordion')[1].html();
  //
  // console.log('contenedor primer grupo'+contenedor1);
  // console.log('contenedor segundo grupo'+contenedor2);
  (function ($) {
		$('.nav-tabs>li>a').click(function (e) {
      $('#tab-content-2').slideDown();
		} );
	})(jQuery);

});
