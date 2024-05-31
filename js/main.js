// $(window).scroll(function(){
//     var scrollTop = $(window).scrollTop();
//     var windowHeight = $(window).height();

//     $('.content-grid-post').each(function(){
//         var offsetTop = $(this).offset().top;

//         if (offsetTop < (scrollTop + windowHeight) && offsetTop + $(this).height() > scrollTop) {
//             if ($(this).index() % 2 === 0) {
//                 $(this).css({
//                     'transform': 'skewX(-10deg) rotate(-25deg) translateX(-20%)',
//                     'transition': 'all ease-in-out .5s'
//                 });
//             } else {
//                 $(this).css({
//                     'transform': 'skewX(10deg) rotate(25deg) translateX(25%)',
//                     'transition': 'all ease-in-out .5s'
//                 });
//             }
//         } else {
//             $(this).css({
//                 'transform': 'none',
//                 'transition': 'none'
//             });
//         }
//     });
// });

// // Run the scroll event once on page load to apply initial styles
// $(window).scroll();



// $(document).ready(function () {
//     // Trigger scroll event after a short delay to apply transformations to all elements
//     setTimeout(function () {
//         $(window).scroll();
//     }, 100);
// });

// $(window).scroll(function () {
//     var scrollTop = $(window).scrollTop();
//     var windowHeight = $(window).height();

//     $('.content-grid-post').each(function () {
//         var offsetTop = $(this).offset().top;

//         if (offsetTop < (scrollTop + windowHeight) && offsetTop + $(this).height() > scrollTop) {
//             var delay = 100; // Adjust the delay time as needed

//             setTimeout(() => {
//                 if ($(this).index() % 2 === 0) {
//                     $(this).css({
//                         'transform': 'skewX(-10deg) rotate(-25deg) translateX(-20%)',
//                         'transition': 'transform 0.5s ease-in-out'
//                     });
//                 } else {
//                     $(this).css({
//                         'transform': 'skewX(10deg) rotate(25deg) translateX(25%)',
//                         'transition': 'transform 0.5s ease-in-out'
//                     });
//                 }
//             }, delay);
//         } else {
//             $(this).css({
//                 'transform': 'none',
//                 'transition': 'transform 0.5s ease-in-out'
//             });
//         }
//     });
// });



// GSAP animation
// gsap.registerPlugin(ScrollTrigger);

// const tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".scroll-animation",
//         scrub: true,
//         pin: true,

//         start: "50% 50%",
//         end: "+=200%"
//     }
// })

//     .from(".wrapper", {
//         scale: 0.5,
//         ease: "none"
//     })



