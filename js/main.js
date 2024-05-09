'use strict';

const screen = document.getElementById('result');
let numberOnScreen = '';
let firstNumber = '';
let secondNumber = '';
let selectedOperator = '';
let total = 0;
const digits = document.querySelectorAll('.digit');
const numDigits = digits.length;
const operator = document.querySelectorAll('.operator');
const numOperator = operator.length;
const equal = document.getElementById('equal');


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
function operators() {
    keypad();
    for (let i = 0; i < numOperator; i++) {
        operator[i].addEventListener('click', function () {
            selectedOperator = operator[i].value;
            firstNumber = numberOnScreen;
            screen.innerHTML = '';
            numberOnScreen = '';
        })
    }
}



function calculator() {
    operators();
    equal.addEventListener('click', function () {
        secondNumber = numberOnScreen;
        screen.innerHTML = '';
        numberOnScreen = '';
        total = eval(Number(firstNumber) + selectedOperator + Number(secondNumber));
        screen.innerHTML = total;
        console.log(firstNumber + selectedOperator + secondNumber + '=' + total);

    })
}

calculator();