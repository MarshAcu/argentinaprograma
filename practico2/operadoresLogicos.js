const readlineSync = require('readline-sync');
const numero = readlineSync.question('Ingrese un numero:');
if(numero > 0) {
    if(numero%2 === 0) {
        console.log('El numero es positivo y par');
    } else {
        console.log('El numero es positivo e impar');
    }
} else if(numero === 0){
    console.log('El numero es cero');
} else {
    console.log('El numero es negativo');
}

