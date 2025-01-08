// FMP Track Coding Chalenge 2024
// Day 58/366
// https://www.codewars.com/kata/5842df8ccbd22792a4000245/s

const createZero = zeroMany => {
    zeroMany
    let returnZero = ''
    for (let i = 0; i < zeroMany; i++) {
        returnZero = returnZero.concat('0')
    }
    return returnZero
}

const checkLast = value => {
    value = value.split('')
    let index = value.length - 1
    while (true) {
        if (/[0-9]/g.test(value[index])) {
            break
        } else {
            value.splice(index, 1)
        }
        index--
    }
    return value.join('')
}

function expandedForm(num) {
    // Your code here
    let result = ''
    num = num.toString().split('')
    for (let i = 0; i < num.length; i++) {

        if (i === (num.length - 1) && num[i] !== '0') {
            result = result.concat(num[i])
            break
        }

        if (num[i] !== '0') {
            // if (num[i + 1] === 0 && (i + 1) !== (num.length - 1)) { }
            result = result.concat(`${num[i]}${createZero(num.length - (i + 1))} + `)
        }
    }
    return checkLast(result)
}
console.log(
    expandedForm(
        // 12
        // 5012
        82833620
    )
);