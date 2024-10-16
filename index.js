// Função para calcular o nível do jogador com base nas vitórias e derrotas
function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel = "unranked";

    // Estrutura de decisão para determinar o nível com base nas vitórias
    if (vitorias <= 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else { // vitorias >= 101
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

// Exemplo de uso da função
var readline = require ('readline-sync');

const vitorias = readline.questionInt('Informe a quantidade de vitorias: ');
const derrotas = readline.questionInt('Informe a quantidade de derrotas: ');;

const resultado = calcularNivel(vitorias, derrotas);

// Mensagem final
console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} e está no nível de ${resultado.nivel}.`);
