// Задание 2. Карточки стран

// Есть API с информацией о 120 странах мира. URL (запросы на FULL NAME):

// https://restcountries.com

// Получить данные с помощью fetch и сформировать разметку карточек стран (например каждую 10-ю из массива) по ОБРАЗЦУ.

// ВАЖНО: Для разметки используйте сетку bootstrap, шаблоны смотрите ЗДЕСЬ.


const countries = [];
const imageTags = document.querySelectorAll(".card-img-top");
const cardTitles = document.querySelectorAll(".card-title");
const populationTags = document.querySelectorAll(".population");
const languagesTags = document.querySelectorAll(".language");
const moneyTags = document.querySelectorAll(".money");

async function getCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  console.log(data);

  for (let i = 0; i <= 30; i += 10) {
    countries.push(data[i]);
  }
  console.log(countries);

  for (let i = 0; i < imageTags.length; i++) {
    imageTags[i].src = countries[i].flags.png;

    //title
    const nameTag = createTag("h3", countries[i].name.official);
    const continentTag = createTag("p", countries[i].continents[0]);
    cardTitles[i].appendChild(nameTag);
    cardTitles[i].appendChild(continentTag);

    //population
    populationTags[i].innerText =
      Math.round((countries[i].population / 1000000) * 100) / 100 + " млн";

    //languages
    let languagesText = "";
    for (property in countries[i].languages) {
      languagesText += countries[i].languages[property] + ", ";
    }
    languagesText = languagesText.slice(0, languagesText.length - 2);
    languagesTags[i].innerText = languagesText;

    //money
    let moneyText = "";
    moneyText =
      Object.values(countries[i].currencies)[0].symbol +
      " " +
      Object.values(countries[i].currencies)[0].name;
    moneyTags[i].innerText = moneyText;
  }
}

getCountries();

function createTag(tag, text) {
  const customTag = document.createElement(tag);
  customTag.innerText = text;
  return customTag;
}
