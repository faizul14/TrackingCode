// FMP Track Coding Chalenge 2024
// Day 119/366
// https://www.codewars.com/kata/58daa7617332e59593000006/

function findLongest(array) {
    // code here
    let result = {
        digits: 0,
        number: 0
    }
    array.map(el => {
        const lengthEl = el.toString().length
        if(result.digits < lengthEl){
            result.digits = lengthEl
            number = el
        }
    } )
    return number
}

console.log(
    findLongest([9000, 8, 800])
);
