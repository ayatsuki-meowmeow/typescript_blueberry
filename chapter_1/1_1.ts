// 型注釈
const string1: string = 'Hello, TypeScript!';
console.log(string1); // Hello, TypeScript!

// 型推論
const string2 = 'Hello, TypeScript!'; // 型推論によりstring型として扱われる
console.log(string2); // Hello, TypeScript!

// repeatHello関数はnumber型の引数を受け取り、文字列を返すことが型注釈で明示されている
function repeatHello(count: number): string {
  return 'Hello'.repeat(count);
}

console.log(repeatHello(3)); // HelloHelloHello

// エラー例
console.log(repeatHello('wow')); // エラー: 引数の型がnumber型でない
