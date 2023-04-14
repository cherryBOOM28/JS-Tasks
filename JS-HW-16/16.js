// Задание 1

// По данному url расположена задача:
// https://jsonplaceholder.typicode.com/todos/1
// В html предусмотреть div.
// Достать с сервера заголовок задачи и отобразить его в div.

// const text = document.querySelector("text");

// let xmlHttp = new XMLHttpRequest();
// // console.log(xmlHttp);

// xmlHttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
// xmlHttp.send();
// xmlHttp.onload = function() {
//     const responseObj = JSON.parse(xmlHttp.response)
//     // console.log(responseObj);

//     let div = document.createElement("div");
//     div.innerText = responseObj.title;
//     document.body.appendChild(div);
// };


// Задание 2

// Запросом на сервер по url https://jsonplaceholder.typicode.com/todos достать задачи.
// Отобразить первые 20 задач списком ul на странице. Содержимое каждого li - поле title объекта задачи.

// const tasks = document.querySelector(".tasks");

// let xmlHttp = new XMLHttpRequest();

// xmlHttp.open("GET", "https://jsonplaceholder.typicode.com/todos");

// xmlHttp.send();

// xmlHttp.onload = function() {
//     let responseObj = JSON.parse(xmlHttp.response);
//     for(let i = 0; i < 20; i++) {
//         let li = document.createElement("li");
//         li.innerText = responseObj[i].title;
//         tasks.appendChild(li);
//     };
// };


// Задание 3

// Отобразить на странице 10 первых комментариев с сервера *https://jsonplaceholder.typicode.com/comments*
// Оформить тегами как в ПРИМЕРЕ.
// Порядок работы:
// 1) записать в переменную блок для отрисовки результата.
// 2) описать функцию отрисовки результата (напр. addInfo). Функция принимает 3 параметра - тег, содержимое и название класса для CSS. Она создает тег, наполняет его текстом, добавляет класс и помещает в блок на страницу.
// 3) создать http-запрос и получить результат в виде массива объектов (через JSON.parse). Записать этот результат в переменную, т.к. с ним будем дальше работать.
// 4) внутри функции .onload:
// - обойти через цикл первые 10 элементов массива
// - вызвать функцию addInfo 3 раза: для добавления на страницу имени, имейла и комментария.
// 5) прописать CSS для классов.

const comments = document.querySelector(".comments");

let xmlHttp = new XMLHttpRequest();

xmlHttp.onload = function() {
    let responseObj = JSON.parse(xmlHttp.response);
    for(let i = 0; i < 10; i++) {
        addInfo("h3", responseObj[i].name, "name");
        addInfo("p", responseObj[i].email, "email");
        addInfo("p", responseObj[i].body, "body");
    };
};

xmlHttp.open("GET", "https://jsonplaceholder.typicode.com/comments");
xmlHttp.send();

function addInfo(tag, text, className) {
    let item = document.createElement(tag);
    item.innerText = text;
    item.className = className;
    comments.appendChild(item);
}