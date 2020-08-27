import $ from 'jquery';
import '@fancyapps/fancybox';
import Inputmask from 'inputmask';
import 'nouislider';
import 'select2';
import Swiper from 'swiper/bundle';
import 'tooltipster';
import './_backend';
// import 'skrollr';
// import '../js/skrollr'

$(document).ready(() => {
  // $('select').select2({
  //   minimumResultsForSearch: -1
  // });

  // var mySwiper = new Swiper('.swiper-container', {
  //   speed: 400,
  //   spaceBetween: 100,
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  // });

  function adjustWindow(){

    // Get window size
    winH = $window.height();
    winW = $window.width();

    // Keep minimum height 550
    if(winH <= 550) {
        winH = 550;
    }

    // Init Skrollr for 768 and up
    if( winW >= 768) {

        // Init Skrollr
        var s = skrollr.init({
            forceHeight: false
        });

        // Resize our slides
        $slide.height(winH);

        s.refresh($('.homeSlide'));

    } else {

        // Init Skrollr
        var s = skrollr.init();
        s.destroy();
    }

    // Check for touch
    if(Modernizr.touch) {

        // Init Skrollr
        var s = skrollr.init();
        s.destroy();
    }

}
function initAdjustWindow() {
  return {
      match : function() {
          adjustWindow();
      },
      unmatch : function() {
          adjustWindow();
      }
  };
}

enquire.register( initAdjustWindow(), false);

// skrollr.init();

// // Setup variables
// $window = $(window);
// $slide = $('.homeSlide');
// $body = $('body');

//   //FadeIn all sections
// $body.imagesLoaded( function() {
//   setTimeout(function() {

//         // Resize sections
//         adjustWindow();

//         // Fade in sections
//       $body.removeClass('loading').addClass('loaded');

//   }, 800);
// });

// function adjustWindow(){

//   // Init Skrollr
//   var s = skrollr.init({
//       forceHeight: false
//   });

//   // Get window size
//     winH = $window.height();

//     // Keep minimum height 550
//     if(winH <= 550) {
//     winH = 550;
//   }

//     // Resize our slides
//     $slide.height(winH);

//     // Refresh Skrollr after resizing our sections
//     s.refresh($('.homeSlide'));

// }

});
