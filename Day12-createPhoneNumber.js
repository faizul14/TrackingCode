// FMP Track Coding Chalenge 2024
// Day 12/366
// https://www.codewars.com/kata/525f50e3b73515a6db000b83/

// const createPhoneNumber = number => {
//     let result = ''
//     let helper = ''
//     for (let i = 0; i < 3; i++) {
//         helper = helper.concat(number[i])
//         if (i === 2) {
//             result = result.concat(`(${helper}) `)
//             helper = ''
//         }
//     }

//     for (let i = 3; i < 6; i++) {
//         helper = helper.concat(number[i])
//         if (i === 5) {
//             result = result.concat(`${helper}-`)
//             helper = ''
//         }
//     }

//     for (let i = 6; i < number.length; i++) {
//         helper = helper.concat(number[i])
//         if (i === number.length - 1) {
//             result = result.concat(helper)
//         }
//     }
//     return result
// }

// insight baru with regex
const createPhoneNumber = number => {
    let format = '(xxx) xxx-xxxx';
    for (let i = 0; i < number.length; i++) {
        format = format.replace('x', number[i])
    }
    return format
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
