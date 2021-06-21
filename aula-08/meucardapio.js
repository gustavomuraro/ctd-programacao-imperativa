//Crie uma função construtora chamada Restaurante, que receba como parâmetros o nome do restaurante e o cardápio (que será um array de strings).
// Após isso chame a função entrada() dentro do objeto, que irá trazer uma mensagem de boas-vindas, informando o nome do restaurante, e o cardápio.

function Restaurante(nomeRestaurante, cardapio) {
  this.nomeRestaurante = nomeRestaurante;
  this.cardapio = cardapio;
};

let meuRestaurante = {
  nomeRestaurante: 'Pizza Planet',
  cardapio: [' marguerita', ' portuguesa', ' pepperoni', ' napolitana'],
  boasvindas: function () {
    return 'Seja bem-vindo ao ' + this.nomeRestaurante + ', aqui está o nosso cardápio de hoje: ' + this.cardapio;
  }
}

console.log(meuRestaurante.boasvindas())