$(document).ready(function () {
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

    document.querySelector(".body").classList.toggle("body--hidden");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
});
