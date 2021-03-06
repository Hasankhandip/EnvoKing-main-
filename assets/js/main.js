// header-section js start
$(window).on("scroll", function(){
  if ($(this).scrollTop() > 5 ) {
    $(".header-section").addClass("active");
  } else {
    $(".header-section").removeClass("active");
  }
});
// header-section js end


  // progressbar js start
  
  $(document).ready(function () {
    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });
    jQuery('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    })
});
  // progressbar js end

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