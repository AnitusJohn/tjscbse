/*
	Author       : Theme-Family
	Template Name: Akids - Kingdergarden School Website Template
	Version      : 1.0.2
	
/***************************************************
==================== JS ======================
****************************************************
01. PRELOADER JS
02. Header Search js
03.	STICKY HEADER JS
04. MOBILE MENU 
05. SCROLL MENU
06. BACK TO TOP
07. GSAP JS
08. Porfolio isotope
09. START Countdown JS
10. Magnific Popup
11. ODOMETER JS
12. WOW SCROLL
13. MAILCHAMP JS

****************************************************/
(function ($) {
    "use strict";

    /*--------------------------------------------------------------
     01.  PRELOADER
      --------------------------------------------------------------*/
    $(window).on("load", function () {
        $(".atf-status").fadeOut();
        $(".atf-preloader").delay(350).fadeOut("slow");
    });
    /*--------------------------------------------------------------
	02.	Header Search js
	--------------------------------------------------------------*/
    $(".atf-searching-btn").on("click", function () {
        $(".atf-searching-area").addClass("active");
    });

    $(".atf-searching-close-btn").on("click", function () {
        $(".atf-searching-area").removeClass("active");
    });

    /*--------------------------------------------------------------
    03. STICKY HEADER JS
      --------------------------------------------------------------*/

    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 10) {
            $(".atf-sticky-header").addClass("atf-sticky-active");
        } else {
            $(".atf-sticky-header").removeClass("atf-sticky-active");
        }
    });
    /*--------------------------------------------------------------
    04. Mobile Menu
      --------------------------------------------------------------*/
    // Menu toggle for mobile view
    $(".atf-nav").append('<span class="atf-menu-toggle"><span></span></span>');
    $(".menu-item-has-children").append('<span class="atf-menu-dropdown-toggle"></span>');

    $(".atf-menu-toggle").on("click", function () {
        $(this).toggleClass("atf-toggle-active").siblings(".atf-nav-list").slideToggle();
    });

    $(".atf-menu-dropdown-toggle").on("click", function () {
        $(this).toggleClass("active").siblings("ul").slideToggle();
    });

    // Auto close menu after clicking link (for one-page)
    $(".atf-onepage-nav > li > a").on("click", function () {
        if ($(window).width() <= 992) {
            $(".atf-nav-list").slideUp();
            $(".atf-menu-toggle").removeClass("atf-toggle-active");
        }
    });
    /*--------------------------------------------------------------
       One Page Navigation
      --------------------------------------------------------------*/
    //05.SCROLL MENU
    $(".atf-smooth-move").on("click", function () {
        var thisAttr = $(this).attr("href");
        if ($(thisAttr).length) {
            var scrollPoint = $(thisAttr).offset().top - 50;
            $("body,html").animate(
                {
                    scrollTop: scrollPoint,
                },
                800
            );
        }
        return false;
    });

    // One Page Active Class
    var topLimit = 300,
        ultimateOffset = 200;

    $(".atf-onepage-nav").each(function () {
        var $this = $(this),
            $parent = $this.parent(),
            current = null,
            $findLinks = $this.find("a");

        function getHeader(top) {
            var last = $findLinks.first();
            if (top < topLimit) {
                return last;
            }
            for (var i = 0; i < $findLinks.length; i++) {
                var $link = $findLinks.eq(i),
                    href = $link.attr("href");

                if (href.charAt(0) === "#" && href.length > 1) {
                    var $anchor = $(href).first();
                    if ($anchor.length > 0) {
                        var offset = $anchor.offset();
                        if (top < offset.top - ultimateOffset) {
                            return last;
                        }
                        last = $link;
                    }
                }
            }
            return last;
        }

        $(window).on("scroll", function () {
            var top = window.scrollY,
                height = $this.outerHeight(),
                max_bottom = $parent.offset().top + $parent.outerHeight(),
                bottom = top + height + ultimateOffset;

            var $current = getHeader(top);

            if (current !== $current) {
                $this.find(".active").removeClass("active");
                $current.addClass("active");
                current = $current;
            }
        });
    });

    /*--------------------------------------------------------------
     06. BACK TO TOP
      --------------------------------------------------------------*/

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".atf-sticky-header").addClass("atf-nav");
            $(".atf-back-to-top").addClass("open");
        } else {
            $(".atf-sticky-header").removeClass("atf-nav");
            $(".atf-back-to-top").removeClass("open");
        }
    });

    /*--------------------------------------------------------------
       Scroll UP
      --------------------------------------------------------------*/

    if ($(".atf-back-to-top").length) {
        $(".atf-back-to-top").on("click", function () {
            var target = $(this).attr("data-targets");
            // animate
            $("html, body").animate(
                {
                    scrollTop: $(target).offset().top,
                },
                1000
            );
        });
    }

    /* --------------------------------------------------------
	07. GSAP JS
		--------------------------------------------------------- */

    document.addEventListener("DOMContentLoaded", function () {
        // Split Content animation
        if ($(".split-content").length > 0) {
            let st = $(".split-content");
            if (st.length == 0) return;
            gsap.registerPlugin(SplitText);
            st.each(function (index, el) {
                el.split = new SplitText(el, {
                    type: "lines,words,chars",
                    linesClass: "atf-split-line",
                });
                gsap.set(el, {
                    perspective: 400,
                });
                if ($(el).hasClass("end")) {
                    gsap.set(el.split.chars, {
                        opacity: 0,
                        x: "50",
                        ease: "Back.easeOut",
                    });
                }
                if ($(el).hasClass("start")) {
                    gsap.set(el.split.chars, {
                        opacity: 0,
                        x: "-50",
                        ease: "circ.out",
                    });
                }
                if ($(el).hasClass("up")) {
                    gsap.set(el.split.chars, {
                        opacity: 0,
                        y: "80",
                        ease: "circ.out",
                    });
                }
                if ($(el).hasClass("down")) {
                    gsap.set(el.split.chars, {
                        opacity: 0,
                        y: "-80",
                        ease: "circ.out",
                    });
                }
                el.anim = gsap.to(el.split.chars, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                    },
                    x: "0",
                    y: "0",
                    rotateX: "0",
                    scale: 1,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.04,
                });
            });
        }

        // Image spread js
        let revealContainers = document.querySelectorAll(".spread");
        revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "play none none none",
                },
            });

            tl.set(container, {
                autoAlpha: 1,
            });

            if (container.classList.contains("zoom-out")) {
                // Zoom-out effect
                tl.from(image, 1.5, {
                    scale: 1.4,
                    ease: Power2.out,
                });
            } else if (container.classList.contains("start") || container.classList.contains("end")) {
                let xPercent = container.classList.contains("start") ? -100 : 100;
                tl.from(container, 1.5, {
                    xPercent,
                    ease: Power2.out,
                });
                tl.from(image, 1.5, {
                    xPercent: -xPercent,
                    scale: 1,
                    delay: -1.5,
                    ease: Power2.out,
                });
            }
        });
    });

    /*--------------------------------------------------------------
	08.	Porfolio isotope
      --------------------------------------------------------------*/
    var portfolioIsotope = $(".atf-gallery-grid").isotope({
        itemSelector: ".grid-item",
    });

    $(".portfolio-filter button").on("click", function () {
        $(".portfolio-filter button").removeClass("active");
        $(this).addClass("filter-active");

        portfolioIsotope.isotope({
            filter: $(this).data("filter"),
        });
    });

    //**===================END Porfolio isotope ===================**//

    /*--------------------------------------------------------------
	09. START Countdown JS
	  --------------------------------------------------------------*/

    $("#countdown").countdown("2040/3/10", function (event) {
        var $this = $(this).html(
            event.strftime("" + "<div><strong>%D</strong> <br />Days </div>" + "<div><strong>%H</strong> <br />Hours </div>" + "<div><strong>%M</strong> <br />Minutes </div>" + '<div class="sec"><strong>%S</strong> <br />Seconds</div>')
        );
    });
    /*--------------------------------------------------------------   
      --------------------------------------------------------------*/

    /*--------------------------------------------------------------
	10. Magnific Popup
	  --------------------------------------------------------------*/

    //**===================Magnific Popup ===================**//

    $(".image-popup").magnificPopup({
        type: "image",
        callbacks: {
            beforeOpen: function () {
                this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure animated zoomInUp");
            },
        },
        gallery: {
            enabled: true,
        },
    });
    //**===================END Magnific Popup ===================**//

    //  POPUP VIDEO
    $(".popup-video").magnificPopup({
        type: "iframe",
    });

    /*--------------------------------------------------------------
	11.	ODOMETER JS
      --------------------------------------------------------------*/

    $(".odometer").appear(function () {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    /*--------------------------------------------------------------
	12.	WOW SCROLL SPY
      --------------------------------------------------------------*/

    var wow = new WOW({
        //disabled for mobile
        mobile: false,
    });

    wow.init();

    /*--------------------------------------------------------------
	13.	MAILCHAMP JS
      --------------------------------------------------------------*/

    $("#mc-form").ajaxChimp({
        url: "https://themesfamily.us22.list-manage.com/subscribe/post?u=e056d9c3aeb53b20aff997467&amp;id=e307d7e1b8&amp;f_id=0012cee1f0",
        /* Replace Your AjaxChimp Subscription Link */
    });
})(jQuery);
