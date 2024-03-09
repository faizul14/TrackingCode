// FMP Track Coding Chalenge 2024
// Day 16/366
// https://www.codewars.com/kata/54e6533c92449cc251001667


const uniqueInOrder = (iterable) => {
    //your code here - remember iterable can be a string or an array
    iterable = typeof (iterable) === 'object'
        ? iterable.join('')
        : iterable
    return iterable
        .replace(/[^1-9a-zA-Z]/g, '')
        .split('')
        .filter((element, index, array) => element !== array[index - 1])
        .map((el) => el.match(/\d/g) ? parseInt(el) : el)
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));


