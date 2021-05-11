// Show the first tab and hide the rest
$(".products_tab li:first-child").addClass("active_tab");
$(".tab-info").hide();
$(".tab-info:first").show();

// Click function
$(".products_tab li").click(function () {
  $(".products_tab li").removeClass("active_tab");
  $(this).addClass("active_tab");
  $(".tab-info").hide();

  var activeTab = $(this).find("a").attr("href");
  $(activeTab).fadeIn();
  return false;
});

// Show the first tab and hide the rest
$(".list_steps li:first-child").addClass("active-step");
$(".step-common").hide();
$(".step-common:first").show();

// Click function
$(".list_steps li").click(function () {
  $(".list_steps li").removeClass("active-step");
  $(this).addClass("active-step");
  $(".step-common").hide();

  var activeTab = $(this).attr("data-content");
  console.log(activeTab);
  $(activeTab).fadeIn();
  return false;
});

// SLICK SLIDER
if ($(window).width() <= 480) {
  $(".standard_row").slick({
    dots: true,
    arrows: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
    // slidesToShow: 1,
    // slidesToScroll: 1,
  });
  $(".step-common").show();
  $(".steps_content").slick({});
}

$(".exper-slick").slick({
  dots: true,
  arrows: false,
  // autoplay: true,
  // autoplaySpeed: 3000,
});

$(".slider-newspapers").slick({
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: "<button class='slick-prev-custom'>Pre</button>",
  nextArrow: "<button class='slick-next-custom'>Next</button>",
});

$(".standard_slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
});

$(window).scroll(function () {
  var sticky = $("#header"),
    scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass("fixed");
  else sticky.removeClass("fixed");
});

// $(".slider-banner-aboutus").owlCarousel({
//   autoWidth: true,
//   nav: true,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 3,
//     },
//     1000: {
//       items: 1,
//     },
//   },
// });

// JQUERY ABOUT US
if ($(window).width() <= 480) {
  $("#slider-banner-aboutus").owlCarousel({
    loop: true,
    nav: true,
    singleItem: true,
    margin: 20,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $("#leader-slider").owlCarousel({
    loop: true,
    nav: true,
    singleItem: true,
    margin: 20,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
}

$("#slider-people").owlCarousel({
  loop: true,
  nav: true,
  singleItem: true,
  margin: 20,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
var status = 1;
$("#btn_more").click(function () {
  $("#btn_more img").toggleClass("rotate_arrow");

  if (status == 1) {
    $(".more").html("Rút gọn").fadeIn();
    if ($(window).width() <= 480) {
      $("#content-more-mb").show(300);
      $(this).hide();
    } else {
      $("#content-more-pc").show(300);
    }
    status = 2;
    console.log(status);
  } else if (status == 2) {
    $("#content-more-mb").hide(150);
    $("#content-more-pc").hide(150);
    $(".more").html("Xem thêm").fadeIn();
    status = 1;
  }
});
$(".btn-up").click(function () {
  $("#content-more-mb").hide(300);
  $("#btn_more img").toggleClass("rotate_arrow");
  $(".more").html("Xem thêm").fadeIn();
  $("#btn_more").show();
  status = 1;
});

// JQUERY DAU TU
// ACTIVE TAB
$(".btn-action li:first-child").addClass("active-btn");
$(".dots li:first-child").addClass("active-dot");
$(".hide-invest").hide();
$(".hide-invest:first").show();

// Click function
$(".btn-action li").click(function () {
  $(".btn-action li").removeClass("active-btn");
  $(this).addClass("active-btn");
  $(".hide-invest").hide();

  var activeTab = $(this).attr("data-toggle");
  var activeDot = $(this).attr("data-dot");
  $(".dots li").removeClass("active-dot");
  $(activeDot).addClass("active-dot");
  $(activeTab).fadeIn();
  console.log(activeTab);
  return false;
});
