// FMP Track Coding Chalenge 2024
// Day 12/366
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

const duplicateCount = text => {
    //...
    text = text.toLowerCase().split('')
    let countDup = 0
    let txtIsDup = ''

    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < text.length; j++) {
            if (i !== j && !txtIsDup.includes(text[i]) && text[i] === text[j]) {
                countDup++
                txtIsDup = txtIsDup.concat(text[i]);
                break;
            }
        }
    }
    return countDup
}



console.log(duplicateCount('aabBcde'));
