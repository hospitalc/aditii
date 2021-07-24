$(document).ready(function() {
	$('.main__slider').slick({
		dots: true,
		arrows: false,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 1000,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,

	});

	$('.slider').slick({
		slidesToShow: 3,
		adaptiveHeight: true,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1366,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},

			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll:1,
				}
			},

			{
				breakpoint: 768,
				settings: {
					arrows: false,
					slidesToShow: 1,
					slidesToScroll:1,
				}
			},
		]
	});

	$('.header__burger').click(function(event) {
		$('.header__menu, .header__burger').toggleClass('active');
		$('body').toggleClass('lock');

	});

	const animItems = document.querySelectorAll('._anim-items');

	if (animItems.length > 0) {
		window.addEventListener('scroll', animOnScroll);
		function animOnScroll() {
			for (let i = 0; i < animItems.length; i++) {
				const animItem = animItems[i];
				const animItemHeight = animItem.offsetHeight;
				const animItemOffset = offset(animItem).top;
				const animStart = 7;

				let animItemPoint = window.innerHeight - animItemHeight / animStart;

				if (animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart;
				}

				if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
					animItem.classList.add('_active');
				} else {
					if (!animItem.classList.contains('_anim-no-hide')) {
						animItem.classList.remove('_active');
					}	
				}
			}	

		}

		function offset(el) {
			const rect = el.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
		}

		setTimeout(() => {
			animOnScroll();
		}, 500)
		
	}

});

