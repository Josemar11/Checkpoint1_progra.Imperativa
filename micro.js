// O microondas possui 5 botões, eles estão descritos abaixo conforme o tipo de prato que será preparado
let botao10 = 10 // Pipoca
let botao8 = 8 // Macarrao e Brigadeiro
let botao15 = 15 // Carne
let botao12 = 12 //Feijao
let botao5 = 5 // Comida não definida, Prato inexistente


function microondasS(tempo, botaoN){
  if(botaoN == botao5){
    console.log("Prato inexistente")
  } else if(tempo >= botaoN*2 && tempo < botaoN*3){
    console.log("Queimou a comida")
    console.log('Prato pronto, bom apetite!!!')
  } else if (tempo >= botaoN*3){
    console.log("Kabommmm")
    console.log('Prato pronto, bom apetite!!!')
  } else if (tempo < botaoN){
    console.log("Tempo insuficiente")
    console.log('Prato pronto, bom apetite!!!')
  } else if (tempo >= botaoN && tempo <= botaoN*2){
    console.log("Piiii Piiii")
    console.log('Prato pronto, bom apetite!!!')
  }
}
microondasS(1, botao5)