// 1. При загрузке страницы создавать задачу методом POST. Title - ваше имя.
// Возвращаемое после запроса JSON содержимое записать в тег div.

let xmlHttp = new XMLHttpRequest();
let div = document.querySelector(".box");

xmlHttp.open("POST", "http://apichallenges.herokuapp.com/todos");
xmlHttp.setRequestHeader("Content-Type", "application/json");
xmlHttp.setRequestHeader("Accept", "application/json")
xmlHttp.send('{ "title": "Luiza"}');

xmlHttp.onload = function() {
   let response = JSON.parse(xmlHttp.response);
   div.innerText = xmlHttp.responseText;
};


// 2. Добавить кнопку "Обновить", при нажатии на которую отправляется запрос PUT на урл "https://todoappexamplejs.herokuapp.com/items/${id}, который пришел в ответе на POST запрос}".

// Тело запроса - JSON, в котором title - текущее время.

// После обновления текст кнопки нужно проставить в "Обновлено".

const btn = document.querySelector(".btn");
const update = document.querySelector(".update")

const currentTime = new Date().toLocaleTimeString;

btn.addEventListener("click", () => {
    //const xmlHttp = new XMLHttpRequest();
    const responseObj = JSON.parse(xmlHttp.response);
    
    xmlHttp.open("PUT", `http://apichallenges.herokuapp.com/todos/${responseObj.id}`);
    xmlHttp.setRequestHeader("Content-Type", "application/json");
    xmlHttp.setRequestHeader("Accept", "application/json");
    xmlHttp.send(`{"title": "Обновлено в ${currentTime}"}`);
    
    update.innerHTML = xmlHttp.responseText;
    btn.innerText = "Обновлено";
    
});


// 3. Добавить кнопку "Удалить", при нажатии на которую отправляется запрос DELETE на урл из предыдущей подзадачи, но уже без тела запроса.

// После удаления текст кнопки нужно проставить в "Удалено"

const xmlHttp = new XMLHttpRequest();
const btnDelete = document.querySelector(".delete");

btnDelete.addEventListener("click", () => {
    const responseObj = JSON.parse(xmlHttp.response);

    xmlHttp.open("DELETE", `http://apichallenges.herokuapp.com/todos/${responseObj.id}`);
    xmlHttp.setRequestHeader("Accept", "application/json");
    xmlHttp.send();

    div.innerText = "";
    btnDelete.innerText = "Удалено";
});
