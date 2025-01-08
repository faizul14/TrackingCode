// FMP Track Coding Chalenge 2024
// Day 113/366
// https://www.codewars.com/kata/54b724efac3d5402db00065e/

const MORSE_CODE = {
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "-.-.--": "!",
    ".-.-.-": ".",
    "--..--": ","
};

const decodeMorse = function (morseCode) {
    // Your code here
    // You can use MORSE_CODE[morse]

    return morseCode.split('   ')
        .filter(el => el !== "")
        .map(el => {
            return el.split(' ')
                .map(el => MORSE_CODE[el]).join('')
        }).join(' ')
}

console.log(
    decodeMorse('.... . -.--   .--- ..- -.. .'),
    decodeMorse('   .... . -.--   ')
);
