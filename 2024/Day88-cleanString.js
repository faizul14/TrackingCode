// FMP Track Coding Chalenge 2024
// Day 88/366
// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/

// this solution bad on time limit
// function cleanString(s) {
// //   ... your code ...

//     while(/#/gi.test(s)){
//         s= s.replace(/[a-z]#/gi, '')
//     }
//     return s
// }


// this solution good on time limit
function cleanString(s) {
    let result = [];

    for (let char of s) {
        if (char === '#') {
            if (result.length > 0) {
                result.pop();
            }
        } else {
            result.push(char);
        }
    }
    return result.join('');
}

console.log(
    cleanString('abc#d##c')
);
