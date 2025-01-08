// FMP Track Coding Chalenge 2024
// Day 12/366
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

// function findOutlier(integers) {
//     //your code here
//     let result = 0
//     let ganjil = 0
//     let genap = 0


//     for (let i = 0; i < integers.length; i++) {
//         if ((genap > 1 && ganjil !== 0) || (ganjil > 1 && genap !== 0)) {
//             break;
//         }
//         if (Math.abs(integers[i]) % 2 === 0) {
//             genap++;
//             continue;
//         }
//         ganjil++;
//     }

//     for (let i = 0; i < integers.length; i++) {
//         if (genap === 1) {
//             if (Math.abs(integers[i]) % 2 === 0) {
//                 result = integers[i];
//                 break;
//             }
//             continue;
//         }
//         if (Math.abs(integers[i]) % 2 === 1) {
//             result = integers[i];
//             break;
//         }
//     }
//     return result
// }

// insight baru dari diskusi

const findOutlier = integers => {
    const ganjil = integers.filter(a => Math.abs(a) % 2 === 1)
    const genap = integers.filter(a => Math.abs(a) % 2 === 0)
    return genap.length === 1 ? genap[0] : ganjil[0]
}


console.log(findOutlier([81898998, 93538250, -193823814, 158714694, 85458484, -3218426, 191825076, 197352862, 171789166, 57305894, 127577572, -1649092, -65979196, -158104268, 9114780, -159923530, -71622427, 43542758, 105337766, 199636110, 164250128, -93021188, -84666734, 154888914, -32040370, 19088984, 31827614, 153508902]));

