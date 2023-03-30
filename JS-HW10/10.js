// Задание 2
// 1)
// Задать объект с полем name.
// Задать переменную, которая будет хранить JSON упомянутого объекта.
// Задать переменную, которая будет хранить результат парсинга предыдущей переменной.

let name = {
    firstName: "Luiza",
};

let nameJSON = JSON.stringify(name);
console.log(nameJSON);

let nameJSONConvert = JSON.parse(nameJSON);
console.log(nameJSONConvert);

// 2)
// Создать переменную user, в которой хранится объект.
// Записать переменную в localStorage.
// Создать переменную newUser, в которой будет храниться JS объект из localStorage.

let user = name;
localStorage.setItem("user", JSON.stringify(user));
let newUser = JSON.parse(localStorage.getItem("user"));


// решения есть 7 уроке (6.js github)
// Задание 3
// Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).

// const form = document.querySelector(".form");
// const input = document.querySelector(".form__input");
// const ul = document.querySelector(".form__ul")
// const btn = document.querySelector(".form__btn-btn");

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const li = document.createElement("li");
//     li.innerText = input.value;
//     ul.appendChild(li);
//     input.value = " ";
// });