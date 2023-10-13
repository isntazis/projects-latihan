//oioioi//
const body = document.body;
const brand = document.querySelector(".brand");
const hamburger = document.querySelector(".hamburger");
const hamburgerBar = document.getElementsByTagName("span");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.getElementsByClassName("nav-link");
const darkToggle = document.getElementById("darkmode-img");
const lightToggle = document.getElementById("lightmode-img");
const homeTitle = document.querySelector(".title")
const aboutTitle = document.querySelector(".about-title");
const galleryTitle = document.querySelector(".gallery-title");
const socialText = document.querySelector(".social-text")
const socialLinks = document.getElementsByClassName("link");
const copyrightTitle = document.querySelector(".copyright");

// intisari //
// dark mode //
  darkToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.style.transition = "0.2s linear";
  brand.classList.toggle("dark");
  navMenu.classList.toggle("dark");
  homeTitle.classList.toggle("dark");
  lightToggle.classList.toggle("light");
  darkToggle.classList.toggle("none");
  aboutTitle.classList.toggle("dark");
  galleryTitle.classList.toggle("dark");
  socialText.classList.toggle("dark");
  copyrightTitle.classList.toggle("dark");
  for(let i=0; i < navLink.length; i++) {
    navLink[i].classList.toggle("dark");
    socialLinks[i].classList.toggle("dark");
    hamburgerBar[i].classList.toggle("dark");
  }
})
  lightToggle.addEventListener("click", () => {
  lightToggle.classList.remove("light");
  darkToggle.classList.remove("none");
  brand.classList.remove("dark");
  body.classList.remove("dark");
  navMenu.classList.remove("dark");
  homeTitle.classList.remove("dark");
  aboutTitle.classList.remove("dark");
  galleryTitle.classList.remove("dark");
  socialText.classList.remove("dark");
  copyrightTitle.classList.remove("dark");
  for(let i=0; i < navLink.length; i++) {
    navLink[i].classList.remove("dark");
    socialLinks[i].classList.remove("dark");
    hamburgerBar[i].classList.remove("dark");;
  }
})
// dark mode end //
// hamburger toggle //
  hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.addEventListener("click", function(e) {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target) ) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
})
// hamburger end //