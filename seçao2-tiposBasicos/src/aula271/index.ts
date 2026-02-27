// tipo ANy

function showmessage(msg: any) {
  return msg;
}

console.log(showmessage('Olá, mundo!'));
console.log(showmessage(123));
console.log(showmessage(true));
console.log(showmessage({ nome: 'João', idade: 30 }));
