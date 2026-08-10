export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected _cpf: string,
  ) {}

  set cpf(valor: string) {
    console.log('Chamou o setter');
    this._cpf = valor;
  }

  get cpf(): string {
    console.log('Chamou o getter');
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Eduardo', 'Barbosa', 30, '123.456.789-00');

pessoa.cpf = '987.654.321-00';

console.log(pessoa.cpf);
