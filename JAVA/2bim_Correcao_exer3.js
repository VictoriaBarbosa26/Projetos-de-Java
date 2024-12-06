const readline = require('readline');

// Cria uma interface de leitura e escrita usando o módulo readline
const rl = readline.createInterface({
    input: process.stdin, // Define a entrada como o console
    output: process.stdout // Define a saída como o console
});

// Gera um número aleatório entre 1 e 10 para ser a resposta correta
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Função para solicitar ao usuário um número aleatório
const ask = () => {
    rl.question("Tente adivinhar um número entre 1 e 10: ", (resposta) => {
        const guess = parseInt(resposta);

        // Verificar se o valor digitado é o valor escolhido aleatoriamente
        if (isNaN(guess) || guess < 1 || guess > 10) {
            console.log("Insira um número entre 1 e 10.");
            ask();
        } else {
            // Verificação de palpite
            if (guess === randomNumber) {
                console.log("Parabéns, você acertou!");
                rl.close();
            } else {
                // Apresenta dicas para o usuário caso o palpite esteja errado
                if (guess < randomNumber) {
                    console.log('Muito Baixo!');
                } else {
                    console.log('Muito Alto!');
                }
                ask();
            }
        }
    });
};

ask();
