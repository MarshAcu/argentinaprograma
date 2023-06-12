let frutas = [];
frutas.push('Naranja');
frutas.push('Banana');
frutas.push('Manzana');
frutas.push('Pera');
frutas.push('Sandia');

let ultima = [ ...frutas].pop();

console.log(`La ultima fruta agregada fue: [${ultima}]`);

let primera = [ ...frutas].shift();

console.log(`La primera fruta agregada fue: [${primera}]`);