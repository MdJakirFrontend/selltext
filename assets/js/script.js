/**
 * @Script js for (Template/Project Name)
 *
 * @project     - cloud show
 * @author      - cloud show
 * @created_by  - kawsar bin siraj
 * @created_at  - 08-11-2020
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // typed-animation
    $(function () {
        $(".typed-animation-1").typed({
            strings: ["hello to",],
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            stringsElement: null,
            // typing speed
            typeSpeed: 100,
            // time before typing starts
            startDelay: 100,
            // backspacing speed
            backSpeed: 20,
            // time before backspacing
            backDelay: 500,
            // loop
            loop: true,
            // false = infinite
            loopCount: false,
            // show cursor
            showCursor: false,
            // character for cursor
            cursorChar: "|",
            // attribute to type (null == text)
            attr: null,
            // either html or text
            contentType: 'html',
            // call when done callback function
            callback: function () { },
            // starting callback function before each string
            preStringTyped: function () { },
            //callback for every typed string
            onStringTyped: function () { },
            // callback for reset
            resetCallback: function () { }
        });

        // $.fn.firstWord = function () {
        //     var text = this.text().trim().split(" ");
        //     var first = text.shift();
        //     this.html((text.length > 0 ? "<span class='firstWord'>" + first + "</span> " : first) + text.join(" "));
        // };
        // $("#firstWord").firstWord();

    });
});





/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {

    $(".referralCode").on('change', function () {
        if (this.checked) {
            $('.referralField').addClass('d-block').removeClass('d-none');
        } else {
            $('.referralField').addClass('d-none').removeClass('d-block');
        }
    });

    $('.showPass').on('click', function () {
        var passShowHide = document.getElementById("password");
        if (passShowHide.type === "password") {
            passShowHide.type = "text";
        } else {
            passShowHide.type = "password";
        }
        $(this).toggleClass('ni-eye-fill ni-eye-off-fill');
    })

    // priceSampleWrapper slider
    if ($('.priceSampleWrapper ').length) {
        $('.priceSampleWrapper ').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            stagePadding: 30,
            navText: ['<span class="ni ni-arrow-long-left"></span>', '<span class="ni ni-arrow-long-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        })
    }


    $(function () {
        if ($('.testimonialWrapper').length) {
            $(".testimonialWrapper").owlCarousel({
                loop: $('.testimonialWrapper .singleInfo').length > 1 ? true : false,
                items: 3,
                center: true,
                margin: 30,
                nav: $(window).width() > 1024 ? true : false,
                dots: true,
                autoplay: false,
                autoplayHoverPause: true,
                navText: ['<span class="ni ni-arrow-long-left"></span>', '<span class="ni ni-arrow-long-right"></span>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    }
                }
            });
        }
    });

    $(function () {
        if ($('.testimonial-items').length) {
            $(".testimonial-items").owlCarousel({
                loop: true,
                items: 1,
                center: true,
                margin: 30,
                nav: true,
                dots: false,
                autoplay: false,
                autoplayHoverPause: true,
                navText: ['<span class="ni ni-arrow-long-left"></span>', '<span class="ni ni-arrow-long-right"></span>'],
            });
        }
    });

});