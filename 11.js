// 1. Задачи на деструктуризацию.

// 1.1 Задать массив имен. Создать 2 переменные, которые будут хранить первых 2 имени, вывести их в консоль. Создать массив, который будет хранить остальные имена, вывести имена из него по одному в консоль. Если кол-во элементов массива меньше 2, то вторая переменная должна стать равна "alex".

let names = [
    "Sam",
    // "Rose",
];

let names2 = [
    ...names,
    "Tom",
    "John",
    "Sofia",
];

let firstName = names[0];
let secondName = names[1];
console.log(firstName + ", " + secondName);

// console.log(names2)
names2.forEach(names2 => {
    console.log(names2)
});

for (let i = 0; i < names.length; i++) {
    names[1] = "alex"
};
console.log(names);


// 1.2 Задать массив имен. Задать функцию, которая принимает 3 параметра и выводит их в консоль. Передать массив в функцию. Внутри функции каждый параметр должен быть равен одному из элементов массива

let names = ["Alexa", "Linden", "Jade"];

function nameFunc(firstName, secondName, thirdName) {
    // console.log(firstName + ",  " + secondName  + ", " + thirdName);
    console.log(firstName, secondName, thirdName);

}
nameFunc(names);


// 1.3 Задать объект с N полей. Создать 2 переменные, которые будут называться так же, как поля, и хранить 2 значения полей объекта. Если соответствующих полей в объекте нет, задать значения чисел 1 и 2. Все остальные поля объекта записать в переменную fields.

let obj = {
    field1: "first field",
    field2: "second field",
    field3: "third field",
    field4: "forth field",
};

