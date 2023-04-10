// Задание 1

// Реализовать переключение блоков с помощью табов.

// Пример результата:

// https://ucarecdn.com

// ПОРЯДОК РАБОТЫ, если нет своих идей

// 1. Подготовить верстку. https://youtu.be/mnfBHvNm_z8

// 2. Создаем переменные и собираем в коллекции все кнопки и все блоки с контентом.

// 3. Перебираем все кнопки и вешаем на них обработчик клика. При клике запускается функция openTab, в нее передаем 2 параметра - event и id блока (id блока = дополненный id кнопки, по которой пришелся клик).

// 4. Описываем функцию openTab, которая показывает блок. Она принимает два параметра - event и id (событие - нужно для определения кнопки, по которой пришелся клик, и id - нужно для определения нужного блока). Внутри этой функции:- перебираем все кнопки и убираем у них класс active (используем forEach и стрелочный синтаксис)- перебираем все блоки и скрываем их (используем forEach и стрелочный синтаксис)

// - определяем кнопку, по которой кликнули (event.target) и добавляем ей класс active. Находим по id блок, связанный с активной кнопкой, и показываем его.


const tabs = document.querySelector(".wrapper");
const tabBtn = document.querySelectorAll(".tablink");


const tabContent = document.querySelectorAll(".tabcontent");
// const tomatoContent = document.getElementById(".first-content");
// const potatoContent = document.getElementById(".second-content");
// const bananaContent = document.getElementById(".third-content");


// tabBtn.forEach(function(item) {
//     item.addEventListener("click", function() {
//         let currentBtn = item;
        
//         tabBtn.forEach(function(item) {
//             item.classList.remove("activebtn");
//         });
//         currentBtn.classList.add("activebtn");

//         if(currentBtn.innerText === "Tomato") {
//             tabContent.forEach(function(content) {
//                 content.classList.remove("active");
//             });
//             tabContent[0].classList.add("active");
//         }
//         else if (currentBtn.innerText === "Potato") {
//             tabContent.forEach(function(content) {
//                 content.classList.remove("active");
//             });
//             tabContent[1].classList.add("active");
//         }
//         else if (currentBtn.innerText === "Banana") {
//             tabContent.forEach(function(content) {
//                 content.classList.remove("active");
//             });
//             tabContent[2].classList.add("active");
//         }

//     }); 
// });

for(let i = 0; i < tabBtn.length; i++) {
    tabBtn[i].addEventListener("click", function(e) {
        e.target.classList.add("activebtn")
        tabContent.forEach(function(content) {
            content.classList.remove("active");
        });
        tabContent[i].classList.add("active");
    });
}


// function openTab(event, tabName) {
//     let i, tabContent, tabBtn;
//     tabContent = document.querySelectorAll(".tabcontent");
//     for(i = 0; i < tabContent.length; i++) {
//         tabContent[i].style.display = "none";
//     }

//     tabBtn = document.querySelectorAll(".tablink");
//     for(i = 0; i < tabBtn.length; i++) {
//         tabBtn[i].className = tabBtn[i].className.replace("active", "");
//     }

//     document.getElementById(tabName).style.display = "block";
//     event.currentTarget.className += "active";
// }


