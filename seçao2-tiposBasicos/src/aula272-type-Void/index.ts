// Tipo void
function showmessage(...args: string[]): void {
  console.log(...args);
}

console.log(showmessage('Olá, mundo!'));
console.log(showmessage('Bem-vindo', 'ao', 'TypeScript!'));

const Pessoa = {
  nome: 'Eduardo',
  idade: 19,

  exibirnome(): void {
    console.log(`O nome da pessoa é ${this.nome} e idade ${this.idade} anos`);
  },
};

Pessoa.exibirnome();
