const readlineSync = require('readline-sync');
const mes = realineSync.question('Ingrese un numero del 1 al 12');
const meses = [{ mes: 'Enero', dias: 31 }, { mes: 'Febrero', dias: 28 }, { mes: 'Marzo', dias: 31 }, { mes: 'Abril', dias: 30 },
{ mes: 'Mayo', dias: 31 }, { mes: 'Junio', dias: 30 }, { mes: 'Julio', dias: 31 }, { mes: 'Agosto', dias: 31 }, { mes: 'Septiembre', dias: 30 },
{ mes: 'Octubre', dias: 31 }, { mes: 'Noviembre', dias: 30 }, { mes: 'Diciembre', dias: 31 }];
if(mes > 0 && mes < 13) {
	console.log(`La cantidad de dias del mes  de ${meses[mes - 1].mes} es ${meses[mes - 1].dias}`);
} else {
	console.log(`${mes} no es un mes valido`);
}