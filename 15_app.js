//First number


//operator
let operator = document.querySelector('#operator');

//secondNumber


//equals-button
let equals = document.querySelector('#equals-button');

//result-button
let result = document.querySelector('#result-button');

//plus-button
let plus = document.querySelector('#plus-button');
plus.addEventListener('click', function () {
    operator.textContent = plus.textContent;
    let firstNumber = document.querySelector('#firstNumber').value;
    let secondNumber = document.querySelector('#secondNumber').value;
    result.textContent = Number(firstNumber) + Number(secondNumber);
});

//minus-button
let minus = document.querySelector('#minus-button');
minus.addEventListener('click', function () {
    operator.textContent = minus.textContent;
    let firstNumber = document.querySelector('#firstNumber').value;
    let secondNumber = document.querySelector('#secondNumber').value;
    result.textContent = Number(firstNumber) - Number(secondNumber);
});

//divide-button
let divide = document.querySelector('#divide-button');
divide.addEventListener('click', function () {
    operator.textContent = divide.textContent;
    let firstNumber = document.querySelector('#firstNumber').value;
    let secondNumber = document.querySelector('#secondNumber').value;
    result.textContent = Number(firstNumber) / Number(secondNumber);
});

//multiply-button
let multiply = document.querySelector('#multiply-button');
multiply.addEventListener('click', function () {
    operator.textContent = multiply.textContent;
    let firstNumber = document.querySelector('#firstNumber').value;
    let secondNumber = document.querySelector('#secondNumber').value;
    result.textContent = Number(firstNumber) * Number(secondNumber);
});

//clear-button
let clear = document.querySelector('#clear-button');
clear.addEventListener('click', function () {
    let firstNumber = document.querySelector('#firstNumber').value="";
    let secondNumber = document.querySelector('#secondNumber').value="";
    result.textContent = 0;
});