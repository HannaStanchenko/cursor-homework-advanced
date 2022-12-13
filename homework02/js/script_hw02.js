let firstNumber = Number(prompt("Введіть перше число", 0))
while (Number.isInteger(firstNumber) !== true) {
    firstNumber = Number(prompt("Спробуйте ще раз (число має бути цілим)", 0))
} 
console.log("Перше число: ", firstNumber);


let lastNumber = Number(prompt("Введіть друге число", firstNumber+1))
while (Number.isInteger(lastNumber) !== true || lastNumber <= firstNumber) {
    lastNumber = Number(prompt("Спробуйте ще раз (число має бути цілим та більше ніж перше)", firstNumber+1))
}
console.log("Друге число: ", lastNumber);


const missOrNot = confirm("Пропускати парні числа?")
console.log("TRUE – пропускати парні числа, FALSE – не пропускати парні числа: ", missOrNot);


let sum = 0
for (let i = firstNumber; i <= lastNumber; i++ ) {
    if (missOrNot === true) {
        if (i % 2 === 0) {
            continue
        } else {
            sum += i
        }

    } else {
        sum += i
    }
    
}
console.log("Сума всіх чисел:", sum);


const line01 = document.querySelector('#firstNumber');
line01.innerHTML = firstNumber

const line02 = document.querySelector('#lastNumber');
line02.innerHTML = lastNumber

const line03 = document.querySelector('#missOrNot');
line03.innerHTML = missOrNot

const line04 = document.querySelector('#sum');
line04.innerHTML = sum