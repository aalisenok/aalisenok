window.addEventListener("DOMContentLoaded", function() {
  "use strict";

  // PRELOADER

  document.body.onload = function() {
    setTimeout(function() {
      let preloader = document.querySelector(".preloader");
      if (!preloader.classList.contains("none")) {
        preloader.classList.add("none");
      }
    }, 1000);
  };

  // BURST

  let burst = document.querySelectorAll(".burst");

  burst.forEach(function(item) {
    item.addEventListener("mouseover", function() {
      this.classList.add("animated", "rubberBand");
    });
    item.addEventListener("mouseout", function() {
      this.classList.remove("animated", "rubberBand");
    });
  });

  // NAVIGATION

  let burger = document.querySelector(".burger");
  let menu = document.querySelector(".menu");
  burger.addEventListener("click", function() {
    burger.classList.toggle("active");

    if (menu.classList.contains("close")) {
      menu.classList.add("open", "animated", "pulse");
      menu.classList.remove("close");
    } else {
      menu.classList.remove("open", "animated", "pulse");
      menu.classList.add("close");
    }
  });
});