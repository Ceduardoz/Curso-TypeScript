function AddorConcat(a: string | number, b: string | number): string | number {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(AddorConcat(10, 20));
console.log(AddorConcat('10', '20'));
console.log(AddorConcat('10', 20));
console.log(AddorConcat(10, '20'));
