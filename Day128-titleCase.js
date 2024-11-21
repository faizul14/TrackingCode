// FMP Track Coding Chalenge 2024
// Day 127/366
// https://www.codewars.com/kata/5202ef17a402dd033c000009/

const formatCapt = n => {
    return n.split('').map((el, idx, _) => idx === 0 ? el.toUpperCase() : el.toLowerCase()).join('')
}

function titleCase(title, minorWords) {
    return title.split(' ').map((el, idx, _) => {
        if (minorWords && new RegExp(`\\b${el}\\b`, 'gi').test(minorWords) && idx !== 0) {
            return el.toLowerCase()
        }
        return formatCapt(el)
    }).join(' ')
}

console.log(
    // titleCase('a clash of KINGS', 'a an the Of')
    // titleCase('THE WIND IN THE WILLOWS', 'The In')
    // titleCase("aBC deF Ghi")
    titleCase("First a of in", "an often into")
);

console.log(
    // formatCapt('KINGS'),
    new RegExp("\\ba\\b", "gi").test("an is")
);

