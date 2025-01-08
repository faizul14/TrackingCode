// FMP Track Coding Chalenge 2024
// Day 16/366
// https://www.codewars.com/kata/556deca17c58da83c00002db/

// function tribonacci(signature, n) {
//     //your code here
//     if (n === 0) {
//         return []
//     }

//     if (n < 3) {
//         const res = []
//         for (let i = 0; i < n; i++) { res.push(signature[i]) }
//         return res
//     }

//     let deretTribonanci = signature
//     for (let index = 3; index < n; index++) {
//         const length = deretTribonanci.length
//         const temp = deretTribonanci[length - 1] + deretTribonanci[length - 2] + deretTribonanci[length - 3]
//         deretTribonanci.push(temp)
//     }
//     return deretTribonanci
// }

// insight baru dari diskusi
// very clever, i feel stupid if compare my solution with this, LOL 
const tribonacci = (signature, n) => {
    for (let i = 3; i < n; i++) {
        signature.push(signature[i - 1] + signature[i - 2] + signature[i - 3])
    }
    return signature.slice(0, n)
}

console.log(tribonacci([1, 1, 1], 10));
