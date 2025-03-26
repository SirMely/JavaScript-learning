// Making an Array
let colors = ["red", "green", "yellow"];
console.log(colors[0]);

// Array Methods
colors.push("blue"); // Add to the end of array
colors.pop(); // Removes "blue" or end of array
colors.unshift("purple"); // Adds to the start of array
colors.shift(); // Removes "purple" or start of array

// indexOf() and includes()
let fruits = ["apple", "banana", "mango"];

console.log(fruits.indexOf("banana")); // Shows you what number the value is so banana is 1 and apple 0
console.log(fruits.includes("kiwi")); // Lets you know if the value exist inside the array

// slice() (gets a portion of the array)
let someFruits = fruits.slice(0, 2); // ["apple", "mango"] gets the ones you want