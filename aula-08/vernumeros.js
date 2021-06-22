// Crie um array numerosPrimos e atribua alguns valores a ele que correspondam ao seu nome. Além disso, crie outro array, desta vez chamado numeros, que deve conter os valores do array numerosPrimos adicionados através do spread, juntos com outros números.

// Crie uma função maiorNumero() que receba N parâmetros, e retorne o menor número entre eles, utilizando a função Math.min(). Uma observação importante é que a função Math.min() NÃO deve receber um array como parâmetro, sendo portanto, necessário expandir os valores.

let numerosPrimos = [2, 3, 5, 7, 11, 13, 17, 19, 23];

let numeros = [...numerosPrimos, 1, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22];

function menorNumero() {
  return Math.min(...numeros);
}

console.log(menorNumero());