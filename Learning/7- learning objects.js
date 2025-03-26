// Making an object

let person = {
    name: "Mely",
    age: 18,
    isCool: true
};

console.log(person.name); // Prints "Mely"
// You can use either. The one above is dot and bottom is bracket notation.
console.log(person["age"]); // Prints 18

person.age = 19; // This is how you change the age
person.hobby = "coding"; // And you can add a new property

delete person.isCool; // This is how you delete a property.

// Nesting Objects
let user = {
    username: "Mely",
    stats: {
        followers: 130,
        posts: 42
    }
};
console.log(user.stats.followers) // prints 130

// Array of Objects (Real-world use case)
let users = [
    { name: "Dj", age: 18 },
    { name: "Alex", age: 27 }
]; // I guess how Objects are structured in the real world

console.log(users[1].name); // So it gets the first user and grabs the name
