const menuBtn = document.querySelector(".menu-btn");
const sideNav = document.querySelector(".side-navbar");

let menuOpen = false;
let navOpen = false;

//responsive navigation
menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        sideNav.classList.add("open");
        menuOpen = true;
        navOpen = true;
      } else {
        menuBtn.classList.remove("open");
        sideNav.classList.remove("open");
        menuOpen = false;
        navOpen = false;
      }
});