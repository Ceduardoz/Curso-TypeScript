/* RECOMENDADO */
// Condicional
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Type assertions (as HTMLBodyElement)
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Algum Valor';
input.focus();

/* NÃO RECOMENDADO */
// Type assertions (as unknown)
const body4 = document.querySelector('body') as unknown as number;

// Non-null assertions (!)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';
