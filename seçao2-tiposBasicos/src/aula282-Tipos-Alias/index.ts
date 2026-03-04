type Idade = number;

type Pessoas = {
  nome: string;
  idade: Idade;
  salario: number;
  corPref?: CorPreferida;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Coano' | 'MAgenta' | 'Amarelo' | 'Preto';

type CorPreferida = CorCMYK | CorRGB;

const pessoas: Pessoas = {
  nome: 'Eduardo',
  idade: 19,
  salario: 1500,
};
