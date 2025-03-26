// DOM (Document Object Model)
// The DOM is a big JavaScript version of an HTML page. You can use JS to select, change, add, remove elements from a page.

// Selecting Elements
<p id="greeting">Hello!</p> // html
let greeting = document.getElementById("greeting");
console.log(greeting.textContent); // This would print Hello! or what's in the paragraph

// Query Selector
let heading = document.querySelector("h1"); // Gets an <h1>
let button = document.querySelector("#myBtn"); // Gets an ID
let input = document.querySelector(".user-input"); // Gets a class

// Changing Conent or Style
heading.textContent = "Welcome, DJ!"; // changes the h1 heading to "Welcome, DJ!"
greeting.style.color = "blue"; // Changes the greeting color id to blue

// Responding to Events (You can make buttons do stuff when clicked) (Just a button function)
{/* <button id="clickMe">Click me</button> 
<p id="message"></p> 

let button = document.getElementById("clickMe");
let message = document.getElementById("message");

button.addEventListener("click", () => {
    message.textContent = "You clicked the button!";
}) */}

// Creating and Adding Elements
let newPara = document.createElement("p");
newPara.textContent = "This was added with JS!";
document.body.appendChild(newPara);