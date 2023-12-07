const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');
const blackBg = document.querySelector('#js-black-bg');
ham.addEventListener('click', function () {
    ham.classList.toggle('active');
    nav.classList.toggle('active');
    blackBg.classList.toggle('open')
});

$(function () {
    $('.slider')
        .on("init", function () {
            $('.slick-slide[data-slick-index="0"]').addClass("add-animation");
        })
        .slick({
            autoplay: true,
            fade: true,
            arrows: false,
            dots: true,
            speed: 2000,
            autoplaySpeed: 4000,
            pauseOnFocus: false,
            pauseOnHover: false,
        })
        .on({
            beforeChange: function (event, slick, currentSlide, nextSlide) {
                $(".slick-slide", this).eq(nextSlide).addClass("slick-animation");
                $(".slick-slide", this).eq(currentSlide).addClass("remove-animation");
            },

            afterChange: function () {
                $(".remove-animation", this).removeClass(
                    "remove-animation slick-animation"
                );
            },
        });
});

$(function () {
    var pageTop = $('#js-page_top');
    pageTop.hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            pageTop.fadeIn();
        } else {
            pageTop.fadeOut();
        }
    }
    );

    pageTop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
});