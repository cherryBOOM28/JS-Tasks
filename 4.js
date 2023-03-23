// Задание 1
function ucFirst(str) {
    let newStr = str[0].toUpperCase() + str.slice(1, str.length); // newStr = "H" + "ello"
    return newStr;
}
console.log(ucFirst("Hello"));
console.log(ucFirst("goodbye"));


// Задание 2
//Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру.

// function checkSpam(str) {
//     let convertedWord = str.toLowerCase();
//     let upperWord = str.toUpperCase();
//     if (convertedWord.includes("badWord") || upperWord.includes("XXX")) {
//         return true;
//     }
//     return false;
// }
// console.log(checkSpam("badWord"));
// console.log(checkSpam("xxx"));

function checkSpam(str) {
    const badWords = ["badword", "xxx"];

    for (word of badWords) {
        if (str.toLowerCase().includes(word)) {
            console.log(true);
            break;
        };
    };
};

checkSpam("BadWord cdsfcdcfd");

// Задание 3
// Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). Пример: «привет Женя» -> «янеЖ тевирп»
// Обратите внимание: метод reverse существует только у массивов.

function reverse(string) {
    let reversedWord = string.split('').reverse().join('');
    console.log(reversedWord);
}
reverse("привет Женя");

// Задание 4
// Массив содержит строки с информацией о железнодорожных станциях на севере Англии. Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком. 

// Необходимо извлечь код станции и имя и поместить их в строку со следующей структурой:
// MAN: Manchester Piccadilly
// Вывести эти строки в консоль
// ПОДСКАЗКА:

// 1. Извлеките трёхбуквенный код станции и сохраните его в новой переменной.
// 2. Найдите номер символьного номера точки с запятой.
// 3. Извлеките название для чтения человеком, используя номер индекса точки с запятой в качестве контрольной точки и сохраните его в новой переменной.
// 4. Объедините две новые переменные и строк

let stations = [
    'MAN675847583748sjt567654;Manchester Piccadilly',
    
    'GNF576746573fhdg4737dh4;Greenfield',
    
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    
    'SYB4f65hf75f736463;Stalybridge',
    
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
];

function stationsName(stations) {
    const stationCode = [];
    const humanReadableCode = [];
    for (let i in stations) {
        stationCode.push(stations[i].slice(0, 3));
        let indexOfSymbol = stations[i].indexOf(";");
        humanReadableCode.push(stations[i].slice(indexOfSymbol + 1));
        console.log(`${stationCode[i]}: ${humanReadableCode[i]}`)
    }
}
stationsName(stations);


// Задание 5

// Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив, содержащий только уникальные элементы arr.
// ПОДСКАЗКА
// - создать новый массив
// - обойти исходный массив, если элемент отсутствует в новом - добавлять его в новый. Таким образом в новый добавятся только уникальные.
//Пример:

let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
const unique = (arr) => {
    let newArr = [];
     for (let str of arr) {
        if (!newArr.includes(str)) {
            newArr.push(str)
        }
    } 
    return newArr;
}
console.log(unique(strings)); // должен вывести "кришна, харе, :-O"



