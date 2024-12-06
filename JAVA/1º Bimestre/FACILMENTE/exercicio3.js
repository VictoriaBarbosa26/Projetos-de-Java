function ordenarNumeros(numeros){
    return numeros.sort((a,b )=> a-b);
}

const numeros1 = [6,3,21,7,1];
console.log("array ordernado:", ordenarNumeros(numeros1));