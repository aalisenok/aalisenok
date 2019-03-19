'use strict';

$(document).ready(function () {
    svg4everybody({});

    // burger

    let nav = document.querySelector('.nav');
    let burger = document.querySelector('.burger');

    nav.classList.remove('nav--no-js');
    burger.addEventListener('click', () => {
        if (nav.classList.contains('nav--closed')) {
            nav.classList.remove('nav--closed');
            nav.classList.add('nav--opened');
            burger.classList.add('animate');
        } else {
            nav.classList.add('nav--closed');
            nav.classList.remove('nav--opened');
            burger.classList.remove('animate');
        }
    });


    // slick-carousel

    $('.slider-for').slick({
        slidesToShow: 1,
        arrows: false,
        asNavFor: '.slider-nav',
        autoplay: true
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        asNavFor: '.slider-for',
        centerMode: true,
        focusOnSelect: true
    });


});










