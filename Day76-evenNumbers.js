// FMP Track Coding Chalenge 2024
// Day 76/366
// https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/

function evenNumbers(array, number) {
    let result = []
    array = array.reverse().filter(el => el % 2 == 0)
    for (let i = 0; i < array.length; i++) {
        if (i < number) {
            result.push(array[i])
        }
    }
    return result.reverse()
}

const evenNumbers = (array, number) => array.reverse().filter(el => el % 2 == 0).splice(0, number).reverse()

console.log(
    evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)
    // evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)
);
