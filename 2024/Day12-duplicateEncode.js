// FMP Track Coding Chalenge 2024
// Day 12/366
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/

const duplicateEncode = (word) => {
    // ...
    word = word.toLowerCase().split('')
    let txtDup = ''
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < word.length; j++) {
            if (i !== j && !txtDup.includes(word[i]) && word[i] === word[j]) {
                txtDup = txtDup.concat(word[i]);
                break;
            }
        }
    }
    return word.map(a => txtDup.includes(a) ? ')' : '(').join('')
}

console.log(duplicateEncode('(( @"),'));
