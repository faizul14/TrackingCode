// FMP Track Coding Chalenge 2024
// Day 124/366
// https://www.codewars.com/kata/5277c8a221e209d3f6000b56/

function validBraces(braces) {
    //TODO 
    const brac = {
        ')': '(',
        '}': '{',
        ']': '[',
    }
    const tempTamp = []
    braces = braces.split('')
    for (let i of braces) {
        if (tempTamp.length <= 0) {
            tempTamp.push(i)
            continue
        }

        if (tempTamp[tempTamp.length - 1] === brac[i]) {
            tempTamp.pop()
        } else {
            tempTamp.push(i)
        }
    }
    tempTamp
    return tempTamp.length === 0
}
console.log(
    // validBraces("([{}])")
    // validBraces("()))")
    // validBraces("()")
);

console.log(
    ['a', 'b'].pop()
);

