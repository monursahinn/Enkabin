(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    // WOW
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500, 'easeInOutExpo');
        return false;
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1500
    });

    // Header carousel
    if ($(".header-carousel").length) {
        $(".header-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1500,
            autoplayTimeout: 6500,
            autoplayHoverPause: true,
            items: 1,
            dots: true,
            loop: true,
            nav: true,
            navText: [
                '<i class="bi bi-chevron-left"></i>',
                '<i class="bi bi-chevron-right"></i>'
            ]
        });
    }

    // Testimonials carousel
    if ($(".testimonial-carousel").length) {
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            center: true,
            dots: false,
            loop: true,
            nav: true,
            margin: 20,
            navText: [
                '<i class="bi bi-arrow-left"></i>',
                '<i class="bi bi-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                }
            }
        });
    }

    // Portfolio isotope and filter
    if ($('.portfolio-container').length) {
        var portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });

        $('#portfolio-flters li').on('click', function () {
            $("#portfolio-flters li").removeClass('active');
            $(this).addClass('active');
            portfolioIsotope.isotope({ filter: $(this).data('filter') });
        });
    }

})(jQuery);

// Register Alert
document.addEventListener('DOMContentLoaded', function () {
    const registerBtn = document.getElementById('registerBtn');
    const emailInput = document.getElementById('email');

    if (registerBtn && emailInput) {
        registerBtn.addEventListener('click', function () {
            const email = emailInput.value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (email && emailPattern.test(email)) {
                Swal.fire({
                    icon: 'success',
                    title: 'Kayıt alındı',
                    text: `${email} e-posta adresiyle kaydınız alınmıştır.`,
                    confirmButtonColor: '#c7a46a'
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Geçersiz E-posta',
                    text: 'Lütfen geçerli bir e-posta adresi giriniz.',
                    confirmButtonColor: '#c7a46a'
                });
            }
        });
    }
});