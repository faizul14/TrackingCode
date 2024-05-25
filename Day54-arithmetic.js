// FMP Track Coding Chalenge 2024
// Day 54/366
// https://www.codewars.com/kata/583f158ea20cfcbeb400000a/

// function arithmetic(a, b, operator) {
//     //your code here!


//     switch (operator) {
//         case 'add':
//             return a + b
//         case 'subtract':
//             return a - b
//         case 'multiply':
//             return a * b
//         default:
//             return a / b
//     }
// }

const arithmetic = (a, b, operator) => {
    const operatorObj = {
        add: '+',
        subtract: '-',
        multiply: '*',
        divide: '/',
    }
    return eval(a + operatorObj[operator] + b)
}

// perlu di riset
// function arithmetic(a, b, operator) {
//     optable = { "add": "+", "subtract": "-", "multiply": "*", "divide": "/" };
//     return eval(a + optable[operator] + b);
// }

console.log(
    arithmetic(
        1, 2, "add"
    )
);
