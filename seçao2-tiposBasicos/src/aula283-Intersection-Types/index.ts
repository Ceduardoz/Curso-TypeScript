type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

type Pessoa = TemNome | TemSobrenome | TemIdade;

const pessoa: Pessoa = {
  idade: 19,
  nome: 'Eduardo',
};

console.log(pessoa);

export { pessoa };
