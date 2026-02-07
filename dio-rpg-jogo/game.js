const prompt = require("prompt-sync")();

class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";

    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    } else {
      ataque = "um ataque desconhecido";
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

const nome = prompt("Digite o nome do herói: ");
const idade = Number(prompt("Digite a idade do herói: "));
const tipo = prompt(
  "Digite o tipo do herói (mago, guerreiro, monge, ninja): ",
).toLowerCase();

const heroi = new Heroi(nome, idade, tipo);

heroi.atacar();
