// 1. Você foi solicitado a desenvolver um conjunto de funções em JavaScript para realizar operações   matemáticas   simples   de   forma   síncrona.   
// As   operações   a   serem implementadas são: soma, subtração, multiplicação e divisão.Escreva  as  funções soma, subtracao, multiplicacaoe divisao,  
// cada  uma  recebendo dois números como parâmetros e retornando o resultado da operação correspondente. 
// Certifique-se de tratar adequadamente o caso de divisão por zero na função divisao.
// Após implementar as funções, chame cada uma delas com valores específicos e exiba os resultados no console.


// REQUISIÇÕES SÍNCRONAS.


// Funções Síncronas para operações matemáticas básicas.
function soma(a, b) { // Função de soma síncrona.
    return a + b;
}

function subtracao(a, b) { // Função de subtração síncrona.
    return a - b;
}

function multiplicacao(a, b) { // Função de multiplicação síncrona.
    return a * b;
}

function divisao(a, b) { // Função de divisão.
    if (b === 0) {
        return "Erro: divisão por zero"; // Tratamento de divisão por zero síncrona.
    }
    return a / b;
}

// Testando as funções.
console.log("Soma:", soma(5, 3));
console.log("Subtração:", subtracao(5, 3));
console.log("Multiplicação:", multiplicacao(5, 3));
console.log("Divisão:", divisao(5, 3));
