const container = document.querySelector(".container");
const popup = document.querySelector(".popup");
const popupBtn = document.querySelector(".popup-btn");
const popupClose = document.querySelector(".popup__close");

popupBtn.addEventListener("click", openModal);

function  openModal() {
    popup.classList.add("opened");
    document.body.style.overflow = "hidden";
}


popupClose.addEventListener("click", closeModal);

function closeModal() {
    popup.classList.remove("opened");
    document.body.style.overflow = "auto";
}


window.addEventListener("keydown", (event) => {
    console.log(event.key);
    if (event.key === "Escape") {
        closeModal();
    }
});