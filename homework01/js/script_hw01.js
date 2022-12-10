const book1 = 15.678;
const book2 = 123.965;
const book3 = 90.2345;

const maxPrice = Math.max(book1, book2, book3);
console.log(maxPrice);
const minPrice = Math.min(book1, book2, book3);
console.log(minPrice);

const costAllBooks = book1 + book2 + book3;
console.log(costAllBooks);

const costAllBooksInt = Math.floor(book1) + Math.floor(book2) + Math.floor(book3);

const roundedCostAllBooksInt = Math.round((costAllBooksInt / 100)) * 100
console.log(roundedCostAllBooksInt);

if (costAllBooksInt % 2 === 0) {
    var typeOfNumber = true
    console.log(typeOfNumber)
} else {
    var typeOfNumber = false
    console.log(typeOfNumber)
};

const change = 500 - costAllBooks;
console.log(change);

const averagePriceOfBooks = Number(((book1 + book2 + book3) / 3).toFixed(2));
console.log(averagePriceOfBooks);

const percentageDiscount = Number((Math.random() * 100).toFixed(0));
const discount = costAllBooks * percentageDiscount / 100;
const totalAmountWithDiscount = Number((costAllBooks - discount).toFixed(2));
console.log(totalAmountWithDiscount);

const amountOfProfit = Number((costAllBooks / 2 - discount).toFixed(2));
console.log(amountOfProfit);

console.log(`Максимальна ціна: ${maxPrice}`);
console.log(`Мінімальна ціна: ${minPrice}`);
console.log(`Вартість всіх товарів: ${costAllBooks}`);
console.log(`Ціла частина вартості всіх товарів: ${costAllBooksInt}`);
console.log(`Сума товарів округлена до сотень: ${roundedCostAllBooksInt}`);
console.log(`Сума всіх товарів парне чи непарне число? (true - парне, false - непарне): ${typeOfNumber}`);
console.log(`Сума решти: ${change}`);
console.log(`Середнє значення цін: ${averagePriceOfBooks}`);
console.log(`Знижка у відсотках: ${percentageDiscount}`);
console.log(`Сума знижки: ${discount}`);
console.log(`Сума до оплати зі знижкою: ${totalAmountWithDiscount}`);
console.log(`Чистий прибуток: ${amountOfProfit}`);