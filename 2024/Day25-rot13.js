// FMP Track Coding Chalenge 2024
// Day 25/366
// https://www.codewars.com/kata/530e15517bc88ac656000716/

function rot13(message) {
    //your code here
    message = message.split('')

    for (let i = 0; i < message.length; i++) {
        if (message[i] === ' ' || /[^A-Za-z]/g.test(message[i])) {
            continue
        }
        if (/[a-z]/g.test(message[i])) {
            message[i] = message[i].charCodeAt() + 13
            if (message[i] > 122) {
                message[i] = message[i] - 122 + 96
            }
            continue
        }
        message[i] = message[i].charCodeAt() + 13
        if (message[i] > 90) {
            message[i] = message[i] - 90 + 64

        }
    }

    for (let i = 0; i < message.length; i++) {
        if (message[i] === ' ' || /[^0-9]/g.test(message[i])) {
            continue
        }
        message[i] = /[A-Za-z]/g.test(String.fromCharCode(message[i])) ? String.fromCharCode(message[i]) : message[i]

    }
    return message.join('')
}

console.log(rot13('Ttest'));
console.log(rot13('Ruby is cool!'));
console.log(rot13('10+2 is twelve.'));



// console.log('a'.charCodeAt());
// console.log('A'.charCodeAt());

// console.log(String.fromCharCode(90));



