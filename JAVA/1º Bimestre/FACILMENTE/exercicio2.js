//Exercicio - Verificação de Palíndromo Síncrono
function palindromo(palavra){
    const PalavraInvertida = palavra.split('').reverse().join('');
    return palavra === PalavraInvertida
}
const palavra1 = "ovo";
const palavra2 = "caua";
console.log(`A palavra " ${palavra1} " é palindromo?`, palindromo(palavra1));
console.log (`A palavra " ${palavra2} " é palindromo?`, palindromo(palavra2));