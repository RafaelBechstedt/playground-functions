// Desafio 1
function compareTrue(gato, cachorro) {
  // seu código aqui
  if (gato === true && cachorro === true){
    return true
  }
  else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area
}

// Desafio 3
function splitSentence(text) {
  // seu código aqui
  return (text.split(" "))
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return array[array.length - 1] + ", " + array[0]
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
