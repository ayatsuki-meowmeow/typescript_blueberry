// 引数の型が異なる同じ名前の関数を複数定義することはできない
function double(value: number): number {
  return value * 2;
}
function double(value: string): string {
  return value.repeat(2);
}
// 以下のように関数を呼び出すと、解決する
function triple(value: string | number): string | number {
  if (typeof value === 'string') {
    return value.repeat(3);
  }

  return value * 3;
}

// トランスパイル前のコード(TS)
function repeatHelloTS(count: number): string {
  return 'Hello'.repeat(count);
}

// トランスパイル後のコード(JS)
function repeatHelloJS(count) {
  return 'Hello'.repeat(count);
}

// トランスパイル前のコード(ES2015)
class HumanES2015 {
  greet() {
    return 'Hello';
  }
}

// トランスパイル後のコード(ES5)
var HumanES5 = /** @class */ (function () {
  function Human() {
  }
  Human.prototype.greet = function () {
    return 'Hello';
  };
  return Human;
}());


