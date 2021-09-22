const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  // клавиатура
  keyboard: {
    enabled: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
});


$(function(){
  $('.newsletter').parallax({imageSrc: '../img/newsletterbackground.jpg'});
});