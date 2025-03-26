// HTML setup is 8- DOM.html

let heading = document.getElementById("main-heading");
let button = document.getElementById("changeBtn");
let output = document.getElementById("output");

button.addEventListener("click", () =>  {
    heading.textContent ="Welcome back {user}!";
    output.textContent ="Good job pressing that button!";
})
