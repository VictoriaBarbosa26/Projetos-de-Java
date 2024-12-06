// Atividade 3 - Implemente uma função em node.js chamda countSync que realize uma contagem síncrona de 1 a 5, com um pequeno atraso de 1 segundo. 
//E imprima cada número no console, retornando o valor final da contagem.
//Requisições Síncronas

function countSync() {
    // Inicialaizar variável
    let  count = 0
    
    // Estrutura de contagem
    for (let i = 1; i <= 5; i++) 
    {
        // Incremento da variável count
        count++; //count = count +1
        
        // Imprimir a contagem do número atual
        console.log('Número: ', count);

        // Chama a função de simulação de atraso de 1 segundo 
        sleep(1000); // 1 segundo = 1000ms...
    }
    return count;
}

function sleep(ms){
    const start = new Date ().getTime(); // Cria um objeto data com o tempo em (ms) atual
    while (new Date().getTime() - start < ms){}
}

// Chamada da função e atribuição do retorno a uma variável
const finalCount = countSync();

// Imprime o valor final da contagem
console.log('Valor final da contagem:', finalCount);