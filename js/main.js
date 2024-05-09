'use strict';

const result = document.getElementById('result');
let firstNumber = '';
let secondNumber = '';
const selectedOperator = '';
const digits = document.querySelectorAll('.digit');
const numDigits = digits.length;

// seleziono tutti i bottoni che contengono numeri e faccio fare qualcosa al click
for (let i = 0; i < numDigits; i++) {
    digits[i].addEventListener('click', function () {
        firstNumber += digits[i].innerHTML;
        result.innerHTML = firstNumber;
    })
}
