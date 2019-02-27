window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    let burst = document.querySelectorAll('.burst');

    burst.forEach(function (item) {
        item.addEventListener('mouseover', function () {
            this.classList.add('animated', 'rubberBand')
        });
        item.addEventListener('mouseout', function () {
            this.classList.remove('animated', 'rubberBand')
        })
    });
});