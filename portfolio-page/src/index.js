const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const navLink = document.getElementsByClassName("nav-link")

hamburger.addEventListener("click", function() {
  navMenu.classList.toggle("active")
  hamburger.classList.toggle("active")
})
document.addEventListener("click", function(e) {
  if(!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove("active")
  }
  for(let i=0; i < navLink.length; i++) {
  if(navLink[i].contains(e.target)) {
      navMenu.classList.remove("active")
      hamburger.classList.remove("active")
    }
  }
})