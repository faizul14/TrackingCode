// FMP Track Coding Chalenge 2024
// Day 35/366
// https://www.codewars.com/kata/5262119038c0985a5b00029f/

function isPrime(num) {
    //TODO
    const length = num > 20 ? Math.sqrt(num - 1) + 1 : num
    let isNotPrime = false

    for (let i = 2; i < length; i++) {
        
        if (num % i === 0) {            
            isNotPrime = true
            break
        }
    }

    // return (num < 2) || isNotPrime ? `${num} is not prime` : `${num} is prime`
    return (num < 2) || isNotPrime ? false : true
}


// console.log(
//     isPrime(
//         0
//     )
// );

let start = Date.now();
console.log(
    isPrime(
        // 1924917199
        // 1573396063
        // 938625769
        // 50
        // 5099
        // 4
        // 22287841
        2
    ),
    isPrime(
        3
    )
);
let timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");
