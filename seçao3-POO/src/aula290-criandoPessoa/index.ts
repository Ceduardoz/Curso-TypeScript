export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

export class Funcionario extends Pessoa {
  getNomeCompleto(): string {
    return `Funcionário: ${this.nome} ${this.sobrenome}`;
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Cliente: ${this.nome} ${this.sobrenome}`;
  }
}

const pessoa1 = new Pessoa('Eduardo', 'Barbosa', 30, '123.456.789-00');
const funcionario1 = new Funcionario('Maria', 'Silva', 25, '987.654.321-00');
const cliente1 = new Cliente('João', 'Souza', 35, '456.789.123-00');

console.log(pessoa1.getNomeCompleto());
console.log(funcionario1.getNomeCompleto());
console.log(cliente1.getNomeCompleto());
