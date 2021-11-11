function pipoca(tempo) {
  if (tempo >= 20 && tempo <= 29) {
    console.log('Comida queimou!')
    console.log('Prato pronto, bom apetite!!!')
  } else if (tempo <= 9) {
    console.log('Tempo insuficiente!')
    console.log('Prato pronto, bom apetite!!!')
  } else if (tempo >= 30) {
    console.log('kabumm')
    console.log('Prato pronto, bom apetite!!!')
  } else {
    console.log('Piiii Piiii')
    console.log('Prato pronto, bom apetite!!!')
  }
}

function macarrao(tempo) {
  if (tempo >= 16 && tempo <= 23) {
    console.log('Comida queimou!')
    console.log('Prato pronto, bom apetite!!!')
  } else if (tempo <= 7) {
    console.log('Tempo insuficiente!')
    console.log('Prato pronto, bom apetite!!!')
  } else if (tempo >= 24) {
    console.log('kabumm')
    console.log('Prato pronto, bom apetite!!!')
  } else {
    console.log('Piiiii Piiiii')
    console.log('Prato pronto, bom apetite!!!')
  }
}

function carne(tempo) {
  if (tempo >= 30 && tempo <= 44) {
    console.log('Comida queimou!')
    console.log('Prato pronto, bom apetite!!!')
  } else if (tempo <= 14) {
    console.log('Tempo insuficiente!')
    console.log('Prato pronto, bom apetite!!!')
  } else if (tempo >= 45) {
    console.log('kabumm')
    console.log('Prato pronto, bom apetite!!!')
  } else {
    console.log('Piiiii Piiii!!!')
    console.log('Prato pronto, bom apetite!!!')
  }
}

function feijao(tempo) {
  if (tempo >= 24 && tempo <= 35) {
    console.log('Comida queimou!')
    console.log('Prato pronto, bom apetite!!!')
  } else if (tempo <= 11) {
    console.log('Tempo insuficiente!')
    console.log('Prato pronto, bom apetite!!!')
  } else if (tempo >= 36) {
    console.log('kabumm')
    console.log('Prato pronto, bom apetite!!!')
  } else {
    console.log('Piiii Piiii!!!')
    console.log('Prato pronto, bom apetite!!!')
  }
}

function brigadeiro(tempo) {
  if (tempo >= 16 && tempo <= 23) {
    console.log('Comida queimou!')
    console.log('Prato pronto, bom apetite!!!')
  } else if (tempo <= 7) {
    console.log('Tempo insuficiente!')
    console.log('Prato pronto, bom apetite!!!')
  } else if (tempo >= 24) {
    console.log('kabumm')
    console.log('Prato pronto, bom apetite!!!')
  } else {
    console.log('Piiiii Piiii!!!')
    console.log('Prato pronto, bom apetite!!!')
  }
}

function microondas(opcao, tempo) {


  switch (opcao) {
    case pipoca:
      console.log(pipoca(tempo))
      break
    case macarrao:
      console.log(macarrao(tempo))
      break
    case carne:
      console.log(carne(tempo))
      break
    case feijao:
      console.log(feijao(tempo))
      break
    case brigadeiro:
      console.log(brigadeiro(tempo))
      break
      default:
        console.log("Prato inexistente")
  }
}

microondas(pipoca, 40)