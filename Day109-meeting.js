// FMP Track Coding Chalenge 2024
// Day 109/366 => Need fixing
// https://www.codewars.com/kata/59df2f8f08c6cec835000012/

const sortByFirstName = data => {
    const resultAfterSort = []
    let temp = []
    data.map((el, idx, arr) => {
        temp.push(el)
        if ((idx !== arr.length - 1) && el !== temp[temp.length - 1] && el[0].charCodeAt() === temp[temp.length - 1][0].charCodeAt()) {
            temp.push(el)
        }else{
            resultAfterSort.push(temp)
            // temp = []
        }
    })

    temp
    resultAfterSort

    const result = data.sort((a, b) => a[1].charCodeAt() - b[1].charCodeAt())

    result

}

function meeting(s) {
    // your code
    s = s
        .split(';')
        .map(el => el.toUpperCase().split(':').reverse())
        .sort((a, b) => a[0].charCodeAt() - b[0].charCodeAt())
    s
    return sortByFirstName(s)
}
console.log(
    meeting('Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill')
);

console.log(
    ['AKU', 'CUMA', 'TAMU', 'GUA'].sort((a, b) => b.charCodeAt() - a.charCodeAt())
);

let data = [1, 2, 3, 3, 3, 3, 4]
data.splice(2, 5)
console.log(
    data
);

