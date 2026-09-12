const menuBtn = document.querySelector(".menu-btn");

const menuIcon = menuBtn.querySelector("img");

const mobileMenu = document.querySelector(".mobile-menu");

const menuLinks = document.querySelectorAll(".mobile-menu a");
menuLinks.forEach(function(link) {
  link.addEventListener("click", function() {
    link.classList.add("clicked");
    mobileMenu.classList.remove("active");
});
});

menuBtn.addEventListener("click", function () {
mobileMenu.classList.toggle("active");
if (mobileMenu.classList.contains("active")) {
  menuIcon.src = "icon-close.svg";
} else {
  menuIcon.src = "icon-hamburger.svg";
}
});


document.addEventListener("click", function(event) {
  console.log(event.target);
if (!menuBtn.contains(event.target)) {
    mobileMenu.classList.remove("active");
    menuIcon.src = "icon-hamburger.svg";
}
});