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
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
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
