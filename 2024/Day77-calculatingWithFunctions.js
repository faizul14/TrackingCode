// FMP Track Coding Chalenge 2024
// Day 77/366
// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/

const operationsValue = (operations = 'nova', originalValue) => {
    return /nova/.test(operations) ? originalValue : Math.ceil(eval(originalValue.concat(operations)))
}

const zero = (operations = 'nova') => operationsValue(operations, '0')
const one = (operations = 'nova') => operationsValue(operations, '1')
const two = (operations = 'nova') => operationsValue(operations, '2')
const three = (operations = 'nova') => operationsValue(operations, '3')
const four = (operations = 'nova') => operationsValue(operations, '4')
const five = (operations = 'nova') => operationsValue(operations, '5')
const six = (operations = 'nova') => operationsValue(operations, '6')
const seven = (operations = 'nova') => operationsValue(operations, '7')
const eight = (operations = 'nova') => operationsValue(operations, '8')
const nine = (operations = 'nova') => operationsValue(operations, '9')

function plus(value) { return '+'.concat(value) }
function minus(value) { return '-'.concat(value) }
function times(value) { return '*'.concat(value) }
function dividedBy(value) { return '/'.concat(value) }

console.log(
    seven(times(five()))
    // three(dividedBy(six))
);

