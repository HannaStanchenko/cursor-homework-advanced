
// FUNCTION 01 
function getMaxDigit(number) {
    number = +prompt("Введіть ціле число");
    while (Number.isInteger(number) != true ) {
        alert("Введіть ціле число") 
        number = +prompt("Введіть ціле число");
    }
    initialNumber = number;
    let maxDigit = 0;
        while (number > 0 ) {
            if (number % 10 > maxDigit) maxDigit = number % 10
            number = Math.floor(number / 10)       
        } 
        console.log(`У числі ${initialNumber} найбільша цифра - ${maxDigit}`);
        alert(`У числі ${initialNumber} найбільша цифра - ${maxDigit}`);
}

// FUNCTION 02
function powerOfNumbers(number, power) {
    number = +prompt("Введіть число");
    power = +prompt("Введіть степінь");
    let result = 1;
    if (typeof number !== "number" || typeof power !== "number" || isNaN(number) === true || isNaN(power) === true){
        alert("Числа не повинні містити інших символів, окрім цифр")
    } else if (power >= 0 ) {
        for (let i = 0; i < power; i++) {
            result *= number;
        }
        console.log(`${number} у ${power} степені = ${result}`);
        alert(`${number} у ${power} степені = ${result}`);
    } else {
        for (let i = power; i < 0; i++) {
            result /= number
        }
        console.log(`${number} у ${power} степені = ${result}`);
        alert(`${number} у ${power} степені = ${result}`);
    }
}

// FUNCTION 03
function formatName (name) {
    name = prompt("Введіть ім'я").toLowerCase();
    const finalName =  name[0].toUpperCase() + name.slice(1)
    console.log(finalName);
    alert(`Відформатоване ім'я: ${finalName}`)
}

// FUNCTION 04
function withoutTaxes (yourSalary) {
    yourSalary = +prompt("Введіть свою зарплату");
    if (typeof yourSalary !== "number" || isNaN(yourSalary) === true) {
        alert("Число не повинно містити інших символів, окрім цифр")
    } else {
        const tax = 19.5
        const taxAmount = (tax * yourSalary) / 100;
        const salaryWithoutTaxes = Number((yourSalary - taxAmount).toFixed(2));
        console.log(`Ваша зарплата ${yourSalary} після сплати податків становить ${salaryWithoutTaxes}`);
        alert(`Ваша зарплата ${yourSalary} після сплати податків становить ${salaryWithoutTaxes}`)
    }
}

// FUNCTION 05
function getRandomNumber(minNumber, maxNumber) {
    minNumber = +prompt("Введіть перше число");
    maxNumber = +prompt("Введіть друге число");

    if (Number.isInteger(minNumber) != true || Number.isInteger(maxNumber) != true) {
        alert("Числа мають бути цілими та не містити інших символів, окрім цифр")
    } else if (maxNumber <= minNumber) {
        alert("Друге число має бути більше першого");
    }  else {
        const randomValue = Math.random();
        const randomResult = Math.floor((maxNumber - minNumber) * randomValue + minNumber)

        console.log(`Рандомне число в діапазоні від ${minNumber} до ${maxNumber}: ${randomResult}`);
        alert(`Рандомне число в діапазоні від ${minNumber} до ${maxNumber}: ${randomResult}`)
    }
}

// FUNCTION 06
function countLetter(word, letter) {
    word = prompt("Введіть слова");
    letter = prompt("Введіть буквку");
    let counter = 0
    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() === letter.toLowerCase()) {
            counter += 1
        }
    }
    console.log(`У слові ${word} буква ${letter} повторюється ${counter} р.`)
    alert(`У слові ${word} бувка ${letter} повторюється ${counter} р.`)
}

// FUNCTION 07

function convertCurrency(money) {
    money = prompt("Введіть сумму та валюту").toLowerCase()
    const dollarRate = 37;

    if (money.slice(-3) == "uah") {
        const moneyWithoutCurrency = Number(money.slice(0, -3))
        if (typeof moneyWithoutCurrency !== "number" || isNaN(moneyWithoutCurrency) === true){
            alert("Число не повинно містити інших символів, окрім цифр")
        } else {
            const exchange = Number((moneyWithoutCurrency / dollarRate).toFixed(2));
            console.log(`${money} це ${exchange}$`);
            alert(`${money} це ${exchange}$`)
        }

    } else if (money.slice(-1) === "$") {
        const moneyWithoutCurrency = Number(money.slice(0, -1));
        if (typeof moneyWithoutCurrency !== "number" || isNaN(moneyWithoutCurrency) === true){
            alert("Число не повинно містити інших символів, окрім цифр");
        } else {
            const exchange = Number((moneyWithoutCurrency * dollarRate).toFixed(2));
            console.log(`${money} це ${exchange}UAH`);
            alert(`${money} це ${exchange}UAH`)
        } 
    } else {
        alert("Перевірте правильність написання")
    }
}


