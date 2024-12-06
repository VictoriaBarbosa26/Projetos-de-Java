//Requisições Assíncronas
function imprimirMensagem(){
    setTimeout(() =>{
        console.log("Mensagem após 3 segundos");
    },3000);
}
console.log("Inicio do código.");
imprimirMensagem();
console.log("Fim do algoritmo.");
