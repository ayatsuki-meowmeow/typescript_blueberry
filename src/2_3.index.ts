import { createInterface } from "readline";

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

// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question('文字列を入力してください: ', (line) => {
//   // 文字列を入力すると、コールバック関数が呼ばれます
//   console.log(`入力された文字列: ${line}`);
//   rl.close();
// });
// rl.question('数字を入力してください: ', (line) => {
//   // const result = line + 2; // (parameter) line: string
//   const num = Number(line); // (parameter) line: string
//   const result = num + 2; //const num: number
//   console.log(result);
//   rl.close();
// });

const num1 = Number(true); // 1
const num2 = Number(false); // 0
const num3 = Number(null); // 0
const num4 = Number(undefined); // NaN
console.log(num1, num2, num3, num4); // 1 0 0 NaN

const bigint1 = BigInt('123'); // 123n
const bigint2 = BigInt(123); // 123n
const bigint3 = BigInt(true); // 1n
console.log(bigint1, bigint2, bigint3); // 123n 123n 1n

// const bigint4 = BigInt('aaaaa')
// console.log(bigint4); //SyntaxError: Cannot convert aaaaa to a BigInt

const str6 = String(123); // "123"
const str7 = String(true); // "true"
const str8 = String(null); // "null"
const str9 = String(undefined); // "undefined"
const str10 = String([1, 2, 3]); // "1,2,3"
const str11 = String({ name: "Alice" }); // "[object Object]"
console.log(str6, str7, str8, str9, str10, str11); // "123" "true" "null" "undefined" "1,2,3" "[object Object]"

const bool1 = Boolean(1); // true
const bool2 = Boolean(0); // false
const bool3 = Boolean(""); // false
const bool4 = Boolean("Hello"); // true
const bool5 = Boolean(null); // false
const bool6 = Boolean(undefined); // false
const bool7 = Boolean([]); // true
const bool8 = Boolean([1, 2, 3]); // true
const bool9 = Boolean(1n); // true
const bool10 = Boolean(0n); // false
const bool11 = Boolean({}); // true
const bool12 = Boolean({ name: "Alice" }); // true
console.log(
  bool1,
  bool2,
  bool3,
  bool4,
  bool5,
  bool6,
  bool7,
  bool8,
  bool9,
  bool10,
  bool11,
  bool12,
); // true false false true false false true true true false true true
