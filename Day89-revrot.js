// FMP Track Coding Chalenge 2024
// Day 89/366 
// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/

//  Still need fixing, some case masih error, actually this solution need small repair and need some coffe :)
const checkDigitIsEven = digit => digit.split('').reduce((acc, el) => acc += +el, 0) % 2 ? false : true
const rotateOneStep = digit => digit.slice(1).concat(digit[0])

console.log(
    checkDigitIsEven('171063')
);


function revrot(str, sz) {

    console.log(
        str,
        sz
    );

    // your code
    if (sz > str.length || sz === 0 || str.length === 0) return ''
    const strArr = str.split('')
    let chaceDigit = ''
    let trackingPotongan = 1
    const arrDigit = []
    for (let i = 0; i < strArr.length; i++) {
        if (((sz) * trackingPotongan) === i) {
            arrDigit.push(chaceDigit)
            trackingPotongan += 1
            chaceDigit = ''
        }

        chaceDigit = chaceDigit.concat(strArr[i])
    }

    return arrDigit.map(el => checkDigitIsEven(el) ? el.split('').reverse().join('') : rotateOneStep(el))
}

console.log(
    '123'
);

console.log(
    // revrot("123456779", 0),
    // revrot("", 8)
    // revrot("1234", 5)
    // revrot('733049910872815764', 5)
    // revrot('69279319674999201851427652147487864602824086325761116680', 11)
    revrot('1710630706783474017593775136', 6)
);
