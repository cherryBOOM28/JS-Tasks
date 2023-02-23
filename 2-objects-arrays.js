// Задание 1
// Напишите функцию, которая принимает три числовых аргумента: number, min, max.
// Функция проверяет, находится ли число number в диапазоне чисел от min до max.

function checkNumInInterval(number, min, max) { 
    if(number > min && number < max) {
        console.log(number + " Находится в дипазоне");
    }
    else {
        console.log(number + " Не находится в дипазоне");
    } 
}
checkNumInInterval(6, 5, 8);


// Задание 2
const engineers = {
    Den: 1000,
    Matt: 5000,
    Steve: 2000
}
console.log(`Заработная плата Den составляет ${engineers.Den} \n 
Заработная плата Matt составляет ${engineers.Matt} \n
Заработная плата Steve составляет ${engineers.Steve} `);


// Задание 3
// Создать массив из 5 элементов.
//Используя цикл for, вывести каждый второй элемент массива в консоль.

const fiveElements = ['First', 2, 'Trhird', 4,'Fifth'];
for (let i = 1; i < fiveElements.length; i = i + 2) {
    console.log(fiveElements[i])
}


// Задание 4
//Есть массив произвольных чисел:
//Вывести в консоль значения всех элементов массива и соответствующие им индексы в таком виде:
//Индексу 0 соответствует число 42
// Индексу 1 соответствует число 65 и т.д.

let numbers1 = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
for (number in numbers1) {
    console.log(`Индексу ${number} соответствует число ${numbers1[number]}`);
};


// Задание 5
// Дан массив объектов, например:
// Добавить в каждый объект дополнительное поле usersAnswer со значением null.
// Решение должно работать для массива любой длины.

let questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];
for (let i = 0; i < questions.length; i++) {
    for (question in questions[i]) {
        questions[i].usersAnswer = null;
    }
}
console.log(questions);

// Задание 6
// 1) Посчитать и вывести в консоль сумму элементов в массиве. Подсказка: в задачах такого типа нужно заранее предусмотреть переменную (например, sum) и записать в нее начальное значение (в случае с суммой - ноль). Затем уже описать цикл, в котором эта сумма будет считаться (в каждой итерации цикла к ней будет прибавляться следующий элемент массива).

let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
function arrSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
}
arrSum(numbers);

// 2) Посчитать и вывести в консоль сумму четных элементов в массиве.
function arrEven(array2) {
    sum2 = 0;
    for (let i = 0; i < array2.length; i++) {
        if (i % 2 == 0) {
            sum2 += array2[1]
        }
    } console.log(sum2)
}
arrEven(numbers);

// 3) Найти и вывести в консоль максимальное число массива. Подсказка: как и в случае с суммой, здесь сначала нужно объявить переменную (например, max), записать в нее первый элемент массива, а затем уже в цикле искать максимальное значение.

function arrMax(array3) {
    let sum3 = array3[0];
    for (let i = 0; i < array3.length; i++) {
        if (array3[i] > sum3) {
            sum3 = array3[i]
        }console.log(sum3);
    }
}
arrMax(numbers);

// 4) Определить и вывести в консоль индекс максимального числа массива (или индексы, если число встречается более одного раза). Само максимальное число мы уже нашли в прошлой части задачи, повторно его искать не нужно.

function maxIndex(array4) {
    let sum4 = 0;
    for (let i = 0; i < array4.length; i++) {
        if (array4[i] > sum4) {
            sum4 = array4[i]
        }console.log(sum4);
    }
}
arrMax(numbers);


// Задание 7
//Создать новый массив из элементов массива arr, но в новом должны содержаться только положительные элементы.
// Подсказка. Изначально нужно объявить пустой массив-хранилище (например, let newArr = []). Затем пройтись в цикле по массиву arr, и в каждой итерации, если элемент положительный, добавлять его в массив newArr.

let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
let newArr = [];
for (i in arr) {
    if (arr[i] > 0) {
        newArr.push(arr[i])
    }
}
console.log(newArr);


// Задание 8
//Написать функцию, которая принимает массив (array) и число (num).
//Функция должна создать новый массив из элементов массива array, и в этом новом массиве должны содержаться только элементы, больше и равные (>=) значению num.

array5 = [1, 4, 9, 12, -1, 0, -6, 34];
function myFunc(array, num) {
    const result = [];
    for(i in array) {
        if(array[i] >= num) {
            result.push(array[i]);
        }
    }
    console.log(result);
}
myFunc(array5, 6);


// Задание 9
// Пройти в цикле по массиву и вывести имена всех пользователей, возраст которых больше 15.

const users = [
    {name: 'Vasya', age: 23}, 
    {name: 'Olya', age: 12}, 
    {name: 'Anna', age: 22}, 
    {name: 'Alex', age: 18}, 
    {name: 'Valery', age: 8}
];

const usersUnderfifteen = [];
for(i in users) {
    if(users[i].age > 15) {
        usersUnderfifteen.push(users[i])
    }
} console.log(usersUnderfifteen);


// Задание 10
// 1) В цикле сформировать массив объектов с ключами word (само слово), length (длина слова):
//[{word:'морковь', length: 7}, {word:'баклажан', length: 8} и т.п.]
//Вывести этот массив в консоль.
//Подсказка: длину строки можно определить с помощью метода .length. Например, для переменной let string = 'text' это будет string.length (результат - 4, т.к. слово text состоит из 4 символов)
//2) Пройтись по полученному массиву объектов и вывести в консоль строки вида "слово - длина_слова", например "картошка - 8"

let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];
let vegetablesArray = []
for (i in vegetables) {
    vegetablesArray[i] = {
        word: vegetables[i],
        length: vegetables[i].length,
    }
}
console.log(vegetablesArray);
