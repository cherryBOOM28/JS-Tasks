// Задание 1

// Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.
// const inputTag = document.querySelector("input");
// const ulTag = document.querySelector("ul");

inputTag.addEventListener("keydown", (event) => {
    const li = document.createElement("li");
    li.innerText = event.target.value;
    console.log(event);

    ulTag.appendChild(li);
})


// Задание 2

// Вставить в html тег input (просто предусмотреть в разметке).
// Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value

const taskTwoInput = document.querySelector(".taskTwoInput");

taskTwoInput.addEventListener("keyup", (event) => {
    console.log(event.target.value);
})


// Задание 3

// Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).

const form = document.querySelector(".form");
const taskThreeInput = document.querySelector(".taskThreeInput");
const taskThreeUl = document.querySelector(".taskThreeUl")
const btn = document.querySelector(".form-btn");

form.addEventListener("submit", (event) => {
    // console.log(event.target.value);
    const li = document.createElement("li");
    li.innerText = taskThreeInput.value;
    taskThreeUl.appendChild(li);
    taskThreeInput.value = " ";
});


// Задание 4

// Калькулятор. 
// Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Внутри select будут options - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие, выбранное в select (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value). Результат отображается в div.

const calcForm = document.querySelector(".calcForm");
const calcInp = document.querySelector(".calcInp");
const secondCalcInp = document.querySelector(".SecondCalcInp");
const calcSelect = document.querySelector(".calcSelect")
const calcBtn = document.querySelector(".calc-btn");
const resultDiv = document.querySelector(".result");

// if
calcForm.addEventListener("submit", () => {
    
    let result;

    if(calcSelect.value == "+") {
        result = calcInp.value + secondCalcInp.value
    } 
    else if(calcSelect.value == "-") {
        result = calcInp.value - secondCalcInp.value
    }
    else if(calcSelect.value == "*") {
        result = calcInp.value * secondCalcInp.value
    }
    else if(calcSelect.value == "/") {
        result = calcInp.value / secondCalcInp.value
    }
    resultDiv.innerText = result;
    console.log(result)
});

// eval
calcForm.addEventListener("submit", () => {
    calcResult.innerText = eval(`${calcInp.value} ${calcSelect.value} ${secondCalcInp.value}`);
});


// Задание 5

// Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.

const randomColorBtn = document.querySelector('.randomColor-btn');

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

randomColorBtn.addEventListener("mouseenter", () => {
    const red = getRandomInteger(0, 255);
    const green = getRandomInteger(0, 255);
    const blue = getRandomInteger(0, 255);

    randomColorBtn.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

randomColorBtn.addEventListener("mouseleave", () => {
    let degree = getRandomInteger(-180, 180);

   

    randomColorBtn.style.transform = `rotate(${degree}deg)`;
});
