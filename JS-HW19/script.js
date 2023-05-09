// Задание

// Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com/users.

// Вывести имена пользователей на страницу на боковой панели, как вертикальное меню.

// В основной части (справа от бокового меню) изначально показывается информация о первом пользователе.

// При клике на имя пользователя на боковой панели -  в основной части информация меняется на выбранного пользователя.

// Для оформления использовать Bootstrap компонент Card:

// - для списка пользователей - шаблон Links and buttons - вариант с кнопками

// https://getbootstrap.com/docs/5.1/components/card/#list-groups

// - для отображения информации о пользователе - шаблон карточки без изображения.

// Нужно отобразить имя, ник, место проживания, компанию и email (как ссылку вида mailto:)

// ПРИМЕР, как должно получиться.


const usersArray = document.querySelector(".users-array");
const username =   document.querySelector(".card-title");
const userTag =    document.querySelector(".card-text");
const street =     document.querySelector(".street");
const suite =      document.querySelector(".suite");
const city =       document.querySelector(".city");
const zipcode =    document.querySelector(".zipcode");
const company =    document.querySelector(".company");
const email =      document.querySelector(".card-link");
const card =       document.querySelector(".profile-info");


const url = "https://jsonplaceholder.typicode.com/users";

class ProfileInfo {
    constructor(url) {
        this.url = url;
    }

    async displayProfileInfo() {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data)
        displayCard(data[0]);

        for (let i = 0; i < data.length; i++) {
            const userListInfo = document.createElement("li");
            // console.log(data)
            userListInfo.innerText = data[i].name;
            userListInfo.className = "list-group-item";
            usersArray.appendChild(userListInfo);

            const userListItem = usersArray.children[i];
            userListItem.addEventListener("click", (e) => {
                e.preventDefault();
                document.querySelectorAll(".list-group-item").forEach(li => {
                    li.classList.remove("active");
                });
                userListItem.classList.add("active");
                displayCard(data[i]);
            });
        };
        function displayCard(cardInfo) {
            username.innerText = cardInfo.name;
            userTag.innerText = cardInfo.username;
            street.innerText = cardInfo.address.street;
            suite.innerText = cardInfo.address.suite;
            city.innerText = cardInfo.address.city;
            zipcode.innerText = cardInfo.address.zipcode;
            company.innerText = cardInfo.company.name;
            email.href = "mailto:" + cardInfo.email.toLowerCase();
        };
        return data;
    }
}

function getProfileList() {
    const profileData = new ProfileInfo(url);
    profileData.displayProfileInfo();
}

getProfileList();