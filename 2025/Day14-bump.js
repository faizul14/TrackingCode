// FMP Track Coding Chalenge 2025
// Day 14/365
// https://www.codewars.com/kata/57ed30dde7728215300005fa/

function bump(x) {
    return (x.match(/n/g) || []).length <= 15 ? 'Woohoo!' : 'Car Dead'
}


console.log(
    bump("__nn_nnnn__n_n___n____nn__nnn")
);
