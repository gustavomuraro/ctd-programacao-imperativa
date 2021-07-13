const fs=require('fs');

// let texto1='abcde';
// fs.writeFileSync('textao.txt',texto1);

// let texto2='12345';
// fs.appendFileSync('textao.txt',texto2);

// let textao=fs.readFileSync('textao.txt', 'utf-8');

// console.log(textao);

//leitura dados.json
let dadosJson=fs.readFileSync('dadosjuntos.json','utf-8');
// console.log(dadosJson);

//convertendo dadosjuntos.json para dadostexto
let dadosTexto = JSON.parse(dadosJson);
console.log(dadosTexto[1].funcionario.toUpperCase())
