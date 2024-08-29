// FMP Track Coding Chalenge 2024
// Day 101/366
// https://www.codewars.com/kata/515decfd9dcfc23bb6000006/

function isValidIP(str) {
    const esktrakByOktet = str.split('.')
    if (esktrakByOktet.length > 4 || esktrakByOktet.length < 4) return false
    for (let i of esktrakByOktet) {

        if (/[^0-9]/g.test(i) || !/^(0|[1-9][0-9]*)$/.test(i) || +i > 255) {
            return false
        }
    }
    return true;
}


console.log(
    // isValidIP("12.255.56.1")
    // isValidIP('0.0.0.0')
    // isValidIP('137.255.156.100')
    // isValidIP('123.456.789.0')
    isValidIP('12.34.56')
);


// console.log(
//     // /[0-9]/g.test('abc')
//     // /^(0[^0-9]|[1-9][0-9]*)$/.test('')
//     /^(0|[1-9][0-9]*)$/.test('')
// );



