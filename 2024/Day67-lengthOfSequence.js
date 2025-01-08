// FMP Track Coding Chalenge 2024
// Day 67/366
// https://www.codewars.com/kata/5566b0dd450172dfc4000005/

// var lengthOfSequence = function (arr, n) {
//     // TODO: Write some scripts here

//     const check = arr.reduce((acc, el) => acc += el === n ? 1 : 0, 0)
//     if(check !== 2){
//         return 0
//     }

//     let isFind = false
//     let result = 0
//     let idx = 0

//     while(idx < arr.length){
//         isFind = arr[idx] === n ? !isFind : isFind
//         if(isFind){
//             result++
//         }
//         idx++
//     }
//     return result+1
// };

// get insight from discussion, and i feel like stupid when see this solution LOL
const lengthOfSequence = (arr, n) => {
    if ((arr.reduce((acc, el) => acc += el === n ? 1 : 0, 0)) !== 2) { return 0 }
    return arr.lastIndexOf(n) - (arr.indexOf(n) - 1)
}

console.log(
    lengthOfSequence(
        [3, 4, 1, 2, 3, 1], 1
    )
);
