// FMP Track Coding Chalenge 2024
// Day 46/366 => still need fixing
// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/

function incrementString(strng) {
    // return incrementedString
    let result = strng.match(/[^0-9]/g).join('')
    let numberInString = strng.match(/[0-9]/g) || [0]
    // if (parseInt(numberInString.join('')) < 1) {
    //     numberInString[numberInString.length - 1] = parseInt(numberInString[numberInString.length - 1]) + 1
    //     numberInString = numberInString.join('')
    // } else {
    //     numberInString = parseInt(numberInString.join('')) + 1
    //     numberInString
    // }
    // return result.concat(numberInString)
}

console.log(
    incrementString(
        // 'foo10'
        'foobar000'
    ),
    incrementString(
        'foobar999'
    )
);

console.log(

);