function ordenarNumeros(numeros){
    return numeros.sort((a,b )=> a-b);
}

const numeros1 = [8,2,3,4,5];
console.log("array ordernado:", ordenarNumeros(numeros1));