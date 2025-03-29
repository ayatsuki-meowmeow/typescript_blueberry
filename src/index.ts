const message: string = "Hello, TypeScript!";
console.log(message); // "Hello, TypeScript!"

const greeting: string = "Hello, ";
const target: string = "World!";
console.log(greeting + target); // "Hello, World!"

const expressionTarget: string = greeting;
console.log(greeting + expressionTarget); // "Hello, Hello, "

const text: string = greeting + "Bob!";
console.log(text); // "Hello, Bob!"

let target2: string = "World!";
target2 = "TypeScript!";
console.log(greeting + target2); // "Hello, TypeScript!"

let target3: string;
target3 = "World!";
console.log(greeting + target3); // "Hello, World!"

// let errorTarget: string;
// console.log(greeting + errorTarget); // error: Variable 'errorTarget' is used before being assigned
