let dadosObjeto = {funcionario : "Cristina",idade: 20, salario : 5850.90, valetransporte : true, filiacao : ["Walter","Ilda"]};

let dadosObjeto1 = {funcionario : "João",idade: 29, salario : 15000, valetransporte : false, filiacao : ["José","Maria"]};

let dadosJuntos=[dadosObjeto,dadosObjeto1];

console.log(dadosJuntos)

// serializar, transformar um objeto em JSON
let objetoConvertidoJson=JSON.stringify(dadosJuntos);
console.log(objetoConvertidoJson);

//gravar o Json em um arquivo
//file system = fs

const fs=require('fs');

//síncrono
fs.writeFileSync('dadosjuntos.json',objetoConvertidoJson);
