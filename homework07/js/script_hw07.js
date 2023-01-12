const ukraine = {
    tax: 0.195, 
    middleSalary: 1789, 
    vacancies: 11476
};
const latvia = { 
    tax: 0.25, 
    middleSalary: 1586, 
    vacancies: 3921 
};
const litva = { 
    tax: 0.15, 
    middleSalary: 1509, 
    vacancies: 1114 
};

const chooseCountry = () => {
    const country = +prompt("Оберіть країну: Україна - 1, Латвія - 2, Литва - 3");
    let myCountry = null;
    if (country === 1) {
        myCountry = ukraine
    } else if (country === 2) {
        myCountry = latvia
    } else if (country === 3) {
        myCountry = litva
    } else {
        alert("Оновіть сторінку і спробуйте ще раз")
    }
    return myCountry
}
const selectedCountry = chooseCountry()

function getCountryNameInUkr(arg) {
    if (arg === ukraine) {
        return "Україні"
    } else if (arg === latvia) {
        return "Латвії"
    } else if (arg === litva) {
        return "Литві"
    }
};

const salary = +prompt("Введіть вашу зарплату (число має бути цілим)");

function getMyTaxes (yourSalary) {
    const taxAmount = yourSalary * this.tax;
    if (Number.isInteger(salary) !== true) {
        alert("Оновіть сторінку і спробуйте ще раз")
    } 
    return Number((taxAmount).toFixed(2))
};
console.log(`Сума податків, яку ви заплатите як IT-спеціаліст в ${getCountryNameInUkr(selectedCountry)}:`, getMyTaxes.call(selectedCountry, salary));

function getMiddleTaxes () {
    return Number((this.tax * this.middleSalary).toFixed(2))
};
console.log(`Середня сума податків IT-спеціалістів в ${getCountryNameInUkr(selectedCountry)}:`, getMiddleTaxes.call(selectedCountry));

function getTotalTaxes () {
    return this.tax * this.middleSalary * this.vacancies
};
console.log(`Загальна сума податків, яку платять спеціалісти в ${getCountryNameInUkr(selectedCountry)}:`, getTotalTaxes.call(selectedCountry));

function getMySalary () {
    const mySalary = {};
    const maxSalary = 2000;
    const minSalary = 1500;
    mySalary.salary = Math.floor((maxSalary - minSalary) * Math.random() + minSalary);
    mySalary.taxes = getMyTaxes.call(selectedCountry, mySalary.salary)
    mySalary.profit = Number((mySalary.salary - mySalary.taxes).toFixed(2));
    return mySalary
};
setInterval(() => console.log(getMySalary.call(selectedCountry)), 10000 );
console.log("ЗАЧЕКАЙТЕ, ЩОБ ПОБАЧИТИ РЕЗУЛЬТАТ ОСТАННЬОЇ ФУНКЦІЇ");