$(document).ready(function(){

	// BURGER

	let burger = document.getElementById("burger");
	let list = document.getElementById("list");
	burger.onclick = function() {
		burger.classList.toggle("_active");
		list.classList.toggle("_active");
		if(burger.classList.contains('_active'))
			document.body.style.overflow = 'hidden';
		else
			document.body.style.overflow = 'visible';
	}
	
	
	// CONVERT FROM IMAGE TO BACKGROUND-IMAGE

	function bgi(){
		let bgi=document.querySelectorAll(".bgi");
		for (var i = 0; i < bgi.length; i++) {
			if(bgi[i].querySelector('img')){
				bgi[i].style.backgroundImage = 'url('+bgi[i].querySelector('img').getAttribute('src')+')';
			}
		}
	}	
	bgi();


	// CLEARING PLACEHOLDER AFTER FOCUS

	$('input,textarea').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder'))
		$(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
		$(this).attr('placeholder',$(this).data('placeholder'));
	});


	// SLIDER 

	$('.slider').slick({
		draggable: false,
		dots: true,
		arrows: false,
		autoplay: false,
		autoplaySpeed: 3000
	});

	$('.slider-test').slick({
		arrows: true,
		draggable: false,
		slidesToShow: 5,
		centerMode: true,
		adaptiveHeight: true,
		infinite: false,
		variableWidth: true,
		autoplay: false,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 530,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

});