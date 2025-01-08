// FMP Track Coding Chalenge 2024
// Day 132/366 => Need fixing
// https://www.codewars.com/kata/55d5434f269c0c3f1b000058/

function tripledouble(num1, num2) {
    //code me
    const codition = {
        num1: false,
        num2: false
    }
    let stack = 0
    num1 = num1.toString()
    num2 = num2.toString()
    num2
    num1

    let idx = 0
    for (let i of num1) {
        i
        if (num1.match(new RegExp(i, 'g')).length >= 3) {
            i
            console.log(
                num1[idx]
            );
            if ((num1[idx - 1] || 0) === num1[idx]) continue
            const isTriple = num1[idx] === (num1[idx + 1] || 0) && (num1[idx + 1] || 0) === (num1[idx + 2] || 0)

            isTriple
            if (!isTriple) continue
            i
            codition.num1 = true
            stack = i

            const check = num2.match(new RegExp(stack, 'g'))
            check
            i
            if (check !== null && check.length >= 2) {
                i
                codition.num2 = true
                break
            }
            // break
        }
        i
        idx++
    }
    // const check = num2.match(new RegExp(stack, 'g'))
    // check
    // if (check !== null && check.length === 2) {
    //     codition.num2 = true
    // }

    codition

    return codition.num1 && codition.num2 ? 1 : 0
}


console.log(
    // tripledouble(451999277, 41177722899),
    // tripledouble(12345, 12345),
    // tripledouble(10560002, 100),
    // tripledouble(5675148777555666, 374862177)
    tripledouble(88928984445666, 46885335)
);

console.log(
    'aabbcc'.match(/a/g)
);

