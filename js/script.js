$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 5,
  responsiveClass: true,
  mouseDrag: true,
  tochDrag: true,
  merge: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
      mergeFit: true,
    },
    640: {
      items: 1,
      nav: false,
      mergeFit: true,
    },
    768: {
      items: 2,
      nav: false,
      loop: false,
      mergeFit: true,
    },
    1024: {
      items: 3,
      navElement: true,
      loop: false,
      mergeFit: true,
    },
    1200: {
      items: 4,
      navElement: true,
      loop: false,
      mergeFit: true,
    },
  },
});

feather.replace();

$(".hamburgermenu").on("click", function () {
  $("div.hamburgermenu span:nth-child(1)").toggleClass("rotateTop");
  $("div.hamburgermenu span:nth-child(3)").toggleClass("rotateBottom");
  $("div.hamburgermenu span:nth-child(2)").toggleClass("hide");
  $("ul.list").toggleClass("slide");
});

$(".scroll-page").on("click", function (event) {
  var tujuan = $(this).attr("href");

  var elementtujuan = $(tujuan);

  $("html, body").animate(
    {
      scrollTop: $(elementtujuan).offset().top - 50,
    },
    2000,
    "easeInOutExpo"
  );

  event.preventDefault();
});

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $(".navigasi").addClass("nav-active");
  } else {
    $(".navigasi").removeClass("nav-active");
  }
});
