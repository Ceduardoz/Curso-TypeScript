let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10;
const a = 100;

export const pessoa = {
  nome: 'Eduardo' as const,
  sobrenome: 'Barbosa',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul') {
  return cor;
}

console.log(escolhaCor('Azul'));

export default 1;
