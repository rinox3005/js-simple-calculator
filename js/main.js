'use strict';
// prendo l'elemento con id result
const screen = document.getElementById('result');

//dichiaro le variabili
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
const reset = document.getElementById('reset');


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

// calcolo il risultato dell'operazione
function calcResult() {
    operators();
    equal.addEventListener('click', function () {
        secondNumber = numberOnScreen;
        switch (selectedOperator) {
            case '+':
                total = Number(firstNumber) + Number(secondNumber);
                screen.innerHTML = '';
                numberOnScreen = '';
                screen.innerHTML = total;
                console.log(firstNumber + '+' + secondNumber + '=' + total);
                break;
            case '-':
                total = Number(firstNumber) - Number(secondNumber);
                screen.innerHTML = '';
                numberOnScreen = '';
                screen.innerHTML = total;
                console.log(firstNumber + '-' + secondNumber + '=' + total);
                break;
            case '*':
                total = Number(firstNumber) * Number(secondNumber);
                screen.innerHTML = '';
                numberOnScreen = '';
                screen.innerHTML = total;
                console.log(firstNumber + '*' + secondNumber + '=' + total);
                break;
            case '/':
                if (secondNumber === '0') {
                    screen.innerHTML = 'Error';
                    firstNumber = '';
                    secondNumber = '';
                    numberOnScreen = '';
                    total = 0;
                } else {
                    total = Number(firstNumber) / Number(secondNumber);
                    screen.innerHTML = '';
                    numberOnScreen = '';
                    screen.innerHTML = total;
                    console.log(firstNumber + '/' + secondNumber + '=' + total);
                }
                break;
        }

        // if (selectedOperator === '/' && secondNumber === '0') {
        //     screen.innerHTML = 'Error';
        //     firstNumber = '';
        //     secondNumber = '';
        //     numberOnScreen = '';
        //     total = 0;
        // } else {
        //     screen.innerHTML = '';
        //     numberOnScreen = '';
        //     screen.innerHTML = total;
        //     console.log(firstNumber + selectedOperator + secondNumber + '=' + total);
        // }
    })
}

// resetto i valori a quelli di partenza
function resetButton() {
    reset.addEventListener('click', function () {
        firstNumber = '';
        secondNumber = '';
        screen.innerHTML = '0';
        numberOnScreen = '';
        total = 0;
    })
}

// richiamo tutte le funzioni che mi servono in un unica funzione calculator
function calculator() {
    calcResult();
    resetButton();

}

//invoco la funzione calculator
calculator();