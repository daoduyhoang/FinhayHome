// menu js
$(".header_menu").hover(function () {
  $(this).addClass("open");
});
$(".header_menu-item").each(function () {
  $(this).hover(function () {
    if ($(this).find(".header_submenu").length !== 0) {
      $(".header_menu").addClass("open");
      $(".header_submenu").removeClass("open");
      $(this).find(".header_submenu").addClass("open");
    } else {
      $(".header_menu").removeClass("open");
      $(".header_submenu").removeClass("open");
    }
  });
});
$("#header").mouseleave(function () {
  $(".header_menu").removeClass("open");
  $(".header_submenu").removeClass("open");
});

$(".slider-newspapers").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  items: 6,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 2300,
  autoplaySpeed: 1700,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2,
      nav: false,
      dots: false,
    },
    767: {
      items: 3,
      nav: false,
      dots: false,
    },
    991: {
      items: 4,
      nav: true,
    },
  },
});

if ($(window).width() < 767) {
  $(".slider-standard").owlCarousel({
    loop: false,
    items: 1,
    margin: 0,
    nav: false,
    responsive: {
      0: {
        items: 1,
        nav: true,
        dot: true,
      },
      800: {
        items: 1,
        nav: true,
        dot: true,
      },
      1000: {
        items: 1,
      },
    },
  });
}

// creat menu sidebar
$(".menu-bar-lv-1").each(function () {
  $(this)
    .find(".span-lv-1")
    .click(function () {
      if ($(this).hasClass("rotate-menu")) {
        $(".menu-bar-lv-2").hide(500);
        $(this).removeClass("rotate-menu");
      } else {
        $(".menu-bar-lv-2").hide(500);
        $(".span-lv-1").removeClass("rotate-menu");
        $(this).toggleClass("rotate-menu");
        $(this).parent().find(".menu-bar-lv-2").toggle(500);
      }
    });
});
$(".menu-bar-lv-2").each(function () {
  $(this)
    .find(".span-lv-2")
    .click(function () {
      $(this).toggleClass("rotate-menu");
      $(this).parent().find(".menu-bar-lv-3").toggle(500);
    });
});
$(".shadow-open-menu").click(function () {
  $(".menu-bar-mobile").fadeOut();
  $(".shadow-open-menu").fadeOut();
  $(".iconmenu").toggleClass("open");
  $(".hide-mobile-check").removeClass("show");
});
$(".iconmenu").click(function () {
  $(this).toggleClass("open");
  $(".menu-bar-mobile").fadeToggle(500);
  $(".shadow-open-menu").fadeToggle(500);
});

$(".slider-product-content").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: ".slider-product-tab",
});
$(".slider-product-tab").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".slider-product-content",
  arrows: false,
  dots: false,
  focusOnSelect: true,
  infinite: false,
  touchMove: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        swipeToSlide: true,
        slidesToShow: 3,
        variableWidth: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        swipeToSlide: true,
        slidesToShow: 3,
        variableWidth: true,
      },
    },
  ],
});

$(".slider-steps-content").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: ".slider-tab-steps",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        swipeToSlide: true,
        dots: true,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        swipeToSlide: true,
        dots: true,
        slidesToShow: 1,
      },
    },
  ],
});
$(".slider-tab-steps").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-steps-content",
  arrows: false,
  dots: false,
  focusOnSelect: true,
  infinite: false,
  touchMove: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        swipeToSlide: true,
        slidesToShow: 3,
        variableWidth: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        swipeToSlide: true,
        slidesToShow: 3,
        variableWidth: true,
      },
    },
  ],
});

$(".slider-exper").owlCarousel({
  loop: true,
  margin: 0,
  items: 1,
  nav: true,
  dots: true,
});

// // Show the first tab and hide the rest
// $(".products_tab li:first-child").addClass("active_tab");
// $(".tab-info").hide();
// $(".tab-info:first").show();

// // Click function
// $(".products_tab li").click(function () {
//   $(".products_tab li").removeClass("active_tab");
//   $(this).addClass("active_tab");
//   $(".tab-info").hide();

//   var activeTab = $(this).find("a").attr("href");
//   $(activeTab).fadeIn();
//   return false;
// });

// // Show the first tab and hide the rest
// $(".list_steps li:first-child").addClass("active-step");
// $(".step-common").hide();
// $(".step-common:first").show();

// // Click function
// $(".list_steps li").click(function () {
//   $(".list_steps li").removeClass("active-step");
//   $(this).addClass("active-step");
//   $(".step-common").hide();

//   var activeTab = $(this).attr("data-content");
//   console.log(activeTab);
//   $(activeTab).fadeIn();
//   return false;
// });

// // SLICK SLIDER
// if ($(window).width() <= 480) {
//   $(".standard_row").slick({
//     dots: true,
//     arrows: true,
//     // autoplay: true,
//     // autoplaySpeed: 3000,
//     // slidesToShow: 1,
//     // slidesToScroll: 1,
//   });
//   $(".step-common").show();
//   $(".steps_content").slick({});
// }

// $(".exper-slick").slick({
//   dots: true,
//   arrows: false,
//   // autoplay: true,
//   // autoplaySpeed: 3000,
// });

// $(".slider-newspapers").slick({
//   dots: false,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   prevArrow: "<button class='slick-prev-custom'>Pre</button>",
//   nextArrow: "<button class='slick-next-custom'>Next</button>",
// });

// $(".standard_slider").slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
// });

$(window).scroll(function () {
  var sticky = $("#header, .menu-bar-mobile"),
    scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass("fixed");
  else sticky.removeClass("fixed");
});

// TICH LUY
$("#section_accumale_mobile").owlCarousel({
  loop: false,
  margin: 10,
  responsiveClass: true,
  // items: 6,
  nav: true,
  dots: true,
  // autoplay: true,
  // autoplayTimeout: 2300,
  // autoplaySpeed: 1700,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    767: {
      items: 1,
      nav: false,
    },
    991: {
      items: 1,
      nav: true,
    },
  },
});
