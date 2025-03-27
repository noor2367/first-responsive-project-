const menu = document.querySelector(".nav-menu")
const hamburger = document.querySelector(".hamburger")
const closeBtn = document.querySelector(".close-btn")


hamburger.addEventListener("click", function(){
    menu.classList.add("active")
    hamburger.style.display ="none"
})

closeBtn.addEventListener("click", function() {
    menu.classList.remove("active")
    hamburger.style.display ="block"
})