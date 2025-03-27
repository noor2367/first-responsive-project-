const menu = document.querySelector(".nav-menu")
const hamburger = document.querySelector(".hamburger")

hamburger.addEventListener("click", function(){
    menu.classList.toggle("active")
})
