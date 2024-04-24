// FMP Track Coding Chalenge 2024
// Day 35/366
// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/

function removeSmallest(numbers) {
    let minimum = Math.min(...numbers)
    const numbersResult = []
    let haveRemove = true    
    for (let i = 0; i < numbers.length; i++) {
        if (minimum === numbers[i] && haveRemove) {
            haveRemove = false
            continue
        }
        numbersResult.push(numbers[i])
    }
    return numbersResult
}

// const removeSmallest = number => {
//     const min = Math.min(...number)
//     let indexRemove = 0
//     for (let i = 0; i < number.length; i++) {
//         if (number[i] === min) {
//             indexRemove = i
//             break
//         }
//     }
//     number.splice(indexRemove, 1)
//     return number
// }


console.log(
    removeSmallest(
        [2, 2, 1, 2, 1]
    ),
    removeSmallest(
        [1, 2, 3, 4, 5]
    ),
    removeSmallest(
        [
            215, 354, 376, 45,
            121, 338, 4, 329,
            381
        ]
    )
);
