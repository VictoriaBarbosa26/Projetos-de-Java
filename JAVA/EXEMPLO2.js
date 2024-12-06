// requisição assíncrona
let a = 1;
const b = 2; // constante não é alterada igual um algoritimo.
setTimeout(() => { // função que executa uma função após a outra
    console.log(a+b);
})

a = 3;
console.log(a+b);