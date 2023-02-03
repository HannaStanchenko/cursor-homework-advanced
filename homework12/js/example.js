// const container = document.querySelector(".container");

// const BASE_URL = "https://jsonplaceholder.typicode.com";

// function renderSingleUser(user) {
//   const userWrapper = document.createElement("div");
//   userWrapper.classList.add("user");

//   const name = document.createElement("h4");
//   name.classList.add("user-name");
//   name.textContent = user.name;

//   const phone = document.createElement("a");
//   phone.setAttribute("href", `mailto: ${user.phone}`);
//   phone.textContent = user.phone;

//   const userName = document.createElement("p");
//   userName.textContent = user.username;

//   userWrapper.append(name);
//   userWrapper.append(phone);
//   userWrapper.append(userName);

//   container.append(userWrapper);
// }

// async function getUsers() {
//   const request = await fetch(`${BASE_URL}/users`);
//   const users = await request.json();

//   users.forEach(renderSingleUser);
// }

// getUsers();

// 01:41:11	Максим Пашинов:	—————————— 
// const BASE_URL = "https://jsonplaceholder.typicode.com";

// const title = document.querySelector(".title");
// const body = document.querySelector(".body");
// const btn = document.querySelector("button");

// let titleContent = "";
// let bodyContent = "";

// title.addEventListener("input", (e) => {
//   titleContent = e.target.value;
// });

// body.addEventListener("input", (e) => {
//   bodyContent = e.target.value;
// });

// btn.addEventListener("click", () => {
//   createPost({
//     title: titleContent,
//     body: bodyContent,
//   });
// });

// async function createPost({ title, body, userId = 1 }) {
//   const request = await fetch(`${BASE_URL}/posts`, {
//     method: "POST",
//     headers: {
//       "Content-type": "image/png; charset=UTF-8",
//     },
//     body: JSON.stringify({ title, body, userId }),
//   });

//   console.log({ request });
// }



// const BASE_URL = "https://swapi.dev/api";
// const container = document.querySelector(".container") 

// async function getUsers() {
//     const request = await fetch(`${BASE_URL}/people`);
//     const users = await request.json();
//     console.log(users.results);
//     users.results.forEach(renderSingleUser)
// }
// getUsers()

// function renderSingleUser(user) {
//     const userWrapper = document.createElement("div");
//     userWrapper.classList.add("user");

//     const name = document.createElement("h4");
//     name.classList.add("user-name");
//     name.textContent = user.name;

//     const birthYear = document.createElement("p");
//     birthYear.classList.add("user-birth-year");
//     birthYear.textContent = user.birth_year;

//     const gender = document.createElement("p");
//     gender.classList.add("user-gender");
//     gender.textContent = user.gender;

//     container.append(userWrapper);
//     userWrapper.append(name);
//     userWrapper.append(birthYear);
//     userWrapper.append(gender);
// }

// async function getFilm() {
//     const arrayCharactersLinks = []
//     const request = await fetch(`${BASE_URL}/films/1`);
//     console.log(request, "etalon");
//     const film = await request.json();
//     console.log(film, "etalon02");
//     const charactersLinks = film.characters
//     charactersLinks.forEach((el) => {
//         fetch(el).then((value) => arrayCharactersLinks.push(value))
//     })
//     return arrayCharactersLinks
//     // console.log(charactersLinks);

//     // users.results.forEach(renderSingleUser)
// }
// getFilm()

// function renderSingleFilm(film) {
//     const wrapper = document.createElement("div");
//     wrapper.classList.add("user");
//     console.log();
//     // const name = document.createElement("h4");
//     // name.classList.add("user-name");
//     // name.textContent = user.name;

//     // const birthYear = document.createElement("p");
//     // birthYear.classList.add("user-birth-year");
//     // birthYear.textContent = user.birth_year;

//     // const gender = document.createElement("p");
//     // gender.classList.add("user-gender");
//     // gender.textContent = user.gender;

//     container.append(wrapper);
// }