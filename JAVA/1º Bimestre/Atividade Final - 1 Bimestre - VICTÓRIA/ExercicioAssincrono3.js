// 3. Desenvolva   mais   uma   função   em   JavaScript   para   simular   outra   operação matemática  simples  de  forma  assíncrona.  A  operação  a  ser  implementada  é: 
// arredondamento para o número mais próximo.Implemente  a  função arredondaParaProximoAssincrona,  recebendo  os  parâmetros necessários  e  chamando  uma  
// função  de  callback  com  o  resultado  da  operação correspondente após um atraso simulado usando setTimeout.
// Após implementar a função, chame-a com um valor específico e exiba o resultado no console dentro da função de callback.


// REQUISIÇÕES ASSÍNCRONAS. 


// Função Assíncrona para arredondamento para o número mais próximo.
function arredondaParaProximoAssincrona(numero, callback) { // Função de arredondamento para o próximo assíncrona.
    setTimeout(() => {
        callback(Math.round(numero));
    }, 1000); // Simula um atraso de 1 segundo.
}

// Testando a função.
arredondaParaProximoAssincrona(3.7, resultado => {
    console.log("Arredonda para o Mais Próximo Assíncrono:", resultado);
});
