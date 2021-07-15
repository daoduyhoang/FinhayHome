$(".slider-post").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 1,
      nav: false,
    },
    1000: {
      items: 3,
    },
  },
  navText: [
    "<img src='./images/kienthuc/arl.svg'>",
    "<img src='./images/kienthuc/arr.svg'>",
  ],
});

$(document).ready(function () {
  if ($(window).width() <= 768) {
    $(".slider-mb").addClass("owl-carousel owl-theme");
    $(".slider-mb").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      dots: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        768: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  }
});
