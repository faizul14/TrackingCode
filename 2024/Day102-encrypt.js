// FMP Track Coding Chalenge 2024
// Day 102/366
// https://www.codewars.com/kata/57814d79a56c88e3e0000786/

function encrypt(text, n) {
    if (text === '' || text === null) return text
    let repeat = 1
    while (repeat <= n) {
        let splitGanjil = ''
        let splitGenap = ''
        text.split('').map((el, idx, _) => {
            if (idx % 2 === 0) {
                splitGenap = splitGenap.concat(el)
            }
            if (idx % 2 === 1) {
                splitGanjil = splitGanjil.concat(el)
            }
        })
        repeat++
        text = splitGanjil.concat(splitGenap)
        text
    }
    return text
}

function decrypt(encryptedText, n) {
    if (encryptedText === '' || encryptedText === null) return encryptedText

    let result = encryptedText
    // encryptedText.length % 2 === 1 ? encryptedText.concat(' ') : encryptedText
    result
    console.log(result.length);

    // let formatData = encryptedText.split('')
    // console.log(
    //     formatData.length
    // );

    const length = result.length / 2
    length
    // formatData
    // let dataGanjil = formatData.slice(0, length)
    // dataGanjil
    // let dataGenap = formatData.slice(length)
    // dataGenap
    let repeat = 1
    while (repeat <= n) {
        let temp = ''
        let formatData = result.split('')
        console.log(
            formatData.length
        );

        formatData
        let dataGanjil = formatData.slice(0, length)
        dataGanjil
        let dataGenap = formatData.slice(length)
        dataGenap

        dataGenap.map((el, idx, _) => {
            temp = temp.concat(`${el}${dataGanjil[idx] || ''}`)
        })
        repeat++
        result = temp
    }
    result
    return result
}


console.log(
    encrypt('012345', 1)
);

// console.log(
//     decrypt('304152', 2)
// );

console.log(
    decrypt('s eT ashi tist!', 2)
);





