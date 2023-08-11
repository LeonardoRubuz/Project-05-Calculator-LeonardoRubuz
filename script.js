//{ calculate } = require('./calculator.js');

// TODO: Faire la manipulation du DOM dans ce fichier

// Selection des éléments
const bottomInput = document.getElementById('input');
const upperLabel = document.getElementById('calcul');

const digits = document.getElementsByClassName('digit')
const operators = document.querySelectorAll('#minus, #times, #divideby, #plus');
//console.log(operators);

// Fonctions d'évènements
function addDigit() {
    bottomInput.value += this.innerText;
}

function addToLabel() {
    upperLabel.innerText += bottomInput.value + ' '+ this.innerText + '';
}

// Ajout des évènements
for (let index = 0; index < digits.length; index++) {
    const element = digits[index];
    element.addEventListener('click', addDigit)
}