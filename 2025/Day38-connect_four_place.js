// FMP Track Coding Chalenge 2025
// Day 38/365
// https://www.codewars.com/kata/5864f90473bd9c4b47000057/

function connect_four_place(columns) {
    const rowState = Array(7).fill(5); // Setiap kolom mulai dari baris ke-5 (bawah)
    const result = Array.from({ length: 6 }, () => Array(7).fill('-'));

    for (let i = 0; i < columns.length; i++) {
        const col = columns[i];
        const row = rowState[col];
        const player = i % 2 === 0 ? 'Y' : 'R';
        result[row][col] = player;
        rowState[col] -= 1;
    }

    return result;
}



const columns = [0, 1, 2, 5, 6, 2, 0, 0]

console.log(
    connect_four_place(columns)
);
