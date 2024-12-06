// 2. Desenvolva  duas   funções   adicionais   em   JavaScript   para   simular  operações matemáticas simples de forma assíncrona. As operações a serem implementadas são: 
// cálculo de potenciação e cálculo de raiz quadrada.Implemente as funções potenciacaoAssincronae raizQuadradaAssincrona, cada uma recebendo  os  parâmetros  necessários  
// e  chamando  uma  função  de  callback  com  o resultado da operação correspondente após um atraso simulado usando setTimeout.
// Após implementar as funções, chame cada uma delas com valores específicos e exiba os resultados no console dentro das funções de callback.

// REQUISIÇÕES ASSÍNCRONAS.


// Funções Assíncronas para operações matemáticas adicionais.
function potenciacaoAssincrona(base, expoente, callback) { // Função de potenciação assíncrona.
    setTimeout(() => {
        callback(Math.pow(base, expoente));
    }, 1000); // Simula um atraso de 1 segundo.
}

function raizQuadradaAssincrona(numero, callback) { // Função de raiz quadrada assíncrona.
    setTimeout(() => {
        callback(Math.sqrt(numero));
    }, 1000); // Simula um atraso de 1 segundo.
}

// Testando as funções.
potenciacaoAssincrona(2, 3, resultado => {
    console.log("Potenciação Assíncrona:", resultado);
});

raizQuadradaAssincrona(16, resultado => {
    console.log("Raiz Quadrada Assíncrona:", resultado);
});
