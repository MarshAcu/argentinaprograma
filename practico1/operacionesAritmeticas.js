
let num1 = 3;
let num2 = 8;
let num3 = 7;
let num4 = 11;

let sum = num1 + num2;
let resta = num4 - num3;
let esPar = false;

resultadoFinal = sum * resta;
if(resultadoFinal % 2 === 0) {
    esPar = true;
} else {
    esPar = false;
}

console.log(`Mis variables iniciales fueron: [${num1}], [${num2}], [${num3}] y [${num4}].
 La respuesta a verificar si el resultado final es par es: [${esPar}]`);

