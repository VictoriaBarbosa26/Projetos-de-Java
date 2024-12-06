// 3. Desenvolva   um   conjunto   de   funções   em   JavaScript   para   realizar   operações matemáticas simples de forma síncrona. As operações a serem implementadas são: 
// cálculo  de  porcentagem,  valor  absoluto  e  arredondamento  para  o  número  mais próximo.Implemente  as  funções porcentagem, valorAbsolutoe arredondaParaProximo,  
// cada uma  recebendo  os  parâmetros  necessários  e  retornando  o  resultado  da  operação correspondente.
// Após implementar as funções, chame cada uma delas com valores específicos e exiba os resultados no console.


// REQUISIÇÕES SÍNCRONAS.


// Funções Síncronas para operações matemáticas adicionais.
function porcentagem(numero, percentual) { // Função de porcentagem síncrona.
    return (numero * percentual) / 100;
}

function valorAbsoluto(numero) { // Função de valor absoluto síncrona.
    return Math.abs(numero);
}

function arredondaParaProximo(numero) { // Função de arredondamento para o próximo síncrona.
    return Math.round(numero);
}

// Testando as funções.
console.log("Porcentagem:", porcentagem(100, 20));
console.log("Valor Absoluto:", valorAbsoluto(-5));
console.log("Arredonda para o Mais Próximo:", arredondaParaProximo(3.7));
