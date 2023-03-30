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
