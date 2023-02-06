function* createIdGenerator() {
    let id = 1;
    while(true) yield id++;
};
const idGenerator = createIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log("------------------------------------------------");


const placeForFontSize = document.getElementById("place-for-font-size");
const wrapper = document.querySelector(".wrapper");
const up = document.querySelector(".fi-rr-caret-circle-up");
const down = document.querySelector(".fi-rr-caret-circle-down");

function* newFontGenerator(fsize) {
    let currFSize = fsize;
    while(true) {
        const arg = yield currFSize
        if (arg === "up") {
            currFSize += 2
        } else if (arg === "down") {
            currFSize -= 2
        } else {
            currFSize
        }
        putFontSize(currFSize)
    }

};
const fontGenerator = newFontGenerator(14);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next().value);

function putFontSize(fz) {
    placeForFontSize.innerHTML = fz;
    wrapper.style.fontSize = `${fz}px`;
}
up.addEventListener("click", () => {
    fontGenerator.next("up")
})
down.addEventListener("click", () => {
    fontGenerator.next("down")
})

fontGenerator.next("up");
fontGenerator.next("up");
fontGenerator.next("up");
fontGenerator.next("up");
fontGenerator.next("up");
fontGenerator.next("up");
fontGenerator.next("up");