(function ($) {
    "use strict";
    $(document).foundation();

    $(document).ready(function () {

        $window = $(window);

        if ($(".manifesto-text").length > 0) {

            manifestoW = $(".manifesto-text").outerWidth();
            manifestoNeeded = manifestoW + (manifestoW / 5)
            $(".manifesto").css('width', manifestoNeeded)

            $(window).on('resize', function () {
                manifestoW = $(".manifesto-text").outerWidth();
                manifestoNeeded = manifestoW + (manifestoW / 5);
                $(".manifesto").css('width', manifestoNeeded)
            });

            var controller = new ScrollMagic.Controller();
            var tl = new TimelineMax();
            var elementWidth = document.getElementById('ani-container').offsetWidth;
            var width = window.innerWidth - elementWidth;
            var duration = elementWidth / window.innerHeight * 100;
            var official = duration + '%';
            tl
                .to('.h-scroll-container', 5, { x: width, ease: Power0.easeNone });

            var scene1 = new ScrollMagic.Scene({
                triggerElement: '.h-scroll-container',
                triggerHook: 0,
                duration: official
            })
                .setPin('.h-scroll-container')
                .setTween(tl)
                .addTo(controller);

            // console.log(elementWidth);

        }

        var $window = $(window);
        $window.scroll(function () {
            scrollTop = $(window).scrollTop();

            windowH = $(window).height()
            headerH = $('.header-equal').outerHeight();
            manifestoW = $('.manifesto').outerWidth();

            totalToManifesto = headerH - (windowH / 3)
            totalManifesto = headerH + manifestoW - (windowH / 1.5)

            $scroll = window.pageYOffset;


            if ($scroll > totalToManifesto) {
                $('.manifesto').stop().addClass('scrolled');
                $('body').stop().addClass('minifesto-scrolled');
            }
            if ($scroll < totalToManifesto) {
                $('.manifesto').stop().removeClass('scrolled');
                $('body').stop().removeClass('minifesto-scrolled');
            }
            if ($scroll > totalManifesto) {
                $('.manifesto').stop().removeClass('scrolled');
                $('body').stop().removeClass('minifesto-scrolled');
            }

        });

        $window.trigger('scroll');
        $(window).on('load', function () {
            $('html, body').animate({ scrollTop: 0 }, 'fast');
        });

        //Header script - Starts here	
        const header = document.querySelector('.header-scroll-effect');
        const main = document.querySelector('.main-header');
        function toggleHeaderBlur() {
            if (window.scrollY > 10) {
                main.classList.add('header-scroll-effect');
            } else {
                main.classList.remove('header-scroll-effect');
            }
        }
        window.addEventListener('scroll', toggleHeaderBlur);
        toggleHeaderBlur();

        // Find the child element with the specified class name
        var currentmenu = $('.current-menu-item');
        // Find the parent element using closest()
        var parentmenu = currentmenu.closest('.mdp-huger-elementor-submenu').siblings();
        // Do something with the parent element
        parentmenu.addClass("current-menu-parent");
        //Header script - Ends here	


        // Homepage video script - Starts here	
        //         $('.elementor-video').each(function () {
        //             var video = $(this)[0];
        //             var playButton = $(this).closest(".elementor-element").siblings().children().find('.play-button');
        //             video.controls = false;
        //             $(video).on('play', function () {
        //                 playButton.hide();
        //                 video.controls = true;
        //             });
        //             $(video).on('pause ended', function () {
        //                 playButton.show();
        //                 video.controls = false;
        //             });
        //             playButton.click(function () {
        //                 if (video.paused || video.ended) {
        //                     video.play();
        //                 }
        //                 else {
        //                     video.pause();
        //                 }
        //             });
        //         });
        // Homepage video script - Ends here	



        // continue reading hide script starts

        var currentUrl = window.location.href;
        if (currentUrl.includes('utm_source')) {
            var utmSource = getUrlParameter('utm_source');
            if (utmSource !== null) {
                $('.hidden_content').addClass('show');
                $('.contin_reading').hide();
            }
            else {
                $('.contin_reading').show();
                $('.hidden_content').removeClass('show');
            }

            // Function to get URL parameters
            function getUrlParameter(name) {
                name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
                var results = regex.exec(location.search);
                return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
            }
        } else {
            $('.hidden_content').removeClass('show');
        }

        // continue reading hide script ends

        //blog cont reading script starts
        $('.hidden_content').addClass('hidden');
        if (localStorage.getItem('mod') == 1) {
            $('.hidden_content').removeClass('hidden');
        }


        $("#contin_reading").on("click", function () {
            if (localStorage.getItem('mod') == null) {
                $('.modal').addClass('show');
            }
            else {
                $('.hidden_content').removeClass('hidden');
            }
        });


        if ($('.hidden_content').hasClass('hidden')) {
            $('.fixed_image').hide();
        }
        else {
            $('.fixed_image').show();
        }


        $(".wpcf7").on('wpcf7mailsent', function () {
            localStorage.setItem('mod', 1);
            $('.modal').removeClass('show');
            $('.hidden_content').removeClass('hidden')
        });

        $('.email-form .close').on('click', function (event) {
            $('.modal').removeClass('show');
        });
        //blog cont reading script ends

        //table of content click function script starts

        $(document).ready(function () {
            var headerHeight = $('.main-header').outerHeight() + 20; // Add 20px for additional padding
            var lastScrollTop = 0;

            // Function to adjust padding for sections
            function adjustSectionPadding() {
                var scrollTop = $(window).scrollTop();

                // Check the scroll direction
                var scrollDirection = (scrollTop > lastScrollTop) ? 'down' : 'up';
                lastScrollTop = scrollTop;

                // Apply padding based on scroll direction
                $('.elementor-menu-anchor').each(function () {
                    var sectionTop = $(this).offset().top;

                    if (scrollDirection === 'down' && scrollTop >= sectionTop - headerHeight) {
                        $(this).css('padding-top', headerHeight + 'px');
                        $(this).next('.elementor-menu-anchor').css('padding-top', '0');
                        $(this).prev('.elementor-menu-anchor').css('padding-top', '0');
                    } else if (scrollDirection === 'up' && scrollTop < sectionTop - headerHeight) {
                        $(this).css('padding-top', '0');
                    }
                });
            }

            // Call the adjustSectionPadding function on scroll
            $(window).on('scroll', function () {
                adjustSectionPadding();
            });

            // Call the adjustSectionPadding function on page load
            adjustSectionPadding();
        });





    }); //ready ends
})(jQuery);
