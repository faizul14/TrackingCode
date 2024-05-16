// FMP Track Coding Chalenge 2024
// Day 49/366
// https://www.codewars.com/kata/542c0f198e077084c0000c2e/

function getDivisorsCnt(n) {
    let countIsResult = 0;
    let sqrtN = Math.sqrt(n);

    for (let i = 1; i <= sqrtN; i++) {
        if (n % i === 0) {
            console.log(i);
            
            countIsResult += 1; // i is a divisor
            if (i !== n / i) {
                console.log(i);
                countIsResult += 1; // n / i is a different divisor
            }
        }
    }

    return countIsResult;
}
// console.log(
//     getDivisorsCnt(11)
// );
const start = new Date()
console.log(
    getDivisorsCnt(
        30
        // 6469693230
        // 1_000_000_000
    )
);
const end = new Date()
console.log(`time execution ${end - start} ms`);

