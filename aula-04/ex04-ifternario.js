let x = 13;
let resto = x%2;
let resposta = resto==0 ? par() : 'Ímpar';

function par() {
  return 'Par';
}

console.log(resposta);