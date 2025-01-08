// FMP Track Coding Chalenge 2024
// Day 79/366
// https://www.codewars.com/kata/57f759bb664021a30300007d/

// solution 1
function switcheroo(x) {
    if (!/[a-b]/gi.test(x)) { return x }
    x = x.split('').map(el => el === 'c' ? el : el === 'a' ? 'b' : 'a').join('')
    return x
}

// solution 2: with one liner
const switcheroo = x => !/[a-b]/gi.test(x) ? x : x.split('').map(el => el === 'c' ? el : el === 'a' ? 'b' : 'a').join('')

// solution 3: from discussion 
// get insight from discussion, i think this best practice and simple, and like POOOL it
const switcheroo = x => x.replace(/[ab]/g, (y) => y === 'a' ? 'b' : 'a')


console.log(
    switcheroo('aaabcccbaaa')
);
