$(document).ready(function(){
	$('#aboutme').mouseenter(function () {
        $('.header').toggleClass('header2', 1000);
        $('#myname').css('letter-spacing' , '50px');
	});
	$('#aboutme').mouseleave(function () {
        $('.header').toggleClass('header2', 1000);
        $('#myname').css('letter-spacing' , '20px');
	});
	$('#menu-toggle').mouseenter(function () {
		$('.header').css('opacity', '1');
	});
	$('.header').mouseleave(function () {
		$('.header').css('opacity', '0');
	});
	$('.header').mouseenter(function () {
		$('.header').css('opacity', '1');
	});
});