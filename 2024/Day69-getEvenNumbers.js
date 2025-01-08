// FMP Track Coding Chalenge 2024
// Day 69/366
// https://www.codewars.com/kata/514a6336889283a3d2000001/

// function getEvenNumbers(numbersArray) {
//     // filter out the odd numbers
//     const result = []
//     for (let i = 0; i < numbersArray.length; i++) {
//         if(numbersArray[i] % 2 === 0){
//             result.push(numbersArray[i])
//         }
//     }
//     return result
// }

const getEvenNumbers = numberArrays => numberArrays.filter(el => el % 2 === 0)

console.log(
    getEvenNumbers(
        [1, 2, 3, 6, 8, 10]
    )
);
