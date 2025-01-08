// FMP Track Coding Chalenge 2024
// Day 70/366
// https://www.codewars.com/kata/57a049e253ba33ac5e000212/

// function factorial(n) {
//     //your code here
//     if(n === 0){
//         return 1
//     }
//     let result = n
//     n = n - 1
//     while(n > 0){
//         result *= n
//         n--
//     }
//     return result
// }

function factorial(n) {
    //your code here
    if (n === 0) return 1
    let factorialValue = n * factorial(n - 1)
    return factorialValue
}

// get insight from discusion, this solution with recursive
// const factorial = n => n ? n * factorial(n - 1) : 1

console.log(
    factorial(4)
);
