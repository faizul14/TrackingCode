// FMP Track Coding Chalenge 2024
// Day 96/366
// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/

// Very complex and failed with all case, and get timeout, Lol
// function findEvenIndex(arr) {
//     //Code goes here!
//     // check index from middle of length data
//     let checkIndex = Math.ceil(arr.length / 2) - 1
//     // const arrClone = arr
//     //     .join('')
//     //     .split(arr[checkIndex])
//     //     .map(el => eval(el.split('').join('+')))

//     // if (arrClone[0] === arrClone[1]) {
//     //     return checkIndex
//     // }

//     let left = 0
//     let right = 0

//     while (checkIndex >= 0 || checkIndex <= (arr.length - 1)) {
//         // Left
//         checkIndex -= left
//         const arrClone = arr
//             .join('')
//             .split(arr[checkIndex])
//             .map(el => eval(el.split('').join('+')))

//         if (arrClone[0] === arrClone[1]) {
//             return checkIndex
//         }

//         // Right
//         if(right === 0) continue
//         checkIndex += right
//         const arrCloneRight = arr
//             .join('')
//             .split(arr[checkIndex])
//             .map(el => eval(el.split('').join('+')))

//         if (arrCloneRight[0] === arrCloneRight[1]) {
//             return checkIndex
//         }
//         // break
//         left += 1
//         right++
//     }
//     return -1
// }

// this solution after fixing and optimization
function findEvenIndex(arr) {
    let leftSum = 0;
    let rightSum = arr.reduce((acc, num) => acc + num, 0);

    for (let i = 0; i < arr.length; i++) {
        rightSum -= arr[i];

        if (leftSum === rightSum) {
            return i;
        }

        leftSum += arr[i];
    }

    return -1;
}


console.log(
    findEvenIndex([1, 2, 3, 4, 3, 2, 1])
);