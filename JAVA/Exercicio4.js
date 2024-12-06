//Crie uma função em node.js chamada countAsync que realize uma contagem assíncrona de 1 a 5, imprimindo cada número no console, 
//com um pequeno atraso de 1 segundo em cada contagem.
//Requisições Assíncronas

function countAsync() {
    let count = 0;

    // Define uma função para lidar com a contagem
    function next() {
        count ++;
        console.log('Número: ', count);

        // se ainda não chegou a 5, aguarde a próxima contagem
        if (count < 5) {
            // Aguarda 1 segundo antes de continuar para o próximo número
            setTimeout(next, 1000); // Aguardar 1 sgundo antes de chamar a próxima contagem
            }
        }

        // Inicializa a contagem assínrona
        next();
}
// Chamada da função countAsync
countAsync();