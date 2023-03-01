let suaEscolha = process.argv[2].toLowerCase();
let escolhaComputador;

if (suaEscolha === "par") {
    escolhaComputador = "ímpar";
    console.log(`Você escolheu ${suaEscolha}. O computador escolheu ${escolhaComputador}.`);
} else {
    escolhaComputador = "par";
    console.log(`Você escolheu ${suaEscolha}. O computador escolheu ${escolhaComputador}.`);
}

let numeroComputador = Math.floor(Math.random() * 11);
let seuNumero = process.argv[3];


let resultado = Number(seuNumero) + numeroComputador;
let mensagem;

if (suaEscolha === "par" && resultado % 2 === 0) {
    mensagem = "VOCÊ venceu!";
} else if (suaEscolha === "ímpar" && resultado % 2 === 1) {
    mensagem = "VOCÊ venceu!";
} else {
    mensagem = "O COMPUTADOR venceu!";
}

console.log(`Os números são: Você: (${seuNumero}) - Computador: (${numeroComputador}).`);
console.log(`O resultado da soma dos números foi ${resultado}. ${mensagem}`);