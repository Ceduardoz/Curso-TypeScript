// Array<T>

export function multiplicarArgs(...args: Array<number>): number {
  return args.reduce((acc, valor) => acc * valor, 1);
}

export function concatenaString(...args: string[]): string {
  return args.reduce((acc, valor) => acc + valor, '');
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicarArgs(2, 3, 4); // 24
const concatenated = concatenaString('Hello', ' ', 'World'); // "Hello World"
const uppercased = toUpperCase('hello', 'world'); // ["HELLO", "WORLD"]

console.log(result);
console.log(concatenated);
console.log(uppercased);
