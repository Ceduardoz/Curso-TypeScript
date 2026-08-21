export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  tentarAtaque(personagem: Personagem): void {
    const tentarAtaque: number = Math.floor(Math.random() * 2);

    if (tentarAtaque == 0) return console.log(`${this.emoji} Errou o ataque`);
    return this.atacar(personagem);
  }

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.emoji} ${this.nome} tem ${this.vida} vida`);

    if (this.vida <= 0) {
      console.log(`${this.emoji} ${this.nome} Perdeu a batalha`);
    }
  }

  get vidaPersonagem(): number {
    return this.vida;
  }

  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';

  bordao(): void {
    console.log(`${this.emoji} GUERREIRAAAA AOO ATAQUEEEE!!!`);
  }
}

export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';

  bordao(): void {
    console.log(`${this.emoji} GRRH!!`);
  }
}

const guerreira = new Guerreira('Guerreira', 1, 10);
const monstro = new Monstro('Monstro', 1, 10);

while (guerreira.vidaPersonagem > 0 && monstro.vidaPersonagem > 0) {
  const decidirPersonagem = Math.floor(Math.random() * 2);

  if (decidirPersonagem == 0) guerreira.tentarAtaque(monstro);
  if (decidirPersonagem == 1) monstro.tentarAtaque(guerreira);
}
