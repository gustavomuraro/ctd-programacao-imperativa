// 3) Criar as variáveis nomeJogador, golsJogador e precoEmDolares. Incrementar a quantidade de gols em mais um, imprimir na tela “GOL!!!!!!!!!” e incrementar o valor do jogador em 10.000 dólares. Imprimir na tela a nova quantidade de gols e o preço do jogador no mercado.

let nomeJogador = 'Cristiano';
let golsJogador = 0;
let precoEmDolares = 0;

function fazerGol(){
  golsJogador ++;
  precoEmDolares+=10000;
  console.log('GOL!!!!!!!!!')
}
fazerGol();
fazerGol();

// 4) Criar a função hatTrick que em seu interior execute três vezes a função fazerGol e, em seguida, aumente o valor do jogador em 10% a mais

function hatTrick(){
  fazerGol();
  fazerGol();
  fazerGol();
  precoEmDolares+=(precoEmDolares*10/100)
}

hatTrick();

console.log('Gols: '+golsJogador);
console.log('Preço do jogador '+nomeJogador+' :'+precoEmDolares);
