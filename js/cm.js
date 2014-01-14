$(document).ready(function() {
	var opts = {
		parent: '.btn-c',
		normalizeTextColor: true
	};
	$.adaptiveBackground.run(opts);
	$('.social-share a').hover (
	  function () {
	    $(".main-footer").css('background-color', $(this).attr("data-color"));
	   },
	  function () {
	    $(".main-footer").css('background-color', '#ddd');
	   }
	 );
});