// NOME: Victória Antônia Brito Barbosa. 3ºDS
// Crie um script que pergunte ao usuário a sua idade e depois calcule o ano em que ele nasceu.

// Cria uma interface readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin, // define o fluxo de entrada (teclado)
    output: process.stdout // define o fluxo de saída (console)
});

// Recebe os dados
rl.question('Digite sua idade: ', (idade)=>{
        const anoAtual = new Date().getFullYear();
        const anoNascimento = anoAtual - Number(idade);
        console.log(`O ano que você nasceu é: ${anoNascimento}`);
        rl.close();
});