const container = document.querySelector(".main .container");

function getRandomColor () {
    return '#' + (Math.random().toString(16)).substring(2, 8);
}

function generateBlocks() {
    for (let i = 0; i < 25; i++) {
        const div = document.createElement("div");
        div.style.backgroundColor = getRandomColor()
        container.prepend(div);
    };
    return
};

let oneBlock = false;

function generateBlocksInterval() {
    if(!oneBlock) {
        generateBlocks();
        oneBlock = true
    }
    const allDiv = document.querySelectorAll(".main .container div");
    setInterval(() => {
        for (let item of allDiv) {
            item.style.backgroundColor = getRandomColor()
        };
    }, 1000)
    return
};
generateBlocksInterval()