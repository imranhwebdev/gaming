(function() {
    'use strict';
   
    jQuery(document).ready(function() {

        $('.active-slider').owlCarousel({
            nav: true,
            navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
            dot: true,
            items: 1,
            animateOut: 'fadeOut',
            loop: true,
            margin: 10,
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 1,
                },
                768: {
                    items: 1,
                }
            }

        });
        
        $('.team-area-wrapper').owlCarousel({
            nav: true,
            navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
            dot: false,
            items: 3,
            loop: false,
            margin: 10,
            responsive: {
                0: {
                    items: 1,
                    margin:5,
                },
                480: {
                    items: 1.5,
                    margin:10,
                },
                768: {
                    items: 2,
                },
                1024: {
                    items: 2.5,
                },
                1280: {
                    items: 3,
                }
            }

        });
        
        $('.roadmap-wrapper').owlCarousel({
            nav: false,
            navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
            dot: false,
            items: 1.2,
            animateOut: 'fadeOut',
            loop: false,
            margin: 15,

        });

       

    });
    AOS.init();

        /*----------------------------
   Sticky menu active
   ------------------------------ */
   document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 250) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 
})();