// 2º Checkpoint de Programação Imperativa
// Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
  
function microondasGus(opcao, tempo){
  console.log("\nEste é o nosso menu:\n")
  console.log("1 - Pipoca: 10 segundos")
  console.log("2 - Macarrão: 8 segundos")
  console.log("3 - Carne: 15 segundos")
  console.log("4 - Feijão: 12 segundos")
  console.log("5 - Brigadeiro: 8 segundos\n")
 
switch(opcao){
  case 1: //Pipoca-10s
      if(tempo > 20){
          console.log("A comida queimou!!!")
      }else if(tempo < 10){
          console.log("Tempo insuficiente")
      }else if(tempo > 30){
          console.log("Kabuummmm!!!!!")
      }else{
          console.log("Prato pronto, bom apetite")
      }
      break;
  case 2: //Macarrao-8s
      if(tempo > 16){
          console.log("A comida queimou!!!")
      }else if(tempo < 8){
          console.log("Tempo insuficiente")
      }else if(tempo > 24){
          console.log("Kabuummmm!!!!!")
      }else{
          console.log("Prato pronto, bom apetite")
      }
      break;
  case 3: //Carne-15s
      if(tempo > 30){
          console.log("A comida queimou!!!")
      }else if(tempo < 15){
          console.log("Tempo insuficiente")
      }else if(tempo > 45){
          console.log("Kabuummmm!!!!!")
      }else{
          console.log("Prato pronto, bom apetite")
      }
      break;
  case 4: //Feijao-12s
      if(tempo > 24){
          console.log("A comida queimou!!!")
      }else if(tempo < 12){
          console.log("Tempo insuficiente")
      }else if(tempo > 36){
          console.log("Kabuummmm!!!!!")
      }else{
          console.log("Prato pronto, bom apetite")
      }
      break;
  case 5: //Brigadeiro-8s
      if(tempo > 16){
          console.log("A comida queimou!!!")
      }else if(tempo < 8){
          console.log("Tempo insuficiente")
      }else if(tempo > 24){
          console.log("Kabuummmm!!!!!")
      }else{
          console.log("Prato pronto, bom apetite")
      }
      break;
  default: //Nenhuma das opções
      console.log("Opção inválida!!!")
      break;
}
}

// teste pipoca 15s
microondasGus(1, 15)