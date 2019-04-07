"use strict"


const digitA = 100
const digitB = 200.5

const resultAddition = digitA + digitB
const resultSubstraction = digitA - digitB
const resultMultiplication = digitA * digitB
const resultDivison = digitA / digitB

console.log(digitA)
console.log(digitB)

console.log(resultAddition)
console.log(resultSubstraction)
console.log(resultMultiplication)
console.log(resultDivison)

// Feel free to have some experiments with variety of operators

//tes with function and const
function divide(num1, num2) {
  return num1 / num2
}

function add(num1, num2) {
  return num1 + num2
}

const num1 = 30;
const num2 = 100;

let resultDivide = divide(num1, num2)
let resultAdd = add(num1, num2)
console.log(resultDivide);
console.log(resultAdd);