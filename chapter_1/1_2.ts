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

