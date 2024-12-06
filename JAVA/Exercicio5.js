// Desenvolver um programa em javaScript que, dadas as medidas dos lados de um triângulo identifique se é equilatero, isoceles ou escaleno.
// Equilatero = lados iguais.
// Isoceles = 2 lados iguais.
// Escaleno todos lados diferentes.

//Requisição assíncrona



// Definição da função Triangulo que recebe três parâmetros representando os lados do triângulo
function Triangulo(a, b, c) {
    // Variável para armazenar o tipo de triângulo
    let tipo;
    
	
    // Verifica se todos os lados são iguais (triângulo equilátero)
    if (a === b && a === c) {
        tipo = 'O triângulo é EQUILÁTERO.';
    } 
	
	
    // Verifica se pelo menos dois lados são iguais (triângulo isósceles)
    else if (a === b || a === c || b === c) {
        tipo = 'O triângulo é ISÓSCELES.';
    } 
	
	
    // Se nenhum dos casos anteriores for verdadeiro, significa que todos os lados são diferentes (triângulo escaleno)
    else {
        tipo = 'O triângulo é ESCALENO.';
    }
    
	
    // Retorna o tipo de triângulo identificado
    return tipo;
}


// Função para imprimir uma mensagem após 3 segundos
function imprimirMensagem() {
    // Define um timeout para a execução da função de impressão da mensagem após 3 segundos
    setTimeout(() => {
        console.log("Fim do algoritmo!!!");
    }, 1000);
}


// Definição dos comprimentos dos lados do triângulo
let a = 10;
let b = 50;
let c = 10;


// Define um timeout para chamar a função Triangulo e imprimir a mensagem após 3 segundos
setTimeout(() => {
    console.log(Triangulo(a, b, c));
    imprimirMensagem();
}, 1000);





