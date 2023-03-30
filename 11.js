// 1. Задачи на деструктуризацию.

// 1.1 Задать массив имен. Создать 2 переменные, которые будут хранить первых 2 имени, вывести их в консоль. Создать массив, который будет хранить остальные имена, вывести имена из него по одному в консоль. Если кол-во элементов массива меньше 2, то вторая переменная должна стать равна "alex".

let names1 = [
    "Sam",
    // "Rose",
];

let firstName = names1[0];
let secondName = names1[1];
console.log(firstName + ", " + secondName);

let names2 = [
    ...names1,
    "Tom",
    "John",
    "Sofia",
];

if (2 > names1.length) {
    names1.push("alex");
};
console.log(names1);

// console.log(names2)
names2.forEach(name => {
    console.log(name)
});


// 1.2 Задать массив имен. Задать функцию, которая принимает 3 параметра и выводит их в консоль. Передать массив в функцию. Внутри функции каждый параметр должен быть равен одному из элементов массива

let names = ["Alexa", "Linden", "Jade"];

function nameFunc(firstName, secondName, thirdName) {
    // console.log(firstName + ",  " + secondName  + ", " + thirdName);
    console.log(firstName, secondName, thirdName);

}
nameFunc(names);


// 1.3 Задать объект с N полей. Создать 2 переменные, которые будут называться так же, как поля, и хранить 2 значения полей объекта. Если соответствующих полей в объекте нет, задать значения чисел 1 и 2. Все остальные поля объекта записать в переменную fields.


let city = {
    city1: "Astana",
    city2: "Almaty",
    city3: "Shymkent",
};

let {city1, city2, city3, ...fields} = city;

for(let value in city) {
    console.log(city[value]);
}

console.log(city1 + ", " + city2 + ", " +  city3 + ", " +  fields);


