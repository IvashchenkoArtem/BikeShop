let link = document.getElementById("link");
let sublink = document.getElementById("sublink");
link.onmouseover = function () { sublink.style.visibility = "visible" };
link.onmouseout = function () { sublink.style.visibility = "hidden" };
sublink.onmouseover = function () { sublink.style.visibility = "visible" };
sublink.onmouseout = function () { sublink.style.visibility = "hidden" };



$(function () {
    $('.js-nav-toggle').on('click', function () {
        $(this).toggleClass('toggler__icon--open');
        $('.js-navigation').toggleClass('navigation--open');
    });
});


$(document).ready(function () {
    $('.js-slider').slick({
        dots: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1500,
        dots: false,
        // vertical: true,
        // swipe: slick,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    autplay: false
                }
            }
        ]
    });
});


$(document).ready(function () {
    $('a[href*=#]').bind('click', function (e) {
        e.preventDefault();

        let target = $(this).attr("href");

        $('html, body').stop().animate({ scrollTop: $(target).offset().top }, 500, function () {
            location.hash = target;
        });

        return false;
    });
});

function Page() { location.href = '#categories' };
function Page1() { location.href = 'BMX.html' };
function Page2() { location.href = 'Electric.html' };
function Page3() { location.href = 'City.html' };

$(document).ready(function () {
    $('.sl').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        responsive: [
            {
                breakpoint: 1030,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            }
        ]
    });
});

$(".accordeon__body").hide().prev().click(function () {
    $(this).next().slideToggle(1000);
    // $(".accordeon__body").not(this).slideUp();
    // $(this).next().not(":visible").slideDown();
});

$(function () {
    $('.js-form-toggle').on('click', function () {
        $('.js-form-toggle').toggleClass('close-form--open');
        $('.js-form').toggleClass('hidden--open');
    });
});