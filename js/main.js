var swiperOne = new Swiper('.swiper-container--one', {
	loop: true,
	autoplay: {
		delay: 5000
	},
	pagination: {
		el: '.swiper-pagination--one',
		clickable: false,
	},
});

var swiperQuotes = new Swiper('.swiper-container--quotes', {
	navigation: {
		nextEl: '.swiper-button-next-quotes',
		prevEl: '.swiper-button-prev-quotes',
	},
});

var swiperGallery = new Swiper('.swiper-container--gallery', {
	effect: 'cube',
	grabCursor: true,
	cubeEffect: {
		shadow: true,
		slideShadows: true,
		shadowOffset: 20,
		shadowScale: 0.94,
	}
});
