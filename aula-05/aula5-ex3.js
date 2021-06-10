let frutas=['banana', 'melão'];

//adicionar abacaxi e cereja
frutas.push('abacaxi', 'cereja');
console.log(frutas);

console.log(frutas[2]);

//removendo a cereja
console.log(frutas.pop());
console.log(frutas);

let frutaRemovida = frutas.pop();
console.log(frutas);
frutas.shift();