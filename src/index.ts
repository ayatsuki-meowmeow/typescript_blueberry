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

const width1: number = 3;
const width2: number = 4;
const height: number = 3;
const area: number = (width1 + width2) * height / 2;
console.log(area); // 10.5

const million: number = 1_000_000;
console.log(million); // 1000000

const bignum: bigint = (123n + 456n) * 2n;
console.log(bignum); // 1158n

const result = 5n / 2n;
console.log(result); // 2n

// const errorResult = 5 / 2n; // error TS2365: Operator '/' cannot be applied to types 'number' and 'bigint'.

const str1: string = "Hello";
const str2: string = 'World!';
console.log(str1 + ", " + str2); // "Hello, World!"

const message2: string = `Hello
world`;
console.log(message2); // "Hello\nworld"

const str3: string = "Hello";
const str4: string = "World!";
const str5: string = `${str3}, ${str4}`;
console.log(str5); // "Hello, World!"

console.log(`1 + 1 = ${1 + 1}`); // "1 + 1 = 2"

console.log("Hello \\world/"); // "Hello \world/"
console.log("Hello \u{796d} world!"); // "Hello 祭 world!"
console.log("Hello \u796d world!"); // "Hello 祭 world!"

const no: boolean = false;
const yes: boolean = true;
console.log(yes, no); // true false

const val1 = null;
const val2 = undefined;
console.log(val1, val2); // null undefined

const n: null = null;
const u: undefined = undefined;
console.log(n, u); // null undefined
