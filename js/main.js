const hotelSlider = new Swiper(".hotel-swiper", {
  // Optional parameters
  loop: true,
  // клавиатура
  keyboard: {
    enabled: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider-button--next",
    prevEl: ".hotel-slider-button--prev",
  },
});

$(function () {
  $(".newsletter").parallax({ imageSrc: "../img/newsletterbackground.jpg" });
});

const reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
});

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  console.log("клик по кнопке меню");
  document
    .querySelector(".navbar-bottom")
    .classList.toggle("navbar-bottom--visible");
});
