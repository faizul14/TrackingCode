// FMP Track Coding Chalenge 2024
// Day 99/366 => Need Fixing
// https://www.codewars.com/kata/5848565e273af816fb000449/

var encryptThis = function (text) {
    // Implement me! :)
    let textEncrypt = text.split(' ')
    textEncrypt = textEncrypt.map(el => {
        let encrypt = el
        if (el.length > 2) {
            const temp = el[1]
            encrypt = el
                .replace(el[1], el.charAt(el.length - 1))
                .replace(el[el.length - 1], temp)
        }
        encrypt = el.replace(new RegExp(el[0], 'g'), el[0].charCodeAt())

        return encrypt
    })

    return textEncrypt
}


console.log(
    encryptThis('A wise old owl lived in an oak')
);
