// tipo ANy

export function showmessage(msg: any): any {
  return msg;
}

console.log(showmessage('Olá, mundo!'));
console.log(showmessage(123));
console.log(showmessage(true));
console.log(showmessage({ nome: 'João', idade: 30 }));
