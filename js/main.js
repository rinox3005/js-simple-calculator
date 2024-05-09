'use strict';

const screen = document.getElementById('result');
let numberOnScreen = '';
let firstNumber = '';
let secondNumber = '';
let selectedOperator = '';
const digits = document.querySelectorAll('.digit');
const numDigits = digits.length;
const operator = document.querySelectorAll('.operator');
const numOperator = operator.length;

// seleziono tutti i bottoni che contengono numeri e faccio fare qualcosa al click
function keypad() {
    for (let i = 0; i < numDigits; i++) {
        digits[i].addEventListener('click', function () {
            numberOnScreen += digits[i].innerHTML;
            screen.innerHTML = numberOnScreen;
        })
    }
}

// seleziono tutti gli operatori e salvo il valore di quello cliccato in una variabile selectedOperator
for (let i = 0; i < numOperator; i++) {
    operator[i].addEventListener('click', function () {
        keypad();
        selectedOperator = operator[i].value;
        firstNumber = numberOnScreen;
        console.log(selectedOperator);
        console.log(firstNumber);

    })
}

keypad();
