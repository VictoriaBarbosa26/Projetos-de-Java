// 2. Você foi solicitado a desenvolver um conjunto de funções em JavaScript para realizar operações   matemáticas   simples   de   forma   síncrona.   
// As   operações   a   serem implementadas   são:   potenciação,   raiz   quadrada,   arredondamento   para   cima   e arredondamento para baixo.
// Escreva  as  funções potenciacao, raizQuadrada, arredondaCimae arredondaBaixo, cada uma recebendo os parâmetros necessários e retornando o resultado da operação correspondente.
// Após implementar as funções, chame cada uma delas com valores específicos e exiba os resultados no console.


// REQUISIÇÕES SÍNCRONAS.


// Funções Síncronas para operações matemáticas adicionais.
function potenciacao(base, expoente) { // Função de potenciação síncrona.
    return Math.pow(base, expoente);
}

function raizQuadrada(numero) { // Função de raiz quadrada síncrona síncrona.
    return Math.sqrt(numero);
}

function arredondaCima(numero) { // Função de arredondamento acima síncrona.
    return Math.ceil(numero);
}

function arredondaBaixo(numero) { // Função de arredondamento abaixo síncrona.
    return Math.floor(numero);
}

// Testando as funções.
console.log("Potenciação:", potenciacao(2, 3));
console.log("Raiz Quadrada:", raizQuadrada(16));
console.log("Arredonda para Cima:", arredondaCima(3.14));
console.log("Arredonda para Baixo:", arredondaBaixo(3.14));
