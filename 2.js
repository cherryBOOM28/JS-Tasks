// Задание 1
let country = "Sweden";
let access = (country == "Sweden") ? "true" : "false";
console.log(access);

access = country == "Sweden2" ? console.log("true") : console.log("false");


// Задание 2
// Создать переменную и записать в нее число, например 10. 10 раз увеличить значение этой переменной на 1. Результат (1 шт.) вывести в консоль.

let num = 10;
for (let i = 0; i < 10; i++) {
    num++;
}
console.log(num);


// Задание 3
// Увеличивая счетчик цикла на 2, нужно 5 раз:
// - запрашивать у пользователя ввод числа
// - проверять, равно ли это число 10. Если равно, выводить "Равно 10". Иначе выводить "Не равно 10"

let result;
for (i = 0; i <= 8; i = i + 2) {
    let userMessage = prompt("Введите число");
    result = (userMessage == 10) ? "Равно 10" : "Не равно 10";
}
console.log(result);


// Задание 4
// Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16...

let answer = prompt("Сколько вы хотите: ");
    for (let i = 0; i < Number(answer); i++) {
        console.log(i ** 2);
}


// Задание 5
//Напишите программу, которая выводит в консоль числа от 1 до 100. При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz», а вместо чисел, кратных пяти, — слово «Buzz». Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»

for (i = 1; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz: " + i)
    }
    if (i % 3 == 0) {
        console.log("Fizz: " + i);
    } else if (i % 5 == 0) {
        console.log("Buzz: " + i);
    } else  {
        console.log(i + " " + "не делится на 5 и на 3");
    }
}

// Через тернарный оператор
for (i = 1; i <= 100; i++) {
    i % 3 == 0 && i % 5 == 0 
    ? "FizzBuzz" : i % 3 == 0 
    ? "Fizz" : i % 5 == 0 
    ? "Buzz" : i;
}

// Задание 6
let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
}

// Задание 7
// Переписать задание 4 в виде функции. Т.е. описать функцию, которая выводит квадраты чисел из заданного диапазона (диапазон будет попадать в функцию как аргументы).

let number = prompt("Введите начальное число: ");
let number2 = prompt("Введите конечное число: ");

function squareOfNumbers(initial, final) {
    for (i = initial; i < final; i++) {
        console.log(i ** 2);
    }
}
squareOfNumbers(number, number2);


// Задание 8
// Написать функцию, котрая возвращает строку - случайный цвет в формате rgb. Это будет строка вида "rgb(10,55,250)"
//Здесь у вас будет две функции: одна ваша - getRandomRGB, а вторая - функция получения случайного числа в диапазоне min - max. 
// Каждый цвет - 3 числа, каждое число лежит в диапазоне от 0 до 255. Одна функция может вызывать другую функцию

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
const randomNumber = getRandomInteger(0, 255);
let red = getRandomInteger(0, 255);
let green = getRandomInteger(0, 255);
let blue = getRandomInteger(0, 255);

function getRandomRGB(red, green, blue) {
    console.log(`rgb(${red}, ${green}, ${blue})`);
}
getRandomRGB(red, green, blue);


// Задание 9
// Написать функцию, которая принимает целое число n.   
// Внутри функции запустить цикл от 1 до n с шагом 0.5. На каждой итерации цикла выводить в консоль текущее число (i) и информацию о том, целое ли оно.
// Такая функция не будет ничего возвращать, она просто выводит информацию в консоль.

function cycle(n) {
    if(Number.isInteger(n) === false) {
        console.log("Ошибка, " + n + "не целое число");
    } else {
        for (let i = 1; i < n; i = i + 0.5) {
            if(Number.isInteger(i)) {
                console.log("Целое число: " + i);
            }
            else {
                console.log("Не целое число: " + i);
            }
        }
    }
}
cycle(5);
