// this is answer how to create array alphabet
// const arrAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
// console.log(arrAlphabet);

// this is for check value of a charater a-z A-Z
// console.log('a'.charCodeAt() -96);

// console.log('a'.repeat(2));
// console.log('Hello world'.replace('world', 'fmp'));

// RegExp
// let text = 'Hello you Wo9rld fae&*'
// console.log(text.replace(/[eod]/ig, 'fmp'));
// console.log(text.match(/(e|o|d)/g));

// console.log(text.match(/\W/g));


// const test = "aaaa"
// console.log(test[0].toUpperCase());

// console.log(
//     '1,2,2,3,3'
//         .replace(/[^1-9a-zA-Z]/g, '')
//         .split('')
//         .filter((element, index, array) => element !== array[index - 1])
// );


// console.log(2360688 / 46288);

// console.log(Math.sqrt(625));
// console.log(Math.sqrt(676));
// console.log(Math.round(Math.sqrt(155) % 1));


// console.log(/[^0-9]/g.test(20));


// console.log(('aaaxbbbbyyhwawiwjjjwwm'.match(/[^a-m]/ig) || []).length);

// console.log(eval('1+2'));


// console.log(/[^0-9]/g.test('2345'));

// const arr = [false, 1, 0, 1, 2, 0, 1, 3, "a"]
// arr.splice(2, 1)
// console.log(arr);
// console.log('0'.repeat(2));

// console.log('abcde'.split('').map((el, index, array) => index % 2 === 1 ? `${el}4`: el, '').join('').split('4').map((el) => el.length !== 2 ? el.concat('_'): el));


// // convert number to binner
// console.log((1234).toString(2));
// console.log(parseInt('0010', 2));


// console.log([-5, 8, 6, -3, 4].sort((a, b) => a - b));

// console.log(
//     'abcdf'
//         .split('')
//         .map(a => a.charCodeAt() - 96)
// );

// // convert unicode to chart
// console.log(String.fromCharCode(97));

// console.log(6 * 0.5);

// console.log('This!'.split('').reverse().join(''));


// console.log(/sumo/ig.test('mo'));

// console.log(
//     'lorem ipsum dolor is amer'.split(' ').reverse().join(' ')
// );


// console.log(
//     'z'.charCodeAt() - 96,
//     'b'.charCodeAt() - 96,
//     'A'.charCodeAt() - 38
// );

// console.log(
//     Math.round(17 / 3)
// );

// console.log(
//     String.fromCharCode(96 + 6)
// );


// const resultChar = (charOne, charTwo) => {
//     const findMinimum = charOne < charTwo ? charOne : charTwo
//     let countChar = Math.abs(charValue(charOne) - charValue(charTwo)) + 1
//     countChar = Math.ceil(countChar / 2)
//     console.log(countChar);


//     console.log(
//         charValue(findMinimum) + countChar - 1,
//         String.fromCharCode(charValue(findMinimum) + countChar - 1 + 96)
//     );

//     return String.fromCharCode(97)
// }

// const charValue = char => {
//     return char.charCodeAt() - 96
// }

// console.log(
//     // charValue('a')
//     // resultChar('j', 'a'),
//     // resultChar('l', 'o'),
//     // resultChar('t', 'f'),
//     // resultChar('k', 'n')
//     resultChar('a', 'a')
// );


// console.log(
//     // Math.pow(5, 2),
//     // 11 * 23,
//     // 253 / 11
//     /[.]/g.test('1.1')
// );

// console.log(
//     Math.ceil(1.9),
//     Math.sqrt(16)
// );

// console.log(
//     24 % 12
// );

// const arr = [1, 2, 3, 4, 5]
// arr.splice(3, 1)
// console.log(
//     arr
// );

// const isPrimeArray = num => {
//     const arr = []
//     let countLoop = 0
//     const length = Math.round(num / 2)
//     for (let i = 2; i <= Math.sqrt(num - 1) + 1; i++) {
//         countLoop++
//         if (num % i === 0) {
//             arr.push(i)
//             break
//         }
//     }
//     console.log(arr.length !== 0 ? arr : `${num} is prime`);
//     console.log(`Lopping count ${countLoop} times`);

// }

// console.log(
//     isPrimeArray(
//         // 5099
//         // 50
//         624450121
//     )
// );

// console.log(
//     Math.round(75 / 2),
//     75 % 38,
//     Math.round(38 / 2),
//     Math.sqrt(624450121)
// );

// const arr = ['18', '81', '144']

// console.log(
//     arr.sort((a, b) => a - b),
//     arr
// );

// let n = 10
// n = n.toString(2)
// console.log(
//     n.split('0').filter(a => a === '1')
// );


// const index = [1, 2, 3, 4, 5, 6]
// const aa = 'abcd'
// console.log(
//     index.indexOf(5),
//     aa.indexOf('b')
// );


// const regex = new RegExp('[)|D]','')
// const arrSimel = [':)', ';(', ';}', ':-D']
// let count  = 0
// for (let i = 0; i < arrSimel.length; i++) {
//     if (regex.test(arrSimel[i])){
//         console.log(arrSimel[i]);

//     }
// }

