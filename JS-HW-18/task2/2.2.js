const imageTags = document.querySelectorAll(".card-img-top");
const cardTitles = document.querySelectorAll(".card-title");
const populationTags = document.querySelectorAll(".population");
const languagesTags = document.querySelectorAll(".language");
const moneyTags = document.querySelectorAll(".money");

async function getCountry() {
    const response = await fetch(
      "https://restcountries.com/v3.1/name/kazakhstan"
    );
    const data = await response.json();
    codes = data[0].borders;
    console.log(codes);

    codes.forEach(async (code) => {
        console.log(code);
        const response2 = await fetch(
          `https://restcountries.com/v3.1/alpha?codes=${code}`
        );
        const data2 = await response2.json();

        console.log(data2);

 
        imageTags[0].src = data2[0].flags.png;
        //title
        const nameTag = createTag("h3", data2[0].name.common);
        const continentTag = createTag("p", data2[0].continents[0]);
        cardTitles[0].appendChild(nameTag);
        cardTitles[0].appendChild(continentTag);

        //population
        populationTags[0].innerText =
        Math.round((data2[0].population / 1000000) * 100) / 100 + " млн";

        //languages
        let languagesText = "";
        for (property in data2[0].languages) {
            languagesText += data2[0].languages[property] + ", ";
        }
        languagesText = languagesText.slice(0, languagesText.length - 2);
        languagesTags[0].innerText = languagesText;

        //money
        let moneyText = "";
        moneyText =
            Object.values(data2[0].currencies)[0].symbol +
            " " +
            Object.values(data2[0].currencies)[0].name;
        moneyTags[0].innerText = moneyText;
      });


    
}
getCountry();

function createTag(tag, text) {
    const customTag = document.createElement(tag);
    customTag.innerText = text;
    return customTag;
}
  