const navbarContent = document.querySelector(".navbar__content");
const burgerContent = document.querySelector(".burger__content");
const burger = document.querySelector(".burger__icon")
const closeButton = document.querySelector(".close__icon");

burger.addEventListener("click", () => {
    burger.style.display = "none";
    closeButton.style.display = "block";
    burgerContent.style.display = "block";
});

closeButton.addEventListener("click", () => {
    closeButton.style.display = "none";
    burger.style.display = "block"
    burgerContent.style.display = "none";
    navbarContent.style.display = "flex";
});

// function closeBurgerContent() {
//     burgerContent.classList.add("closed");
//     // document.body.style.overflow = "auto";
// }

// window.addEventListener("keydown", (event) => {
//     if (event.key === "Escape") {
//         closeBurgerContent();
//     }
// });