//Transforme as seguintes funções em arrow functions:
// function print(mensagem){
//     console.log(mensagem)
// }
// print("Olá, bom dia")
// function soma(n1, n2){
//     return n1+n2    
// }
// console.log(soma(10, 10))

let print = mensagem => console.log(mensagem);
print("Olá, bom dia");

let somar = (n1, n2) => console.log(n1+n2);
somar(10, 10);