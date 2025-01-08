// FMP Track Coding Chalenge 2024
// Day 138/366
// https://www.codewars.com/kata/525f039017c7cd0e1a000a26/

// const checkIsPC = (n) => {
//     const sumN = n * 2
//     const isPC = sumN === Number(`${sumN}`.split('').reverse().join(''))
//     return [isPC, sumN]
// }

// var palindromeChainLength = function (n) {
//     const isPCdeafault = n === Number(`${n}`.split('').reverse().join(''))
//     if (isPCdeafault) return 0;

//     let step = 1

//     while (true) {
//         const check = checkIsPC(n)
//         if (check[0]) {
//             step++
//             break
//         }
//         n = check[1]
//         step++
//         // break
//     }

//     return step

// };

// This solution after optimization
var palindromeChainLength = function (n) {
    const isPalindrome = (num) => {
        const str = num.toString();
        return str === str.split('').reverse().join('');
    };

    let step = 0;

    while (!isPalindrome(n)) {
        const reversed = parseInt(n.toString().split('').reverse().join(''), 10);
        n += reversed;
        step++;
    }

    return step;
};

console.log(
    palindromeChainLength(87)
);


// console.log(
//     Number(`88`.split('').reverse().join(''))
// );

