// FMP Track Coding Chalenge 2024
// Day 29/366
// https://www.codewars.com/kata/58d76854024c72c3e20000de/

function reverse(str ) {
    str = str
        .split(' ')
        .map((el, index, arr) => index % 2 === 1 ? el.split('').reverse().join('') : el)
    return str.join(/[a-z]/ig.test(str) ? ' ' : '')
}

console.log(
    reverse("Reverse this string, please!")
);

console.log(
    reverse('       ')
);

