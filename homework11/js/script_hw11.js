async function getRandomChinese(length) {
    let result = "";
    while(length--) {
        let numbers = Date.now();
        numbers = +numbers.toString().slice(-6, -1);
        const chineseChar = String.fromCharCode(numbers);
        result += chineseChar;
        await delay(50)
    };
    return result
};

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
};

getRandomChinese(getLength()).then((value) => {
    document.querySelector(".container").innerHTML = value
});

function getLength() {
    const length = +prompt("Введіть бажану довжину рядка");
    if (!Number.isInteger(length)) {
        alert("Спробуйте ще раз");
        location.reload()
    };
    return length
}