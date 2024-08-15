// FMP Track Coding Chalenge 2024
// Day 92/366
// https://www.codewars.com/kata/5d23d89906f92a00267bb83d/

function getOrder(input) {
    let extrakInput = input
    let menu = ['Burger', 'Fries', 'Chicken', 'Pizza', 'Sandwich', 'Onionrings', 'Milkshake', 'Coke']
    let result = ''
    for (let i of menu) {
        const ekstrak = extrakInput.match(new RegExp(i, 'gi'))
        if (ekstrak === null) {
            continue
        }
        result = result.concat(`${ekstrak},`)
    }
    result = result
        .replace(/,/g, ' ')
        .split(' ')
        .slice(0, -1)
        .map(el => `${el[0].toUpperCase()}${el.split('').slice(1).join('')}`)
        .join(' ')
    return result
}
console.log(
    getOrder('milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza')
);
