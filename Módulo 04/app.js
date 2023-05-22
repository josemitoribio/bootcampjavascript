// Operandos
var numberA = () => parseInt(document.getElementById("input-number1").value);
var numberB = () => parseInt(document.getElementById("input-number2").value);

// Operaciones posibles
var addition = () => numberA() + numberB();
var subtraction = () => numberA() - numberB();
var multiplication = () => numberA() * numberB();
var division = () => numberA() / numberB();


//Pintando las operaciones
var resultSum = () => document.getElementById("result").innerText = "El resultado es " + addition();
var resultSub = () => document.getElementById("result").innerText = "El resultado es " + subtraction();
var resultMul = () => document.getElementById("result").innerText = "El resultado es " + multiplication();
var resultDiv = () => document.getElementById("result").innerText = "El resultado es " + division();

//ERROR

var error = () => (isNaN(numberA()) || isNaN(numberB()));

var errorSum = () => error() ? document.getElementById("result").innerText = "Error, debes incluir dos números" : resultSum();
var errorSub = () => error() ? document.getElementById("result").innerText = "Error, debes incluir dos números" : resultSub();
var errorMul = () => error() ? document.getElementById("result").innerText = "Error, debes incluir dos números" : resultMul();
var errorDiv = () => error() ? document.getElementById("result").innerText = "Error, debes incluir dos números" : resultDiv();

//Eventos Error 

document.getElementById("button-addition").addEventListener("click", errorSum);
document.getElementById("button-subtraction").addEventListener("click", errorSub);
document.getElementById("button-multiplication").addEventListener("click", errorMul);
document.getElementById("button-division").addEventListener("click", errorDiv);
