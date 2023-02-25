// Задание 1 - сделано


// Зданаие 2
let name = prompt("Введите свое имя");
alert("Привет, " + name);


// Зданаие 3
let number = prompt("Введите число");
let degree = prompt("Введите степень");
console.log(Number(number) ** degree);


// Зданаие 4 - сделано


// Зданаие 5
let string = "hidden";
if (string == "hidden") {
    console.log("visible");
}
else {
    console.log("hidden");
}


// Зданаие 6
let number1 = 10;
if (number1 === 0) {
    console.log(number1 = 1);
}
else if (number1 < 0) {
    console.log("less then zero");
}
else if (number1 > 0) {
    console.log(number1 *= 10);
}


// Зданаие 7
let result;
let userInputNumber = prompt("Введите число: ");
if (result = Number(userInputNumber) < 5 ) {
    console.log("0");
}
else { 
    console.log("1");
}


// Зданаие 8
let userInputData = prompt("Введите число: ");
let userSecondInputData = prompt("Введите число еще раз: ");
let result2;
if (result2 = Number(userInputData) > Number(userSecondInputData)) {
    console.log("Большее число: " + userInputData);
} else if (result = Number(userInputData) == Number(userSecondInputData)) {
    console.log("Числа равны");
} else {
    console.log("Большее число: " + userSecondInputData);
}


// Зданаие 9
let num1 = prompt("Введите число: ");
let num2  = prompt("Введите число еще раз: ");
if (num1 % num2 == 0) {
    console.log("Correcto!")
} else {
    console.log("NO")
}


// Зданаие 10
let gpa = prompt("Введите ваш GPA");
if (gpa >= 1 && gpa <= 4) {
    console.log("Двоечник, иди учись!");
} 
else if (gpa >= 5 && gpa <= 8) {
    console.log("Неплохо, но давай еще поднажмем!");
} 
else if (gpa >= 9 && gpa <= 10) {
    console.log("Ого, да ты настоящий отличник!")
}


// Зданаие 11
let examScore = prompt("Введите ваш балл");
let completedProjects = prompt("Ведите количество выполненных проектов");
if (examScore >= 90 || completedProjects > 10 ) {
    console.log("100");
}
else if (examScore >= 75 && completedProjects >= 5) {
    console.log("90");
}
else if (examScore >= 50 && completedProjects >= 2) {
    console.log("75");
}
else {
    console.log("0");
}


// Зданаие 12
let carRentCost = 40;
let sellCost;
let days = prompt("На сколько дней вы хотите арендовать машину?");
if (days >= 7) {
    sellCost = (days * carRentCost) - 50;
    console.log("Общяя стоимость с -$50 скидкой: " + "$" + sellCost);
}
else if (days >= 3) {
    sellCost = (days * carRentCost) - 20;
    console.log("Общяя стоимость с -$20 скидкой: " + "$" + sellCost);
}
