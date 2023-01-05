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
    let country = null;
    if (arg === ukraine) {
        return country = "Україні"
    } else if (arg === latvia) {
        return country = "Латвії"
    } else if (arg === litva) {
        return country = "Литві"
    }
};


function getMyTaxes (salary) {
    salary = +prompt("Введіть вашу зарплату (число має бути цілим)")
    if (Number.isInteger(salary) !== true) {
        alert("Оновіть сторінку і спробуйте ще раз")
    } 
    return `Сума податків, яку ви заплатите як IT-спеціаліст в ${getCountryNameInUkr(this)}: ${(salary * this.tax).toFixed(2)}`
};
console.log(getMyTaxes.call(selectedCountry, 25650));

function getMiddleTaxes () {
    return `Середня сума податків IT-спеціалістів в ${getCountryNameInUkr(this)}: ${(this.tax * this.middleSalary).toFixed(2)}`
};
console.log(getMiddleTaxes.call(selectedCountry));

function getTotalTaxes () {
    return `Загальна сума податків, яку платять спеціалісти в ${getCountryNameInUkr(this)}: ${this.tax * this.middleSalary * this.vacancies}`
};
console.log(getTotalTaxes.call(selectedCountry));

function getMySalary () {
    const mySalary = {};
    const maxSalary = 2000;
    const minSalary = 1500;
    mySalary.salary = Math.floor((maxSalary - minSalary) * Math.random() + minSalary);
    mySalary.taxes = Number((this.tax * mySalary.salary).toFixed(2));
    mySalary.profit = Number((mySalary.salary - mySalary.taxes).toFixed(2));

    return `Зарплата - ${mySalary.salary}
Сума податку, яку треба буде сплатити в ${getCountryNameInUkr(this)} - ${mySalary.taxes}
Чистий прибуток - ${mySalary.profit}`
};
setInterval(() => console.log(getMySalary.call(selectedCountry)), 10000 );
console.log("ЗАЧЕКАЙТЕ, ЩОБ ПОБАЧИТИ РЕЗУЛЬТАТ ОСТАННЬОЇ ФУНКЦІЇ");