// Desafio 1
function compareTrue(gato, cachorro) {
  if (gato === true && cachorro === true) {
    return true
  }
  else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area
}

// Desafio 3
function splitSentence(text) {
  return (text.split(" "))
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ", " + array[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1
}

// Desafio 6
function highestCount(array) {
  let numeroMaior = array[0]
  let contagem = 0
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > numeroMaior) {
      numeroMaior = array[index];
      contagem = 0;
    }
    if (array[index] === numeroMaior)
      contagem += 1
  }
  return contagem
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2'
  }
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge'
  }
  else {
    return 'cat1'
  }
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let arrayString = []
  for (let index = 0; index < arrayNumbers.length; index += 1) {

    if (arrayNumbers[index] % 5 === 0 && arrayNumbers[index] % 3 === 0) {
      arrayString.push('fizzBuzz')
    }

    if (arrayNumbers[index] % 5 === 0 && arrayNumbers[index] % 3 != 0) {
      arrayString.push('buzz')
    }

    if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 != 0) {
      arrayString.push('fizz')
    }

    if (arrayNumbers[index] % 3 != 0 && arrayNumbers[index] % 5 != 0) {
      arrayString.push('bug!')
    }
  }
  return arrayString
}

// Desafio 9
function encode(frase) {
  let fraseCodificada = frase
    .replace(/a/g, 1)
    .replace(/e/g, 2)
    .replace(/i/g, 3)
    .replace(/o/g, 4)
    .replace(/u/g, 5)
  return fraseCodificada
}

function decode(frase) {
  let fraseDecodificada = frase
    .replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u')
  return fraseDecodificada
}

// Desafio 10
function techList(arrayTec, nomePessoa) {
  let arrayTecOrdenada = arrayTec.sort()
  let arrayDeObjetos = []
  if (arrayTec.length === 0) {
    return "Vazio!"
  }

  for (index = 0; index < arrayTecOrdenada.length; index += 1) {
    arrayDeObjetos.push ({tech: arrayTecOrdenada[index], name: nomePessoa})
  }
  return arrayDeObjetos
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
