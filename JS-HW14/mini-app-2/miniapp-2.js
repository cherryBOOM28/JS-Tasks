// Задание 2

// Сверстать любую простую страничку и реализовать смену темы.

// В шапке делаем кнопку «Тёмная тема», при нажатии этой кнопки странице присваивается доп. класс (напр. dark-theme) и начинают работать стили тёмной темы. Сама кнопка меняется на «Светлая тема», при нажатии которой доп. класс со страницы удаляется.

const modeBtn = document.getElementById("darkbtn");

const body = document.body

if(localStorage.getItem("mode") === "dark") {
    body.classList.add("dark-theme");
} else {
    body.classList.remove("dark-theme");
}

modeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    if(body.classList.contains("dark-theme")) {
        // console.log("dark")
        localStorage.setItem("mode", "dark");

    } else {
        localStorage.setItem("mode", "light");
    }
});









