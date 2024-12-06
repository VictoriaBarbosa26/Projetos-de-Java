//Verifique de palindromo assíncrono

function ehPalindromo(palavra){
    const palavraInvertida = palavra.split('').reverse().join('');
    return palavra ===palavraInvertida;
}

const palavra1 = "ovo";
const palavra2 = "Victoria";

console.log(`A palavra "${palavra1}"`, ehPalindromo(palavra1));
console.log(`A palavra "${palavra2}"`, ehPalindromo(palavra2));