// Задание 4

// Создать собственный погодный виджет на основе данных с сервера погоды.
// Оформить, как в примере: ЗДЕСЬ.
// Документация: https://openweathermap.org/api...
// *Порядок работы:*
// 1) Проверить, работает ли API-ключ, данный в примере. Для этого открыть url https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247
// Если данные отображаются - можно не получать свой ключ, иначе см. п. 1.1.
// 1.1. Зарегистрироваться и получить собственный API-ключ на сайте https://home.openweathermap.or...
// 2) Создать html-css разметку под данные.
// - общий блок для виджета, внутри него два блока - для текущей погоды и для прогноза (пример см. ЗДЕСЬ)
// - внутри нижней части виджета через js будут добавляться строки по дням - это дивы, им нужно сразу прописать стили (flex-распределение вставляемых элементов, нижняя граница).
// 3) Написать JS с HTTP-запросом на url.
// - кастомизировать url запроса: указать нужный город, добавить в url параметр отображения градусов по Цельсию (см. на странице документации раздел *Units of measurement*)
// 4) добавить информацию из ответа в виджет на страницу.
// - в верхней части виджета отобразить город и дату (из полученного JSON-объекта).
// Возможно, текущую дату проще получить из встроенной функции Date, примеры работы с ней ЗДЕСЬ.
// - из JSON-объекта "достать" текущую погоду (.list[0]) - первый объект внутри массива.
// Как узнать url иконки: https://openweathermap.org/wea...
// - в нижней части добавить необходимую информацию через цикл. Вам понадобится каждый 8-й объект, т.к в ответе приходит погода на каждые 3 часа (8 раз в сутки), а нам нужна погода 1 раз в сутки.

const httpRequest = new XMLHttpRequest();

const currentTime = document.querySelector(".time");
const currentWeather = document.querySelector(".current__weather");
const currentTemp = document.querySelector(".current__temp");
const city = document.querySelector(".city");
const windSpeed = document.querySelector(".wind");
const weatherIcon = document.querySelector(".weather__icon");
const weatherTitle = document.querySelector(".weather__title");
const weatherDate = document.querySelector(".date");
const weather = document.querySelector(".weather__card")

function getTime() {
  const time = new Date().toLocaleTimeString("en-GB", {
    timeZone: "Europe/Minsk",
  });

  currentTime.innerText = `${time}`;
};
getTime();

httpRequest.onload = function () {
  const result = JSON.parse(httpRequest.responseText);
  // console.log(result);

   city.innerText = result.city.name;
    document.querySelector(".current__weather").innerText = result.list[0].weather[0].main;
    currentTemp.innerText = `${Math.round(result.list[0].main.temp)} °C`;
    windSpeed.innerHTML = result.list[0].wind.speed + "m/s";
    const weatherIconText = result.list[0].weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${weatherIconText}@2x.png`;
  
  for (let i = 0; i <= 39; i += 8) {

    const dayTime = result.list[i].dt_txt
    weather.innerHTML += `
        <div class="card">
          <div class="weather-time">
            <p class="date-time">${dayTime.slice(0, 10)}</p>
            <p class="weather-time">${dayTime.slice(11, 19)}</p>
          </div>
          <div class="weather-icon-src">
            <img src="https://openweathermap.org/img/wn/${result.list[i].weather[0].icon}@2x.png" alt="" class="weather-icon">
          </div>
          <div class="weather-temp">
            <p class="temp">${Math.round(result.list[i].main.temp)} °C</p>
          </div>
        </div>
      `
  }
};

httpRequest.open(
  "GET",
  "https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247&units=metric"
);
httpRequest.send();

