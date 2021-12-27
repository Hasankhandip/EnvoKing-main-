// header-section js start
$(window).on("scroll", function(){
  if ($(this).scrollTop() > 5 ) {
    $(".header-section").addClass("active");
  } else {
    $(".header-section").removeClass("active");
  }
});
// header-section js end

// button js start
$( ".btn-1-inner" ).mouseenter(function(e) {
  var parentOffset = $(this).offset(); 
  var relX = e.pageX - parentOffset.left;
  var relY = e.pageY - parentOffset.top;
  $(this).prev(".btn-1-circle").css({"left": relX, "top": relY });
  $(this).prev(".btn-1-circle").removeClass("desplode-circle");
  $(this).prev(".btn-1-circle").addClass("explode-circle");
});
$( ".btn-1-inner" ).mouseleave(function(e) {
    var parentOffset = $(this).offset(); 
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".btn-1-circle").css({"left": relX, "top": relY });
    $(this).prev(".btn-1-circle").removeClass("explode-circle");
    $(this).prev(".btn-1-circle").addClass("desplode-circle");
});
// button js end

 // wow.js start
 new WOW().init();
 // wow.js end

 // slick slider start
$(document).ready(function(){
  $('.team-member-area').slick({
    prevArrow: ".left-arrow-team",
    nextArrow:  ".right-arrow-team",
    slidesToShow: 2,
  slidesToScroll: 1
  });
  $('.testimonial-area').slick({
    prevArrow: ".left-arrow-testimonial",
    nextArrow:  ".right-arrow-testimonial",
    slidesToShow: 1,
  slidesToScroll: 1
  });
});
// slick slider end