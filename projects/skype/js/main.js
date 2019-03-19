'use strict';

window.onload = function () {
    let menu = document.querySelector('.menu');
    let burger = document.querySelector('.burger');

    burger.addEventListener('click', () => {
        if (menu.classList.contains('menu--closed')) {
            menu.classList.remove('menu--closed');
            menu.classList.add('menu--opened');
            burger.classList.add('animate');
        } else {
            menu.classList.add('menu--closed');
            menu.classList.remove('menu--opened');
            burger.classList.remove('animate');
        }
    });
    
};