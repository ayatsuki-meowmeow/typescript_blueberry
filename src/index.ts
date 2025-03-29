const message: string = "Hello, TypeScript!";
console.log(message); // "Hello, TypeScript!"

const greeting: string = "Hello, ";
const target: string = "World!";
console.log(greeting + target); // "Hello, World!"

const expressionTarget: string = greeting;
console.log(greeting + expressionTarget); // "Hello, Hello, "

const text: string = greeting + "Bob!";
console.log(text); // "Hello, Bob!"
