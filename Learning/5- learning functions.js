// Function Declaration
function greet() {
    console.log("Hello");
}

greet(); // This is how we call the function like from Python

// Parameters and Arguments
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("DJ")

// Returning Values
function add(a,b) {
    return a + b;
}

let result = add(5, 3)
console.log(result)

// Function Expressions (optional style)
const sayHi = function() {
    console.log("Hi!");
}

sayHi();

// Arrow Functions (Used more today)
const multiply = (a,b) => {
    return a * b;
}

console.log(multiply(4,5))
// Here's a one liner
const square = n => n * n;
console.log(square(6)) // 6 * 6