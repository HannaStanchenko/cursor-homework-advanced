// Функція, яка повертає масив випадкових цілих чисел
let randomArray = [];
function getRandomArray() {
    const length = +prompt("Введіть бажану довжину масиву");
    const min = +prompt("Введіть мінімальне значення");
    const max = +prompt("Введіть максимальне значення");

    if (Number.isInteger(length) !== true || Number.isInteger(min) !== true || Number.isInteger(max) !== true) {
        alert("Числа мають бути цілими і містити лише цифри")
    } else {
        const array = new Array(length).fill(null);
        randomArray = array.map(() => Math.floor((max - min) * Math.random() + min));
        return alert(`Масив рандомних чисел від ${min} до ${max} довжиною ${length}: ${randomArray}`), 
               console.log(`Масив рандомних чисел від ${min} до ${max} довжиною ${length}:`, randomArray);
    }
}
getRandomArray()

function integerArray(array) {
    const intArray = [];
    array.map((item) => {
        if (Number.isInteger(item) === true) {
            return intArray.push(item)
        }
    });
    if (intArray.length === 0) {
        return console.log("В масиві мають бути цілі числа")
    } else {
        return intArray
    }
};

// Функція, яка рахує середнє арифметичне всіх переданих в неї аргументів
function getAverage() {
    integerArray(randomArray);
    let total = 0
    for (let item of randomArray) total += item;
    total /= randomArray.length
    alert(`Середнє арифметичне чисел: ${randomArray} дорівнює ${total} `);
    console.log(`Середнє арифметичне чисел: ${randomArray} дорівнює ${total}`);
};

// Функція, яка рахує медіану всіх переданих в неї аргументів
function getMedian() {
    integerArray(randomArray);
    const sortedArray = randomArray.sort((a, b) => a-b);
    let median = null;
    if (sortedArray.length % 2 !== 0) {
        median = sortedArray[(sortedArray.length - 1) / 2];
    } else {
        median = (sortedArray[(sortedArray.length / 2) - 1] + sortedArray[sortedArray.length / 2]) / 2;
    };
    alert(`Медіана чисел ${sortedArray} - ${median}`);
    console.log(`Медіана чисел ${sortedArray} - ${median}`);
}

// Функція, яка фільтрує парні числа
function filterEvenNumbers() {
    integerArray(randomArray);
    const filteredArray = randomArray.filter((el) => el % 2 !== 0);
    alert(`Видалити із ${randomArray} парні числа. Результат -  ${filteredArray}`);
    console.log(`Видалити із ${randomArray} парні числа. Результат -  ${filteredArray}`);
}

//Функція, яка рахує кількість чисел більших 0
function countPositiveNumbers() {
    integerArray(randomArray);
    const positiveNumbers = randomArray.filter((el) => el > 0);
    alert(`Кількість чисел більших 0 у масиві [${randomArray}] дорівнює ${positiveNumbers.length}`);
    console.log(`Кількість чисел більших 0 у масиві [${randomArray}] дорівнює ${positiveNumbers.length}`);
}

// Функція, яка фільтрує усі елементи в масиві та залишає тільки ті, які діляться націло на 5
function getDividedByFive() {
    integerArray(randomArray);
    const numbersDividedByFive = randomArray.filter((el) => el % 5 === 0);
    alert(`Числа з масиву [${randomArray}], які діляться націло на 5: ${numbersDividedByFive}`);
    console.log(`Числа з масиву [${randomArray}], які діляться націло на 5: ${numbersDividedByFive}`);
}

// Функція, що замінює погані слова на *
function replaceBadWords() {
    const badWordsArray = ["fuck", "shit"];
    let newBadWord = confirm("Список поганих слів: fuck, shit. Чи бажаєте доповнити цей список?");
    switch (newBadWord) {
        case true:
            newBadWord = prompt("Введіть нове погане слово").toLowerCase();
            badWordsArray.push(newBadWord)
            break 
        ;
        case false:
            newBadWord = null;
            break
        ;
    }
    const string = prompt("Введіть речення").toLowerCase();
    const re = new RegExp(badWordsArray.join("|"), "gi");
    const clearString = string.replace(re, '****');

    alert(`Відформатоване речення: ${clearString}`);
    console.log(`Відформатоване речення: ${clearString}`);
}