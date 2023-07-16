var swiper = new Swiper(".hero__swiper", {
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  //   pauseOnMouseEnter: true,
  // },
  speed: 1000,
  slidersPerView: 1,
  loop: false,
  direction: "vertical",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var serviceswiper = new Swiper(".service__swiper", {
  slidesPerView: 5,

  speed: 1000,
  spaceBetween: 0,
  loop: false,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var reviewswiper = new Swiper(".review__swiper", {
  speed: 1000,
  spaceBetween: 0,
  loop: false,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// header sticky on scroll
$(document).ready(function () {
  var sticky = function () {
    if ($(this).scrollTop() > 120) {
      $(".header").addClass("header-sticky");
    } else {
      $(".header").removeClass("header-sticky");
    }
  };

  $(window).on("scroll load", sticky);
  const chill = new WOW({
    boxClass: "chill", // default
    offset: 20,
  });
  chill.init();

  // move to next section on click
  $(".hero__next").on("click", function () {
    var sectionId = $("#service-right");
    var sectionOffset = sectionId.offset().top;

    $("html, body").animate(
      {
        scrollTop: sectionOffset,
      },
      1000
    );
  });

  $(".hover-area").on("mouseenter", function (e) {
    var hoverAreaHeight = $(".hover-area").height();
    var mouseY = e.clientY - $(this).offset().top;

    if (mouseY < hoverAreaHeight) {
      $(this).parent().addClass("hover");
    }
  });
});
