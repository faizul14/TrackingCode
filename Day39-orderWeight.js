// FMP Track Coding Chalenge 2024
// Day 39/366 => need time to fixing
// https://www.codewars.com/kata/55c6126177c9441a570000cc/

const sumElemen = value => value.length !== 0 ? value.split('').map(el => parseInt(el)).reduce((acc, el) => acc += el) : value
const short = (a, b) => {
    const min = parseInt(a) < parseInt(b) ? a.length : b.length
    let arrHelper = a.length === min ? b.split('') : a.split('')

    arrHelper = arrHelper.splice(0, min).join('')

    const valueA = a.length === min ? a : arrHelper
    const valueB = b.length === min ? b : arrHelper

    const objHelper = [
        {
            valueOriginal: a,
            valueForSort: valueA
        },
        {
            valueOriginal: b,
            valueForSort: valueB
        }
    ]
    objHelper.sort((a, b) => a.valueForSort - b.valueForSort)
    return [objHelper[0].valueOriginal, objHelper[1].valueOriginal]
}



function orderWeight(strng) {
    // your code
    strng = strng.split(' ')
    // strng.sort((a, b) => parseInt(a) - parseInt(b))
    const arrayOrderObject = []
    const result = []

    for (let i = 0; i < strng.length; i++) {
        arrayOrderObject.push(
            {
                valueOriginal: strng[i],
                valueWeight: sumElemen(strng[i])
            }
        )
    }
    // arrayOrderObject
    arrayOrderObject.sort((a, b) => a.valueWeight - b.valueWeight)
    arrayOrderObject

    for (let i = 0; i < arrayOrderObject.length - 1; i++) {
        const arrHelper = []
        if (arrayOrderObject[i].valueWeight === arrayOrderObject[i + 1].valueWeight) {
            arrHelper.push(...[arrayOrderObject[i], arrayOrderObject[i + 1]])

            arrHelper.sort((a, b) => a.valueOriginal[0] - b.valueOriginal[0])
            // arrHelper
            arrayOrderObject.splice(i, 2)
            arrayOrderObject.splice(i, 0, ...arrHelper)
            // arrayOrderObject
        }
    }


    arrayOrderObject.map(el => result.push(el.valueOriginal))

    for (let i = 0; i < result.length - 1; i++) {
        if (sumElemen(result[i]) === sumElemen(result[i + 1])) {
            const helper = short(result[i], result[i + 1])
            result.splice(i, 2, ...helper)
            // result.splice(i + 1, 1, helper[1])
        }
    }

    return result.join(' ')
}

// 13 105 170 109 163 28 191 29 85 68 12…
// 1 2 200 4 4 6 6 7 7 18 27 72 81 9 91
console.log(
    // orderWeight(
    //     '2000 10003 1234000 44444444 9999 11 11 22 123'
    // ),
    // sumElemen(
    //     '103'
    // )
    orderWeight(
        // '390883 163 163243 170 303671 85 337257 13 450763 28 326362 68 46607 168 125322 109 261501 105 282736 191 29'
        // '',
        '71899703 200 6 91 425 4 67407 7 96488 6 4 2 7 31064 9 7920 1 34608557 27 72 18 81'
    )
);

// const test = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// test.push(...[10, 11])
// test.splice(0, 2)
// test

// test.splice(0, 0, ...[2, 3])
// console.log(
//     test
// );

const a = [1, 2, 3, 4, 5]

a.splice(2, 1, 10)

console.log(
    // ['168', '125322'].sort((a, b) => a[0].concat(a[1]) - b[0].concat[a[1]]),
    // ['125322'][0][1]
    // Math.min('168', '125322'),
    // '168' < '125322'
    a
);

console.log(
    short('27', '72')
);