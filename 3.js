// Задание 1
//Написать функцию, которая принимает два параметра и складывает их.
//Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обраьботайте случай, если не было введено два параметра.

const myFunc = function(num1, num2) {
    if (arguments.length !== 2) {
        log("введите два параметра")
    }
    else if (typeof num1 !== "number" || typeof num2 !== "number") { //1 - false, 'afafa' - true
        log("введенные данные не являются числами")
    }
    else {
        log(num1 + num2);
    }
}
myFunc(1, 2);


// Задание 2
// Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка
// "Функция "square" не может быть вызвана без аргумента"

function square(a) {
    if (arguments.length > 0) {
        console.log(a * a);
    }
    else {
        console.log("Uncaught Error: Функция 'square' не может быть вызвана без аргумента");
    } 
}
square(10); // 100
square();

// Задание 3
// Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
//Написать функцию в стрелочном синтаксисе.

let randomNumber = getRandomInteger(0, 10);
const guessNumber = (number) => {
    if (number <= 10 && number >= 0) {
        if (randomNumber === number) {
            console.log("Вы выиграли");
        }
        else {
            console.log(`Вы не угадали, ваше число - ${number},  а выпало число ${randomNumber}`);
        }
    }
    else {
        console.log("Число не больше 10 и меньше 0");
    }
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
guessNumber(8);


// Задание 4
// Определить массив, например let arr = [5, 4, 3, 8, 0];
//Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// запуск функции filterFor(arr, 10) дает результат []
// запуск функции filterFor(arr, 3.11) дает результат [4,5,8]

let arr = [5, 4, 3, 8, 0];
function filterFor(arr, a) {
    let newArr = [];
    for (i in arr) {
        if (arr[i] >= a) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}
filterFor(arr, 5);


// Задание 5
// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива.

someArr = [9, 19, 22, 27, 51, 97];
function copyArr(arr) {
    newArr2 = [];
    for(i in arr) {
        newArr2.push(arr[i])
    }
    console.log(newArr2);
}
copyArr(someArr);


// Задание 6
// Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.

const objectWithNumbers = {
    a: 10,
    b: 20,
    c: 'string',
    d: 12,
}

const sumObjectValues = (object) => {
    sum = 0;
    for(value in object) {
        if (typeof object[value] === "number") {
            sum = sum + object[value];
        } 
//         console.log(sum);
    }
}
sumObjectValues(objectWithNumbers);
