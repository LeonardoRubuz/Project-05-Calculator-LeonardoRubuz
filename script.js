//import { calculate } from './calculator.js';

// TODO: Faire la manipulation du DOM dans ce fichier

// SELECTION DES ELEMENTS 
const bottomInput = document.getElementById('input');
const upperLabel = document.getElementById('calcul');

const digits = document.getElementsByClassName('digit');
const operators = document.querySelectorAll('#minus, #times, #divideby, #plus');
const clearButton = document.getElementById('clear');
const resetButton = document.getElementById('reset');
const dotButton = document.getElementsByClassName('numpad dot');
const changeSignButton = document.getElementById('plusoumoins');
const equalsButton = document.getElementById('equals');
upperLabel.style.maxWidth = "400px";
upperLabel.style.margin = "auto";
console.log(operators);
// La variable qui contiendra le resultat du calcul
let result;

// Changement de type des boutons d'opération et sur le bouton d'égalité
let newOperators = [];
for (let i = 0; i < operators.length; i++) {
    const element = operators[i];
    element.type = "button";
    newOperators.push(element);
}
equalsButton.type = 'button';
//console.log(newOperators[0].type);

// Sélection des codes clavier des touches du pavé numérique uniquement
let numpadDigits = [];
for (let index = 96; index < 123; index++) {
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
    upperLabel.innerText += ' ' + bottomInput.value + ' ' + this.innerText;
    bottomInput.value = "";
    bottomInput.name = "";
}


function clickZero() {
    if (bottomInput.value === "") {
        bottomInput.value = "";
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

function makeCalculation(){
    let inputValue = parseFloat(bottomInput.value)
    for (let index = 0; index < operators.length; index++) {
        const element = operators[index].id;
        switch (element) {
            case 'plus':
                result += inputValue;
                break;
            case 'minus':
                result -= inputValue;
                break;
            case 'divideby':
                result /= inputValue;
                break;
            case 'times':
                result *= inputValue;
                break;
            default:
                break;
        }
    }
}

function showResults(){

}

// AJOUT DES EVENEMENTS
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
    element.addEventListener('click', makeCalculation)
    
}

// sur le bouton d'effacement
clearButton.addEventListener('click',clearInput);
// sur le bouton de réinitialisation
resetButton.addEventListener('click', reset); 
// sur le bouton de changement de signe
changeSignButton.addEventListener('click', changeSign);
// sur le bouton point

//sur le bouton d'égalité
equalsButton.addEventListener('click', showResults );

