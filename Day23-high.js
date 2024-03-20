// FMP Track Coding Chalenge 2024
// Day 23/366
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/

function high(x) {
    let result = ''
    let countResoult = 0
    x = x.split(' ')

    for (let i = 0; i < x.length; i++) {
        const helper = x[i].split('')
        let helperResultCount = 0
        for (let j = 0; j < helper.length; j++) {
            helperResultCount += helper[j].charCodeAt() - 96
        }
        if (helperResultCount > countResoult) {
            result = x[i]
            countResoult = helperResultCount
        }
    }
    return result
}

console.log(high('take me to semynak'));
console.log(high('what time are we climbing up the volcano'));

