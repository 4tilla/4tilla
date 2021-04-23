$("#topheader .navbar-nav a").on("click", function () {
  $("#topheader .navbar-nav").find("li.active").removeClass("active");
  $(this).parent("li").addClass("active");
});

// AOS ANIMATION
AOS.init({
  disable: "mobile",
  duration: 800,
  anchorPlacement: "center-bottom",
});

// SMOOTH SCROLL
$(function () {
  $(".nav-link").on("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 0,
        },
        1000
      );
    event.preventDefault();
  });
});
