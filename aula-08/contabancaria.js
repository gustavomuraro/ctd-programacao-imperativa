/*
Defina um novo objeto ‘conta’ que contenha as seguintes propriedades:
Número de conta
Saldo
Nome do Titular

Crie um método chamado ‘depósito’ que tem a quantidade de dinheiro como parâmetro de entrada. Ao fazer um depósito, a quantia em dinheiro deve ser adicionada ao saldo existente. O método também deve imprimir na tela o tipo de transação realizada e o novo saldo.

Crie um novo método chamado saque, como o método de depósito, deve consistir em um parâmetro numérico que será a quantia de dinheiro que queremos sacar. Esta quantia será subtraída do saldo existente. Caso o valor do saque seja superior ao saldo disponível, deve-se imprimir na tela a mensagem “Fundos Insuficientes”, caso contrário deve-se imprimir o tipo de transação realizada e o novo saldo.

Crie uma função construtora de nosso objeto de conta.

Instancie os objetos com diferentes valores iniciais e teste os métodos.
*/

//construtor = molde
function Conta(conta, saldo, nome) {
  
  //propriedades
  this.conta=conta;
  this.saldo=saldo;
  this.nome=nome;

  //métodos
  this.deposito=function(valorDeposito){
    //calcular o novo saldo
    this.saldo=this.saldo+valorDeposito;
    //imprimir na tela
    console.log(this.nome,', foi efetuado um DEPÓSITO e o seu novo saldo é: ',this.saldo);
  }
  this.saque=function(valorSaque){
    //verificar se há dinheiro suficiente
    if (valorSaque<=this.saldo) {
       //realizar o saque
      this.saldo=this.saldo-valorSaque;
      console.log(this.nome,', foi efetuado um SAQUE e o seu novo saldo é: ',this.saldo);
    } else {
      //avisar que não foi possível sacar
      console.log(this.nome,', não foi possível sacar, saldo insuficiente. Você pode sacar até ',this.saldo)
    }
  }
}

// instanciar = criar cópias do objeto na memória
let contaChris= new Conta('111',5000,'Chris');

// testes
console.log(contaChris.saldo);
contaChris.deposito(7000);
contaChris.saque(15000);

//nova conta
let contaMurilo= new Conta('123', 7800, 'Murilo');
contaMurilo.saque(1000);