// FMP Track Coding Chalenge 2025
// Day 44/365
// https://www.codewars.com/kata/525f47c79f2f25a4db000025/

function validPhoneNumber(phoneNumber) {
    //TODO: Return whether phoneNumber is in the proper form
    let pNumber = phoneNumber
        .replace(/[^0-9]/g, '')
        .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
    return pNumber === phoneNumber
}

let number = "(123) 456-7890"
console.log(
    validPhoneNumber(number)
);
