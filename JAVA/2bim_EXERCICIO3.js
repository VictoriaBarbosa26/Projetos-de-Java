// NOME: Victória Antônia Brito Barbosa. 3ºDS
// 3 - Crie um script que simule um jogo de adivinhação. O usuário deve adivinhar um número entre 1 e 10, e o programa deve responder se acertou ou errou. 



// Importa o módulo readline para lidar com entrada e saída de texto no console
const readline = require('readline');


// Cria uma interface de leitura e escrita usando o módulo readline
const rl = readline.createInterface({
    input: process.stdin, // Define a entrada como o console
    output: process.stdout // Define a saída como o console
});


// Gera um número aleatório entre 1 e 10 para ser a resposta correta
const numeroSecreto = Math.floor(Math.random() * 10) + 1;


// Pede ao usuário que adivinhe um número entre 1 e 10
rl.question('Adivinhe um número entre 1 e 10: ', (resposta) => {
    // Verifica se a resposta do usuário corresponde ao número secreto
    if (parseInt(resposta) === numeroSecreto) {

        // Se a resposta estiver correta, exibe uma mensagem de parabéns
        console.log('Parabéns! Você acertou!');

    } else {
        // Se a resposta estiver incorreta, exibe o número secreto e uma mensagem informando que o usuário errou
        console.log(`Que pena! O número secreto era ${numeroSecreto}.`);
    }
    
    // Fecha a interface readline, indicando que não haverá mais interações de entrada/saída
    rl.close();
});
