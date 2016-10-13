$(document).ready(function(){
	$('#aboutme').mouseenter(function () {
        $('.header').toggleClass('header2', 1000);
	});
	$('#aboutme').mouseleave(function () {
        $('.header').toggleClass('header2', 1000);
	});
	$('#menu-toggle').mouseenter(function () {
		$('.header').css('opacity', '1');
	});
});