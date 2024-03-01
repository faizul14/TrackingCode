// FMP Track Coding Chalenge 2024
// Day 11/366
// https://www.codewars.com/kata/54da5a58ea159efa38000836


const findOdd = numbers => {
    let result = 0
    for (let i = 0; i < numbers.length; i++) {
        let count = 0
        for (let j = 0; j < numbers.length; j++) {
            count += numbers[i] === numbers[j] ? 1 : 0
        }
        if (count % 2 === 1) {
            result = numbers[i]
            break
        }
    }
    return result
}




console.log(findOdd([0, 1, 0, 1, 0]));
