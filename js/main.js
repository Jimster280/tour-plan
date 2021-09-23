const hotelSlider = new Swiper('.hotel-swiper', {
  // Optional parameters
  loop: true,
  // клавиатура
  keyboard: {
    enabled: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider-button--next',
    prevEl: '.hotel-slider-button--prev',
  },
});


$(function(){
  $('.newsletter').parallax({imageSrc: '../img/newsletterbackground.jpg'});
});

const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  // клавиатура
  keyboard: {
    enabled: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
});