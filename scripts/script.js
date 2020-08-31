$(document).ready(function(){

	// BURGER

	let burger = document.getElementById("burger");
	let list = document.getElementById("list");
	burger.onclick = function() {
		burger.classList.toggle("_active");
		list.classList.toggle("_active");
	}
	
	headerLinks = document.querySelectorAll('.header__link a');
	
	for(let index = 0; index < headerLinks.length; index++)
	{
		headerLink = headerLinks[index];

		headerLink.addEventListener('click', function() {
			burger.classList.toggle("_active");
			list.classList.toggle("_active");
		});
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
		appendDots: $('.header__wrapper')
	});

	$('.slider-text').slick ({
		arrows: false,
		slidesToShow: 1,
		draggable: false,
		asNavFor: ".slider-image"
	});

	$('.slider-image').slick({
		arrows: true,
		asNavFor: '.slider-text',
		draggable: false,
		slidesToShow: 5,
		centerMode: true,
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


	// FIX HEADER ROW

	const headerWrapperRow = $('.header__wrapper1-row');
	const headerRowOffset = $('.header__row').offset().top;
	
	$(window).scroll(function() {
		const scrolled = $(this).scrollTop();
		
		if(scrolled > headerRowOffset) 
			headerWrapperRow.addClass('fixed');
		else if (scrolled <= headerRowOffset)
			headerWrapperRow.removeClass('fixed');
	});


	// SMOOTH SCROLL

	$("a").click(function () {
		elementClick = $(this).attr("href")
		destination = $(elementClick).offset().top;
		$("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 70}, 1600);
		return false;
	});

	// POPUP

	const openPPs = document.querySelectorAll('.pp');
	const popup = document.querySelector('.popup');
	const popupBody = document.querySelectorAll('.popup__body');
	const body = document.querySelector('body');
	const closePP = document.querySelector('.close-popup');

	for (let index = 0; index < openPPs.length; index++) {
		
		const openPP = openPPs[index];

		openPP.addEventListener('click', function() {
			if(burger.classList.contains("_active") && list.classList.contains("_active"))
			{
				burger.classList.toggle("_active");
				list.classList.toggle("_active");
			}

			popup.classList.add('_active');
			body.style.overflow = 'hidden';
		});
	}

	closePP.addEventListener('click', function() {
		popup.classList.remove('_active');
		body.style.overflow = 'visible';
	});
	
	popup.addEventListener('click', function(e) {
		if(popup.classList.contains('_active') &&  e.target == popup) 
		{
			popup.classList.remove('_active');
			body.style.overflow = 'visible';
		}
	});

	// READ MORE 

	const headerText = document.querySelectorAll('.header__text');
	const hiddenText = document.querySelectorAll('.hidden-text');

	for (let index = 0; index < headerText.length; index++) {
		
		headerText[index].addEventListener('click', function() {
			
			for (let index = 0; index < hiddenText.length; index++) {
				hiddenText[index].classList.toggle('_active');
			}
		});
	}
});