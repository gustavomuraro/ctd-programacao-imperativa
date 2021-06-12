// 3. Desafio futebol.
let nomeJogador,
    golsJogador=0, 
    precoJogador=0;
function fazerGol() {
    golsJogador++;
    precoJogador+=10000;
    console.log('Goollll !!!!')
}
fazerGol();
fazerGol();
fazerGol();
fazerGol();
// 4. Fez 3 gols na msm partida.
function hatTrick() {
    fazerGol();
    fazerGol();
    fazerGol();
    
    precoJogador+=(precoJogador*10/100)
}
hatTrick();
console.log('Total de gols: ', golsJogador, '.');
console.log('Preço do jogador', precoJogador);