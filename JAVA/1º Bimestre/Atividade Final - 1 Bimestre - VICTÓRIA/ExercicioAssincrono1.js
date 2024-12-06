// 1. Você  foi  solicitado  a  desenvolver  um  conjunto  de  funções  em  JavaScript  para simular  operações  matemáticas  simples  de  forma  assíncrona.  
// As  operações  a serem implementadas são: soma, subtração, multiplicação e divisão.Escreva as funções somaAssincrona, subtracaoAssincrona, multiplicacaoAssincronae 
// divisaoAssincrona,   cada   uma   recebendo   dois   números   como   parâmetros   e chamando uma função de callback com o resultado da operação correspondente.
// Após um atraso simulado usando setTimeout.Após implementar as funções, chame cada uma delas com valores específicos e exiba os resultados no console dentro das funções de callback.


// REQUISIÇÕES ASSÍNCRONAS.


// Funções Assíncronas para operações matemáticas básicas.
function somaAssincrona(a, b, callback) {  // Função de soma assíncrona.
    setTimeout(() => {
        callback(a + b);
    }, 1000); // Simula um atraso de 1 segundo.
}

function subtracaoAssincrona(a, b, callback) { // Função de subtração assíncrona.
    setTimeout(() => {
        callback(a - b);
    }, 1000); // Simula um atraso de 1 segundo.
}

function multiplicacaoAssincrona(a, b, callback) { // Função de multiplicação assíncrona.
    setTimeout(() => {
        callback(a * b);
    }, 1000); // Simula um atraso de 1 segundo.
}

function divisaoAssincrona(a, b, callback) { // Função de divisão assíncrona.
    setTimeout(() => {
        if (b === 0) {
            callback("Erro: divisão por zero");
        } else {
            callback(a / b);
        }
    }, 1000); // Simula um atraso de 1 segundo.
}

// Testando as funções.
somaAssincrona(5, 3, resultado => {
    console.log("Soma Assíncrona:", resultado);
});

subtracaoAssincrona(5, 3, resultado => {
    console.log("Subtração Assíncrona:", resultado);
});

multiplicacaoAssincrona(5, 3, resultado => {
    console.log("Multiplicação Assíncrona:", resultado);
});

divisaoAssincrona(5, 3, resultado => {
    console.log("Divisão Assíncrona:", resultado);
});
