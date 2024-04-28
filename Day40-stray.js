// FMP Track Coding Chalenge 2024
// Day 40/366
// https://www.codewars.com/kata/57f609022f4d534f05000024/

// function stray(numbers) {
//     numbers.sort((a, b) => a - b)
//     return numbers[1] === numbers[numbers.length - 1] ? numbers[0] : numbers[numbers.length - 1];
// }

const stray = numbers => {
    const checkVariable = numbers.sort((a, b) => a - b).join('')
    return checkVariable.match(new RegExp(numbers[0], 'g')).length > 1 ? numbers[numbers.length - 1] : numbers[0]
}

console.log(
    stray(
        [1, 2, 1]
    )
);
