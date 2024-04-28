// FMP Track Coding Chalenge 2024
// Day 39/366 => need time to fixing
// https://www.codewars.com/kata/55c6126177c9441a570000cc/

const sumElemen = value => value.split('').map(el => parseInt(el)).reduce((acc, el) => acc += el)



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

    return result.join(' ')
}

// 13 105 170 109 163 28 191 29 85 68 12…

console.log(
    // orderWeight(
    //     '2000 10003 1234000 44444444 9999 11 11 22 123'
    // ),
    // sumElemen(
    //     '103'
    // )
    orderWeight(
        '390883 163 163243 170 303671 85 337257 13 450763 28 326362 68 46607 168 125322 109 261501 105 282736 191 29'
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