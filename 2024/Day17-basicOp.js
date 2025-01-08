// FMP Track Coding Chalenge 2024
// Day 17/366
// https://www.codewars.com/kata/57356c55867b9b7a60000bd7/

// function basicOp(operation, value1, value2) {
//     //Code
//     let result = `${value1} ${operation} ${value2}`    
//     return eval(result);
// }

const basicOp = (operation, value1, value2) => eval(`${value1} ${operation} ${value2}`)


console.log(basicOp("+", 4, 7)); //11
