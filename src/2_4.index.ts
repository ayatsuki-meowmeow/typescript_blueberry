import { createInterface } from "readline";

const addResult = 10 + 20;
console.log(addResult); // 30
const discounted = addResult * 0.8;
console.log(discounted); // 24

const sqrt2 = 2 ** 0.5;
console.log(sqrt2); // 1.4142135623730951
console.log(sqrt2 - 1); // 0.4142135623730951

console.log(18 / 12); // 1.5
console.log(18 % 12); // 6
console.log(18n / 12n); // 1n
console.log(18n % 12n); // 6n

const num = 5 - 1.44;
const bigint = 4n ** 2n;
console.log(num); // 3.56
console.log(bigint); // 16n

// const str: string = '123';
// console.log(str / 3); // 算術演算の左辺には、'any' 型、'number' 型、'bigint' 型、または列挙型を指定する必要があります。ts(2362)

console.log(5 - 3 - 1); // 1
console.log((5 - 3) - 1); // 1
console.log(5 - (3 - 1)); // 3

const x = 123;
const minusX = -x;
console.log(minusX); // -123

const str: string = '123';
const strNum: number = +str;
console.log(strNum + 100); // 223

let foo = 1;
foo++; // 2
console.log(foo); // 2
--foo; // 1
console.log(foo); // 1
console.log(foo++); // 1 変動前の値
console.log(++foo); // 3 変動後の値
console.log(foo--); // 3 変動前の値
console.log(--foo); // 1 変動後の値

// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question('名前を入力してください: ', (name) => {
//   console.log('こんにちは、' + name + 'さん！');
//   rl.close();
// });

console.log('foo' + 1); // foo1
console.log(null + 'bar'); // nullbar
