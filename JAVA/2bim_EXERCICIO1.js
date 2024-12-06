// NOME: Victória Antônia Brito Barbosa. 3ºDS
// 1 - Crie um script, ou seja, um algoritmo que colete informações básicas de um usuário, como nome e idade, 
// e depois exiba a mensagem personalizada.
// Exemplo: cadastro criado para João que tem 10 anos.



// Importa o módulo readline para lidar com entrada e saída de texto no console
const readline = require('readline');


// Cria uma interface de leitura e escrita usando o módulo readline
const rl = readline.createInterface({
    input: process.stdin, // Define a entrada como o console
    output: process.stdout // Define a saída como o console
});


// Pergunta ao usuário pelo seu nome
rl.question('Digite seu NOME: ', (nome)=>{


    // Após o usuário inserir o nome, pergunta pela sua idade
    rl.question('Digite sua IDADE: ',(idade)=>{


        // Após o usuário inserir a idade, exibe uma mensagem com o nome e idade fornecidos

        
        console.log(`Cadastro criado com sucesso para ${nome} que tem ${idade} anos.`);


        // Fecha a interface readline, indicando que não haverá mais interações de entrada/saída
        rl.close();
    });
});
