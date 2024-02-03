document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
          navbar.style.backgroundColor = "#555";
      } else {
          navbar.style.backgroundColor = "#333";
      }
  });

  var menuItems = document.querySelectorAll(".menu a");

  menuItems.forEach(function (item) {
      item.addEventListener("mouseenter", function () {
          this.style.color = "#ff6600";
      });

      item.addEventListener("mouseleave", function () {
          this.style.color = "#fff";
      });
  });
});
