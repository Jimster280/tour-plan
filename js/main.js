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

  // Create the measurement node
  var scrollDiv = document.createElement("div");
  scrollDiv.className = "scrollbar-measure";
  document.body.appendChild(scrollDiv);

  // Get the scrollbar width
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  console.warn(scrollbarWidth); // Mac:  15

  // Delete the DIV
  document.body.removeChild(scrollDiv);

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
    $("body").css("overflow", "hidden");
    $("body").css("padding-right", scrollbarWidth);
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    $("body").css("padding-right", "0");
    $("body").css("overflow", "auto");
  }
  // обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Имя должно быть не короче 2х букв",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "We need ur phone number",
          phone: "Your phone number must be in the format of +7(9**) ***-**-**",
        },
      },
    });
  });

  $(function () {
    $("#phone").mask("8(999) 999-9999");
  });
});
