// FMP Track Coding Chalenge 2024
// Day 46/366
// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/

// function incrementString(strng) {
//     let result = ''
//     const ekstrakString = strng.replace(/\d+$/, "")
//     const ekstrakNumber = strng.match(/\d+$/)[0] || '0'
//     ekstrakString
//     ekstrakNumber

//     const cek = /\b00/g.test(ekstrakNumber)
//     let ekstrakDoubleZero = ekstrakNumber.replace(/\b00/g, '')
//     ekstrakDoubleZero = +ekstrakDoubleZero + 1
//     ekstrakDoubleZero
//     // if (cek) {
//     result = cek ? '0'.repeat(ekstrakNumber.length - `${ekstrakDoubleZero}`.length).concat(ekstrakDoubleZero) : ekstrakDoubleZero
//     // }

//     result


//     return ekstrakString.concat(result)
// }

function incrementString(strng) {
    // Mengambil bagian string tanpa angka di akhir
    const ekstrakString = strng.replace(/\d+$/, "");
    // Mengambil angka di akhir string, jika tidak ada angka maka set ke '0'
    const ekstrakNumber = strng.match(/\d+$/) ? strng.match(/\d+$/)[0] : '0';

    // Increment angka
    let incrementedNumber = (parseInt(ekstrakNumber, 10) + 1).toString();

    // Jika angka asli memiliki nol di depannya, pertahankan panjang yang sama dengan mengisi nol kembali
    if (ekstrakNumber.length > incrementedNumber.length) {
        incrementedNumber = '0'.repeat(ekstrakNumber.length - incrementedNumber.length) + incrementedNumber;
    }

    // Menggabungkan bagian string dengan angka yang telah di-increment
    return ekstrakString + incrementedNumber;
}

// get from insigth, after riview i think: i am very stupid LOLLLLLLLLLL
let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1)


console.log(
    incrementString(
        // 'foo10'
        'foobar000'
    ),
    incrementString(
        'foobar00999'
    ),
    incrementString('fo99obar99') //expect : fo99obar1000
);

console.log(

);