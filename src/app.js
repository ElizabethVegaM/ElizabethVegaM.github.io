AOS.init();

$(".toggle").click(function() {
  $(".nav-bar").slideToggle();
$(this).toggleClass("is-active");
});
$(".dropdown").click(function() {
  $(".sub-nav").slideToggle();
  $(this).toggleClass("active");
});

