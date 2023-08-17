//import { calculate } from './calculator.js';

// TODO: Faire la manipulation du DOM dans ce fichier

// SELECTION DES ELEMENTS 
const doc = document;
const bottomInput = document.getElementById('input');
const upperLabel = document.getElementById('calcul');

const digits = document.getElementsByClassName('digit');
const operators = document.querySelectorAll('#minus, #times, #divideby, #plus');
const clearButton = document.getElementById('clear');
const resetButton = document.getElementById('reset');
const dotButton = document.querySelector(".dot");
const changeSignButton = document.getElementById('plusoumoins');
const equalsButton = document.getElementById('equals');
const percentageButton = document.getElementById('percentage')
upperLabel.style.maxWidth = "400px";
upperLabel.style.margin = "auto";

let operationInput ="";
// Changement de type des boutons d'opération et sur le bouton d'égalité
let newOperators = [];
for (let i = 0; i < operators.length; i++) {
    const element = operators[i];
    element.type = "button";
    newOperators.push(element);
}
equalsButton.type = 'button';
//console.log(newOperators[0].type);
percentageButton.type = 'button';

// Sélection des codes clavier des touches du pavé numérique uniquement
let numpadDigits = [];
for (let index = 0; index < 9; index++) {
    numpadDigits.push(index);
    
}

// FONCTIONS D'EVENEMENTS
function addDigit() {
    if (bottomInput.value.length < 10) {
        bottomInput.value += this.innerText;    
    }else{
        bottomInput.value   
    }
    
}

function addToLabel() {
    let newValue = Array.from(bottomInput.value);
    if (bottomInput.value.includes('.') && newValue.at(0) ==='.') {
        newValue.unshift('0');
        upperLabel.innerText +=  ' ' + newValue.join('') + ' ' + this.innerText;
        bottomInput.value = "";
    }else{
        upperLabel.innerText += ' ' + bottomInput.value + ' ' + this.innerText;
        bottomInput.value = "";
    }
}

function makeCalculation(){
    if (bottomInput.value === "") {
        if (upperLabel.innerText.includes('×')) {
            operationInput = upperLabel.innerText.split('×');
            operationInput = operationInput.join('*');
            if (operationInput.at(-1) === '*') {
                operationInput = operationInput.substring(0, operationInput.length -1)
                bottomInput.value = eval(operationInput);
            }else{
                eval(operationInput);
            }
        }else if (upperLabel.innerText.includes('÷')){
            operationInput = upperLabel.innerText.split('÷');
            operationInput = operationInput.join('/');
            if (operationInput.at(-1) === '/') {
                operationInput = operationInput.substring(0, operationInput.length -1)
                bottomInput.value = eval(operationInput);
            }else{
                bottomInput.value = eval(operationInput);
            }
        }else if (upperLabel.innerText.includes('+') || upperLabel.innerText.includes('-')){
            operationInput = upperLabel.innerText;
            if (operationInput.at(-1) === "+" || operationInput.at(-1) === "-") {
                operationInput = operationInput.substring(0, operationInput.length -1);
            }
            bottomInput.value = eval(operationInput);
        } 
    }else{
        upperLabel.innerText += ' ' + bottomInput.value;
        if (upperLabel.innerText.includes('×')) {
            operationInput = upperLabel.innerText.split('×');
            operationInput = operationInput.join('*');
            bottomInput.value = eval(operationInput);
            upperLabel.innerText +=  ' =';
        }else if (upperLabel.innerText.includes('÷')){
            operationInput = upperLabel.innerText.split('÷');
            operationInput = operationInput.join('/');
            bottomInput.value = eval(operationInput);
            upperLabel.innerText +=  ' =';
        }else if (upperLabel.innerText.includes('+') || upperLabel.innerText.includes('-')){
            operationInput = upperLabel.innerText;
            bottomInput.value = eval(operationInput);
            upperLabel.innerText += ' =' 
        }
    }
}

function addDot() {
    if (bottomInput.value==="") {
        bottomInput.value += this.innerText;
    }else if (bottomInput.value.includes('.')){
        bottomInput.value;
    }else{
        bottomInput.value += '.';
    }
}

function clickZero() {
    if (bottomInput.value === "") {
        bottomInput.value = "0";
    }else if (bottomInput.value ==="0"){
        bottomInput.value;

    }else{
        if (bottomInput.value.length < 10) {
            bottomInput.value += this.innerText;    
        }
        
    }
}


function changeSign() {
    let valeur = Array.from(bottomInput.value);
    /*if (valeur.at(0) !== "-") {
        valeur.unshift("-");
        //valeur.join(',');
        bottomInput.value = (valeur.join(''));
    }*/
    if (!bottomInput.value) {
        bottomInput.value;
    }else if (bottomInput.value && valeur.at(0)!=="-"){
        valeur.unshift("-");
        bottomInput.value =(valeur.join(""));
    }else if (bottomInput.value && valeur.at(0)==="-"){
        valeur.shift();
        bottomInput.value=(valeur.join("")) ;
    }else{
        bottomInput.value;
    }
}

function returnPercentage() {
    
}

function reset() {
    upperLabel.innerText = "";
    bottomInput.value = "";
}

function clearInput() {
    bottomInput.value = "";
}


function showResults(){

}



// AJOUT DES EVENEMENTS
//sur le document
doc;
// sur les boutons des nombres
for (let index = 0; index < digits.length; index++) {
    const element = digits[index];
    if (element.innerText === "0") {
        element.addEventListener('click', clickZero);
    }else{
        element.addEventListener('click', addDigit)
    }
    
}
//sur les opérateurs
for (let i = 0; i < operators.length; i++) {
    const element = operators[i];
    element.addEventListener('click', addToLabel);
    
}

// sur le bouton d'effacement
clearButton.addEventListener('click',clearInput);
// sur le bouton de réinitialisation
resetButton.addEventListener('click', reset); 
// sur le bouton de changement de signe
changeSignButton.addEventListener('click', changeSign);
// sur le bouton point
dotButton.addEventListener('click', addDot);
//sur le bouton d'égalité
equalsButton.addEventListener('click', makeCalculation);
//percentageButton.addEventListener()
