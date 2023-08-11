//{ calculate } = require('./calculator.js');

// TODO: Faire la manipulation du DOM dans ce fichier

// SELECTION DES ELEMENTS
const bottomInput = document.getElementById('input');
const upperLabel = document.getElementById('calcul');

const digits = document.getElementsByClassName('digit');
const operators = document.querySelectorAll('#minus, #times, #divideby, #plus');
const clearButton = document.getElementById('clear');
//console.log(operators);

// FONCTIONS D'EVENEMENTS
function addDigit() {
    bottomInput.value += this.innerText;
}

function addToLabel() {
    upperLabel.innerText += bottomInput.value +' '+ this.innerText + ' ';
    bottomInput.value = "";
    bottomInput.name = "";
}

function addDot() {
    
}

function clickZero() {
    
}

function changeSign() {
    
}

function returnPercentage() {
    
}

function reset() {
    
}

function clearInput() {
    bottomInput.value = "";
}

// AJOUT DES EVENEMENTS
// sur les bouttons des nombres
for (let index = 0; index < digits.length; index++) {
    const element = digits[index];
    element.addEventListener('click', addDigit)
}
//sur les opérateurs
for (let i = 0; i < operators.length; i++) {
    const element = operators[i];
    element.addEventListener('click', addToLabel)
    
}

// sur le boutton d'effacement
clearButton.addEventListener('click',clearInput);