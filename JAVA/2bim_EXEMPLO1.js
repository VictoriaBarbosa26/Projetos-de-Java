// Modulo ReadLine (o usuário digita a informação).
// Cria um programa em node para ler dois número digitados pelo usuário.


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o 1º número: ', (num1)=>{
    rl.question('Digite o 2º número: ',(num2)=>{
        const soma = Number(num1) + Number(num2);
        console.log(`A soma dos números é: ${soma}`);
        rl.close();
    });
});
