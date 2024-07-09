const navBer = document.querySelector(".navber-nav")
const menuBar = document.getElementById("menu-btn");
const closesBtn = document.getElementById("closes-navber")

menuBar.addEventListener("click", function () {
    navBer.classList.add('active');
    console.log(navBer);
})

closesBtn.addEventListener("click", function () {
    navBer.classList.remove('active');
})