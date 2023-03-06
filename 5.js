// Задание 1
// Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.
// Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.

alert(location.href); // http://127.0.0.1:5501/Lesson6.1/JS-HW6/index.html
alert(navigator.platform); // MacIntel


// Задание 2
// 1) C помощью метода document.querySelectorAll найдите на странице все пункты списка (li) и запишите в переменную. У вас получится html-коллекция (массив). 
//2) Обойдите коллекцию с помощью forEach и для каждого li вывкдите в консоль текстовое содержимое (innerText)

let ul = document.querySelectorAll("li");

ul.forEach(li => {
    li.innerText = "Li text"
});


// Задание 4
// Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.

let text = document.createElement("p");
text.innerText = "lorem ipsum dollar amet lafg href.";
text.style.fontSize = "36px";
text.style.fontWeight = "bold";
document.body.appendChild(text);


// Задание 5
// Написать в html тег заголовка с текстом "Сегодня:" 
// После заголовка подготовить в html пустой параграф. С помощью js добавить в него сегодняшнюю дату.

let data = document.querySelector(".data");
let p = document.body.children[1];
data.innerText = "1 март, 2023 год";


// Задание 6
// Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.

function newText(tagName, color, content) {
    let tag = document.createElement(tagName);
    tag.style.color = color;
    tag.innerText = content;
}

document.body.appendChild(tag);
newText(p, red, lololoo);


// Задание 7
// Вставить в страницу (в html документ) тег <select>. С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020.

let start = 1960;
let end = 2020;
let options = "";
for (let year = start; year <= end; year++) {
  options += "<option>" + year + "</option>";
}
document.getElementById("years").innerHTML += options;


// Задание 8
// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив

const clients = [
  {name: "Женя", order: true},
  {name: "Кристина", order: true},
  {name: "Павел", order: false},
  {name: "Виолетта", order: false},
  {name: "Костя", order: true}
]

const orders =[];
for (let i in clients) {
  if (clients[i].order === true) {
    // console.log(`Клиент ${clients[i].name} заплатил заказ`)
    orders.push(`Клиент ${clients[i].name} заплатил заказ`)
  }
  else {
    //console.log(`Клиент ${clients[i].name} отменил заказ`)
    orders.push(`Клиент ${clients[i].name} отменил заказ`)
  }
  let li = document.createElement('li');
  li.innerHTML = orders[i];
  document.getElementById('clientsOrder').appendChild(li);
}
console.log(orders)


// Задание 9
// Есть массив ссылок:
// Вам нужно:

// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)

// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
// c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")

// ПОДСКАЗКА. Для создания атрибута используется js метод setAttribute:
// element.setAttribute(name, value) - где element - сам элемент, которому назначаем атрибут, name - атрибут, который нужно добавить, value - его значение. Также для стандартных атрибутов существуют свойства, и их можно добавлять напрямую: напр. img.src = ''
// Вкладывать ссылки в див нужно с помощью метода appendChild или append.

// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY

let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];

let divTag = document.createElement("div");
divTag.style.background = "gray";
divTag.style.padding = "20px";

linksArr.forEach(link => {
  let links = document.createElement('a');
  links.style.display = 'block';
  links.href = link;
  links.setAttribute('target', '_blank');
  links.innerText = link;
  divTag.appendChild(links);

});
document.body.appendChild(divTag);


// Задание 10
// Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.
// ПОДСКАЗКА Для удаления DOM-элементов можно использовать метод element.remove().
// ВАЖНО: Вам нужно удалять не всю коллекцию li, а каждый отдльный li

let removeItem = document.querySelectorAll('.forRemove');

function removeElement(removeElem) {
  removeElem.forEach(item => {
    item.remove();
  });
};

removeElement(removeItem);


// Задание 11*
// Создать в html таблицу (table).
// C помощью js заполнить таблицу информацией из массива, в одной колонке будут имена, во второй возраст. Имена должны быть красного цвета, age - синего.

// ПОДСКАЗКА, Таблица состоит из строк (tr) и ячеек (td) внутри этих строк. Строк должно создаваться столько, сколько объектов внутри массива, и их количество может быть любым.

const users = [
  {name: 'Mark', age: 12},
  {name: 'Olga', age: 30},
  {name:'Tom', age: 25},
  {name:'Den', age: 43}
];


let table = document.querySelector('table');

for (let user of users) {
	let tr = document.createElement('tr');
	
	let td1 = document.createElement('td');
	td1.innerHTML = user.name;
	tr.appendChild(td1);
	
	let td2 = document.createElement('td');
	td2.innerHTML = user.age;
	tr.appendChild(td2);
	
	table.appendChild(tr);
}
