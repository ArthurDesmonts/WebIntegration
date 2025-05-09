var menu = document.querySelector("header");
var menuButton = document.querySelector(".menuCollasped");
var menuItems = document.querySelector(".menuItems");

window.addEventListener("scroll", function() {
    if (window.scrollY === 0) {
        menuItems.style.display = "none";
        menuButton.style.display = "flex";
    } else {
        menuItems.style.display = "flex";
        menuButton.style.display = "none";
    }
});