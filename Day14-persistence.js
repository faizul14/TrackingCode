// FMP Track Coding Chalenge 2024
// Day 14/366 => this chalenge still not finish (maybe i am need a time for think)
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/

// const persistence = (num) => {
//     //code me
//     let resultCount = 0
//     if (num < 10) {
//         return resultCount
//     }
//     do {
//         const bantu = num.toString().split('')
//         for (let i = 0; i < bantu.length; i++) {
//             num = i === 0 ? bantu[0] : num * bantu[i]
//         }
//         resultCount++
//     } while (num >= 10);
//     return resultCount
// }

// insight baru dari dikusi
const persistence = num => {
    let times = 0;
    num = num.toString();
    while (num.length > 1) {
        times++;
        num = num.split('').map(a => parseInt(a)).reduce((acc, el) => acc * el).toString();
    }
    return times;
}

console.log(persistence(999));
