const burgerIcon = document.querySelector(".open__burger__menu");
const burgerMenu = document.querySelector(".burger-menu");
const close = document.querySelector(".close-icon")

burgerIcon.addEventListener("click", openBurgerMenu);
close.addEventListener("click", closeBurgerMenu)

function openBurgerMenu() {
    burgerMenu.classList.add("active");
    // burgerIcon.style.display = "none"
    burgerIcon.style.opacity = 0;
}

function closeBurgerMenu() {
    burgerMenu.classList.remove("active");
    // burgerIcon.style.display = "block"
    burgerIcon.style.opacity = 1;
}
