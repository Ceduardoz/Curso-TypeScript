export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000.00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  static criarPessoa(nome: string, sobrenome: string) {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa1 = new Pessoa('Eduardo', 'Barbosa', 30, '123.456.789-00');
const pessoa2 = Pessoa.criarPessoa('Bia', 'França');
console.log(pessoa1);
console.log(pessoa2);
