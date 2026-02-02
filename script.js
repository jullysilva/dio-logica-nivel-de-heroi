const prompt = require('prompt-sync')();

let name_hero = "";
let xp_hero = 0;
let classification = "";

const ranks = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", 'Radiante'];


console.log("Bem-vindo ao sistema de XP do Herói!");
console.log("Esse sistema é para verificar o nível de experiência do herói e classificá-lo de acordo com o seu nível.");

name_hero = prompt("Qual o seu nome do seu herói ->  ");

do {
    xp_hero = prompt("Quantos pontos de XP você possui -> ");
    if (xp_hero < 0) {
        console.log("Pontos de experiência não podem ser negativos");
    } else if(xp_hero < 1000) {
        classification = ranks[0];
    } else if(xp_hero > 1000 && xp_hero <= 2000) {
        classification = ranks[1];
    } else if(xp_hero > 2000 && xp_hero <= 5000) {
        classification = ranks[2];
    } else if(xp_hero > 5000 && xp_hero <= 7000) {
        classification = ranks[3];
    } else if(xp_hero > 7000 && xp_hero <= 8000) {
        classification = ranks[4];
    } else if(xp_hero > 8000 && xp_hero <= 9000) {
        classification = ranks[5];
    } else if(xp_hero > 9000 && xp_hero <= 10000) {
        classification = ranks[6];
    } else {
        classification = ranks[7];
    }
    console.log("O herói de nome " + name_hero + " possui " + xp_hero + "xp e está classificado como " + classification + "!");
} while (xp_hero < 0);
