/*
JSON - JavaScript Object Notation

padrão web, aceito por várias linguagens

formato: json  {"campo" : "valor"}
objetos literais: {campo: "valor"}

json não pode ter comentários

json suporta: string, num(int,flut), arrays, objetos, booleanos

*/

let dadosJson='{"funcionario" : "Cristina","idade": 20, "salario" : 5850.90, "vale-transporte" : true, "filiacao" : ["Walter","Ilda"]}';

let dadosObjeto = {funcionario : "Cristina",idade: 20, salario : 5850.90, valetransporte : true, filiacao : ["Walter","Ilda"]};

console.log(dadosJson);
console.table(dadosObjeto);

let dadosConvertidos = JSON.parse(dadosJson);
