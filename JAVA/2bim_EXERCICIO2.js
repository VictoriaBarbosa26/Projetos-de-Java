// NOME: Victória Antônia Brito Barbosa. 3ºDS
// 2 - Crie um script que pergunte ao usuário uma lista de compras e, quando terminar, exiba a lista completa. 



// Importa o módulo readline para lidar com entrada e saída de texto no console
const readline = require('readline');


// Cria uma interface de leitura e escrita usando o módulo readline
const rl = readline.createInterface({
    input: process.stdin, // Define a entrada como o console
    output: process.stdout // Define a saída como o console
});


// Cria um array vazio para armazenar os itens da lista de compras
const listaDeCompras = [];


// Define a função para adicionar um item à lista de compras
function adicionarItemALista() {

    // Pergunta ao usuário por um item da lista de compras
    rl.question('Digite um item para a lista de compras (ou digite "fim" para encerrar): ', (item) => {


        // Verifica se o usuário digitou "fim" para encerrar a entrada de itens
        if (item.toLowerCase() === 'fim') {


            // Se sim, exibe a lista de compras e fecha a interface readline
            console.log('Lista de Compras:');
            listaDeCompras.forEach((item, index) => console.log(`${index + 1}. ${item}`));
            rl.close();
        } else {
            // Se não, adiciona o item à lista de compras e continua solicitando itens
            listaDeCompras.push(item);
            adicionarItemALista();
        }
    });
}

// Inicia o programa exibindo uma mensagem de boas-vindas
console.log('Bem-vindo à lista de compras!');

// Chama a função para começar a adicionar itens à lista
adicionarItemALista();