// console.log(
//     Math.sqrt(30)
// );


// console.log(
//     1000-(1000*0.18)+(1000*0.05),
//     50*0.18,
//     50-9
// );



// return true if matrix valid other tah false
// const solution = sol => {
//     const validMatrix = checkValidMatrix(sol)
//     const validRowAndColumn = checkValue(sol)
//     validRowAndColumn
//     return validMatrix && validRowAndColumn
// }

// const checkValidMatrix = m => {
//     const mLength = m.length

//     for (let i = 0; i < m.length; i++) {
//         if (mLength !== m[i].length) {
//             return false
//         }
//     }
//     return true
// }

// const checkValue = m => {
//     const valueIndexZero = m[0]
//     for (let i = 1; i < m.length; i++) {
//         for (let j = 0; j < valueIndexZero.length; j++) {
//             if (m[i].includes(valueIndexZero[j])) {
//                 break
//             }

//             if (j === valueIndexZero.length - 1) {
//                 return false
//             }
//         }
//     }
//     return true
// }




// console.log(
//     solution(
//         [[1, 2, 3], [3, 1, 2], [2, 1, 3]]
//     )
// );


// follow the pattern

// const solution = (pattern, s) => {
//     pattern = pattern.split('')
//     // const patternIdentity = pattern.map((el, index, _) => )
//     // patternIdentity
// }

// console.log(
//     solution(
//         'abba', 'cat zebra zebra cat'
//     )
// );



// console.log(
//     Math.floor(Math.random() * 10)
// );

// console.log(
//     'aa 89'.match(/[0-9]/g),
//     /[0-9]/g.test('aa 89')
// );
// const objTest = {
//     'a': 'a',
//     'b': 'b'
// }
// console.log(
//     // 'hey boss'.replace(/ /g, '').split('').sort((a,b) => a.charCodeAt() - b.charCodeAt())
//     // 'a'.charCodeAt()
//     // 'aaa'.match(/a/g).length
//     objTest.b,
//     'aabbjj'.includes('a')
// );

// let data = [1, 1, 2, 3, 4, 2, 5]
// // data = data.indexOf(5)

// console.log(data);

// console.log(
//     'a'.charCodeAt() - 96
// );

// Try data collection SET
// const sampleSetDataCollection = () => {
//     // const dataDay = [...new Set(['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'senin'])]
//     const hari = 'senin selasa rabu kamis jumat sabtu minggu senin selasa rabu rabu'
//     const dataDay = new Set(hari.split(' '))
//     dataDay.add('apalgi ya')
//     dataDay.add('senin')
//     return dataDay
// }

// console.log(
//     sampleSetDataCollection()
// );


const triAngle = (n) => {
    let result = ''
    let idx = 1
    while (idx <= n) {
        result = result.concat(`${'*'.repeat(idx)} \n`)
        idx++
    }
    result
    return result
}

console.log(
    triAngle(3)
);

console.log(
    Math.pow(11, 2),
    Math.sqrt(121)
);



console.log(
    eval('1+2')
);


const fibonacci = n => {
    if (n < 2) return n

    return n + fibonacci(n - 1)
}

console.log(fibonacci(4));





const array = { name: 'Faezol' }
array.fullname = `${array.name} MP`

console.log(
    array.fullname
);

console.log(
    3 - -4
);



console.log(
    'aku# ini 98=-'.match(/[a-z]/gi),
    'aku# i#ni 98=-'.match(/[a-z]#/gi)

);


// ("1 2 3 4 5 6 9 8 7 6 5 4 ", 6)-- > "2 3 4 5 6 1 8 7 6 5 4 9"
let digit = '123456'
let aee = [...digit]
console.log(aee);

console.log((1 + 2 + 3 + 4 + 5 + 6) % 2);


let arrr = '1234567890'

arrr = arrr.split()

console.log(
    arrr
);

console.log(
    (8000 - ((1.5 / 100) * 8000)),
    (2000 - ((1.5 / 100) * 2000)),
    (8000 - ((1.5 / 100) * 8000)) - (2000 - ((1.5 / 100) * 2000)) - 1000,
);

console.log(
    (7880 - ((2.0 / 100) * 7880)),
    (1970 - ((2.0 / 100) * 1970)),
    (7880 - ((2.0 / 100) * 7880)) - (1970 - ((2.0 / 100) * 1970)) - 2000,
);


console.log(
    (7722.4 - ((2.0 / 100) * 7722.4)),
    (1930.6 - ((2.0 / 100) * 1930.6)),
    (7722.4 - ((2.0 / 100) * 7722.4)) - (1930.6 - ((2.0 / 100) * 1930.6)) - 3000,
);

let testHello = 'Hello'
testHello = testHello.replace(new RegExp(testHello.charAt(1), 'g'), testHello.charAt(testHello.length - 1))
console.log(
    'H'.charCodeAt(),
    testHello
);


console.log(
    // (2 ** 5) * (5) * (7 ** 2) * (11)
    2695 % 5
);

const testInceremnt = 000 + 1
console.log(testInceremnt);

console.log(
    1234567 % 13,
    87 % 13,
    9 % 2,
    Math.pow(10, 3) % 13
);

