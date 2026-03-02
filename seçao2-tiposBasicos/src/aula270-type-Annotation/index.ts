/* eslint-disable */

// Tipos Primitivos
let nome: string = 'João'; // só recebe string: "" '' ``
let idade: number = 30; // só recebe números: 10, 3.14, -5
let ativo: boolean = true; // só recebe true ou false
let nulo: null = null; // só recebe null
let indefinido: undefined = undefined; // só recebe undefined

// Arrays
let numeros: number[] = [1, 2, 3, 4, 5]; // só recebe arrays de números
let numeros2: Array<number> = [1, 2, 3, 4, 5]; // outra sintaxe para arrays de números

// objetos
interface Pessoa {
  nome: string;
  idade: number;
}

let pessoa: Pessoa = {
  nome: 'Maria',
  idade: 25,
};

// Funções
function soma(a: number, b: number): number {
  return a + b; // retorna um número
}

function saudacao(nome: string): void {
  console.log(`Olá, ${nome}!`); // não retorna nada
}
