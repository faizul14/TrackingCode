// FMP Track Coding Chalenge 2025
// Day 8/365 => Need fixing
// https://www.codewars.com/kata/634420abae4b81004afefca7/

// This kata still get time out, and need fixing

/* getEvil = BigInt => BigInt */

function getEvil(n) {
    n = BigInt(n); // Konversi ke BigInt karena n bisa sangat besar
    let count = 0n; // Counter bilangan evil yang ditemukan
    let num = 0n; // Mulai dari bilangan 0

    while (true) {
        // Hitung jumlah '1' di representasi biner
        let binary = num.toString(2);
        let ones = [...binary].filter(bit => bit === '1').length;

        // Jika jumlah '1' genap, maka bilangan ini adalah bilangan evil
        if (ones % 2 === 0) {
            count++;
        }

        // Jika sudah mencapai bilangan evil ke-n, kembalikan hasil
        if (count === n) {
            return num;
        }

        num++; // Lanjut ke angka berikutnya
    }
}

console.log(
    getEvil(3)
);

const varExample = 5
console.log(
    varExample.toString(2)
);

