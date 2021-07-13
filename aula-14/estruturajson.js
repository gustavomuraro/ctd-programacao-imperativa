/*
1. Crie um objeto, contendo int, string, object e array em seu conteúdo. Após isso transforme o array em JSON. Exiba o valor do JSON, copie e valide no site JSON Formatter & Validator

2. Pegue o JSON validado na etapa anterior, e o atribua a uma string. Após isso o transforme em um objeto e acesse alguns de seus valores e os exiba.
*/

const fs=require('fs');

let meuObjeto = {
  nome: "Gustavo",
  idade: 25,
  hobbies: ['xadrez', 'fotografia'],
  namorada: livia={nome: 'Lívia Letro', idade: 23},
}

let objetoConvertidoJson=JSON.stringify(meuObjeto);

fs.writeFileSync('objetoteste.json',objetoConvertidoJson);
