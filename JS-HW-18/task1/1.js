// Задание 1. Emojihub

// Изучите документацию API эмодзи:
// https://github.com/abourtnik/emojis-world
// В разделе Endpoints найдите, по какому url получить, и изучите ответы:
// случайный эмодзи
// массив всех эмодзи
// эмоджи определенной категории

// 1.1. Добавить в html кнопку «Получить эмодзи дня», под ней пустой див для результата. По нажатию кнопки отправлять запрос за рандомным эмодзи, отобразить его в диве под кнопкой, размером примерно 70px (это можно сделать с помощью CSS-свойства font-size).
// 1.2. Отправить запрос за всеми эмодзи, разместить их на странице по категориям (см. образец ЗДЕСЬ).
// ВАЖНО! Не нужно делать отдельные запросы для категорий, необходимо взять результат из одного общего запроса. Вам может быть удобно использовать конструкцию Switch-Case, почитайте о ней ЗДЕСЬ.

const btn = document.querySelector(".btn");
const result = document.querySelector(".emoji");
const allEmoji = document.querySelector(".allEmoji");



btn.addEventListener("click", () => {
  fetch("https://api.emojisworld.fr/v1/random")
  .then(response => response.json())
  .then(data => getEmoji(data))
  .catch(error => console.error("Error!"))
})

function getEmoji(data) {
  randomEmoji = data.results[0].emoji;
  result.style.fontSize = "70px";
  result.innerText = randomEmoji;
}

function displayAllCategories() {
  
}
