// FMP Track Coding Chalenge 2024
// Day 77/366
// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/

const operationsValue = (operations = 'noValue', originalValue) => {
    return /noValue/.test(operations) ? originalValue : Math.ceil(eval(originalValue.concat(operations)))
}

function zero(operations = 'noValue') { return operationsValue(operations, '0') }
function one(operations = 'noValue') { return operationsValue(operations, '1') }
function two(operations = 'noValue') { return operationsValue(operations, '2') }
function three(operations = 'noValue') { return operationsValue(operations, '3') }
function four(operations = 'noValue') { return operationsValue(operations, '4') }
function five(operations = 'noValue') { return operationsValue(operations, '5') }
function six(operations = 'noValue') { return operationsValue(operations, '6') }
function seven(operations = 'noValue') { return operationsValue(operations, '7') }
function eight(operations = 'noValue') { return operationsValue(operations, '8') }
function nine(operations = 'noValue') { return operationsValue(operations, '9') }

function plus(value) { return '+'.concat(value) }
function minus(value) { return '-'.concat(value) }
function times(value) { return '*'.concat(value) }
function dividedBy(value) { return '/'.concat(value) }

console.log(
    // seven(times(five()))
    three(dividedBy(six))
);

