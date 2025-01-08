// FMP Track Coding Chalenge 2024
// Day 34/366
// https://www.codewars.com/kata/544aed4c4a30184e960010f4/

// function divisors(integer) {
//     const arrayResult = []
//     for (let i = (integer - 1); i > 1; i--) {
//         const helper = (integer / i).toString()
//         if (!/[.]/g.test(helper)) {
//             arrayResult.push(i)
//         }
//     }
//     return arrayResult.length === 0 ? `${integer} is prime` : arrayResult.sort((a, b) => a - b)
// };

function divisors(integer) {
    const arrayResult = []
    for (let i = (integer - 1); i > 1; i--) {
        if (integer % i === 0) {
            arrayResult.push(i)
        }
    }
    return arrayResult.length === 0 ? `${integer} is prime` : arrayResult.sort((a, b) => a - b)
};

console.log(
    divisors(15), //[3, 5],
    divisors(12),
    divisors(13),
    divisors(253),
    divisors(24)
);





