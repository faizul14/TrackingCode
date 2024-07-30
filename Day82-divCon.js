// // FMP Track Coding Chalenge 2024
// // Day 82/366
// // https://www.codewars.com/kata/57eaec5608fed543d6000021/

// solution : 1
function divCon(x) {
    const sumTypeOfNumber = x.reduce((acc, el) => acc += typeof(el) === 'number' ? el : 0 ,0) || 0
    const sumTypeOfString = x.reduce((acc, el) => acc += typeof(el) === 'string' ? +el : 0, 0) || 0
    return sumTypeOfNumber - sumTypeOfString
}

// solution : 2
const sumByType = (x, type) => x.reduce((acc, el) => acc += typeof (el) === type ? +el : 0, 0)
const divCon = x => sumByType(x, 'number') - sumByType(x, 'string')

// solution : 3
const divCon = x => x.reduce((acc, el) => acc += typeof (el) === 'number' ? el : -(+el), 0)


console.log(
    divCon([9, 3, '7', '3'])
);
