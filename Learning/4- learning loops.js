// For loop (Best to use when I know how many times I want to loop)
for (let i = 0; i < 5; i++) {
    console.log("Number:", i);
}

// While loop (Use this when I don't know how many times I want to loop)
let count = 0;

while (count < 3) {
    console.log("Count:", count);
    count++;
}

// do...while loop (Checking conditions or when I want the code to run at least once no matter what)
let x = 5;

do {
    console.log("X is", x);
    x++
} while (x < 3); // Even though x is greater it will still run once to check it

// Looping through Arrays (for loop is best for array's although I can run the others if I want)
let fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}