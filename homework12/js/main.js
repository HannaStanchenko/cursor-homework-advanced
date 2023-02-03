import * as images from './charactersANDplanets.js';

const BASE_URL = "https://swapi.dev/api";
const listenerCharacters = document.querySelectorAll(".listener-characters"); 
const listenerPlanets = document.querySelectorAll(".listener-planets");
const main = document.querySelector(".main");
const container = document.querySelector(".container");

//Characters------------------------------
function getFilmNumber() {
    const filmNumber = +prompt("Which film do you want to choose? (From 1 to 6)");
    if (filmNumber > 6 || filmNumber <= 0 || !Number.isInteger(filmNumber)) {
        alert("Try again");
        return getFilmNumber()
    } else return filmNumber;
};

async function getActorsOfTheFilm(film) {
    const request = await fetch(`${BASE_URL}/films/${film}`);
    const filmInfo = await request.json();
    filmInfo.characters.forEach((el) => {
        fetch(el).then((value) => value.json()).then(showCharacters)
    })
};

listenerCharacters.forEach((e) => {
    e.addEventListener("click", () => {
        const filmNum = getFilmNumber();
        getActorsOfTheFilm(filmNum);
        main.remove();

        const title = document.createElement("h2");
        title.textContent = `Characters of the ${filmNum} film`;
        const btnReturn = document.createElement("i");
        btnReturn.classList.add("fi", "fi-ss-undo", "return");
        btnReturn.addEventListener("click", () => location.reload());
        container.prepend(title);
        container.prepend(btnReturn)
    })
});

function showCharacters(character) {
    const wrapperCharacters = document.createElement("div");
    wrapperCharacters.classList.add("character");

    const image = document.createElement("img");
    image.src = images.characters[`${character.name}`];

    const name = document.createElement("h4");
    name.classList.add("character-name");
    name.textContent = character.name;

    const birthYear = document.createElement("p");
    birthYear.classList.add("character-birth-year");
    birthYear.textContent = character.birth_year;

    const gender = document.createElement("p");
    gender.classList.add("character-gender");
    gender.textContent = character.gender;

    wrapperCharacters.append(image);
    wrapperCharacters.append(name);
    wrapperCharacters.append(birthYear);
    wrapperCharacters.append(gender);
    container.append(wrapperCharacters)
};

//Planets---------------------------------
async function getPlanets() {
    const request = await fetch(`${BASE_URL}/planets/?page=${page}`);
    const planetsInfo = await request.json();
    planetsInfo.results.forEach((el) => showPlanets(el))
};

function showPlanets(planet) {
    const wrapperPlanets = document.createElement("div");
    wrapperPlanets.classList.add("planets");

    const image = document.createElement("img");
    image.classList.add("image");
    image.src = images.planets[`${planet.name}`];

    const name = document.createElement("h4");
    name.classList.add("planets-name");
    name.textContent = planet.name;

    wrapperPlanets.append(image);
    wrapperPlanets.append(name);
    container.append(wrapperPlanets)
};

let page = 1;
document.addEventListener("click", function(e){
    const targetPrevious = e.target.closest(".previous");       
    if(targetPrevious){
        if(page > 1) {
            page--;
            document.querySelectorAll(".planets").forEach((e)=> e.remove());
            getPlanets()
        }
    };

    const targetNext = e.target.closest(".next");       
    if(targetNext){
        if(page < 6) {
            page++;
            document.querySelectorAll(".planets").forEach((e)=> e.remove());
            getPlanets()
        }
    }
});

listenerPlanets.forEach((e) => {
    e.addEventListener("click", () => {
        getPlanets();
        main.remove();
        document.querySelector(".container").style.rowGap="25px";
        document.querySelector(".container").style.columnGap="45px";
        document.querySelector(".container").style.marginTop="30px";
        document.querySelector(".container").style.marginBottom="30px";
        document.querySelector(".container").style.height="100vh";

        const title = document.createElement("h2");
        title.textContent = "Planets";

        const btnReturn = document.createElement("i");
        btnReturn.classList.add("fi", "fi-ss-undo", "return");
        btnReturn.addEventListener("click", () => location.reload());

        const btnPrevious = document.createElement("i");
        btnPrevious.classList.add("fi", "fi-bs-arrow-small-left", "previous");
        const btnNext = document.createElement("i");
        btnNext.classList.add("fi", "fi-bs-arrow-small-right", "next");

        container.prepend(title);
        container.prepend(btnReturn);
        container.append(btnPrevious);
        container.append(btnNext);
    })
});

//main page animation---------------------
function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('el-show');
      }
    })
};
let options = {
    threshold: [0.5] 
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.el-animation');
for (let el of elements) {
    observer.observe(el)
}