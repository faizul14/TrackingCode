// FMP Track Coding Chalenge 2024
// Day 87/366 => STILL NEED FIXING
// https://www.codewars.com/kata/58663693b359c4a6560001d6/

// 0 = Tempat yang aman untuk berjalan
// 1 = Dinding
// 2 = Titik Awal
// 3 = Titik Akhir

// Aturan
// Bahasa Indonesia: 1. Susunan Labirin akan selalu berbentuk persegi, yaitu N x N, tetapi ukuran dan isinya akan berubah dari satu pengujian ke pengujian lainnya. 

// 2. Posisi awal dan akhir akan berubah untuk pengujian akhir. 

// 3. Susunan arah akan selalu dalam huruf kapital dan akan berada dalam format N = Utara, E = Timur, W = Barat, dan S = Selatan. 

// 4. Jika Anda mencapai titik akhir sebelum semua gerakan Anda selesai, Anda harus kembali ke Selesai. 

// 5. Jika Anda menabrak dinding atau keluar dari batas labirin, Anda harus kembali ke Mati. 

// 6. Jika Anda masih menemukan diri Anda di dalam labirin setelah menggunakan semua gerakan, Anda harus kembali ke Kalah.

/**
 *          N
 *      W       E
 *          S
 */

const kompas = { N: -1, S: 1, E: 1, W: -1 }

const findPostitionStart = (maze) => {
    const position = {
        i: 0, // vertical
        j: 0 // horizontal
    }
    maze.map((el, idx, _) => {
        if (el.indexOf(2) !== -1) {
            position.i = idx
            position.j = el.indexOf(2)
        }
    })
    return position
}

const checkPosition = (maze, position) => maze[position.i][position.j]


function mazeRunner(maze, directions) {
    console.log(
        maze,
        directions
    );

    // Code here
    const position = findPostitionStart(maze)

    for (let i of directions) {
        if (/[NS]/gi.test(i)) {
            position.i += kompas[i]
        }
        if (/[WE]/gi.test(i)) {
            position.j += kompas[i]
        }

        if ((position.i > maze.length - 1 || position.j > maze.length - 1) && (position.i !== 3 || position.j !== 3)) {
            position.j = true
            break
        }

        if ((position.j < 0 || position.j < 0) && (position.j !== 3 || position.i !== 3)) {
            position.j = true
            break
        }

        // console.log(
        //     position
        // );

        if (checkPosition(maze, position)) {
            console.log('');
            break
        }
        // break
    }
    position
    const checkResult = position.j === true ? 1 : maze[position.i][position.j]
    checkResult

    return checkResult === 3 ? 'Finish' : checkResult === 1 ? 'Dead' : 'Lost'
}



const maze = [
    // [1, 1, 1, 1, 1, 1, 1],
    // [1, 0, 0, 0, 0, 0, 3],
    // [1, 0, 1, 0, 1, 0, 1],
    // [0, 0, 1, 0, 0, 0, 1],
    // [1, 0, 1, 0, 1, 0, 1],
    // [1, 0, 0, 0, 0, 0, 1],
    // [1, 2, 1, 0, 1, 0, 1]

    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 3, 1, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 2, 1]
]

console.log(
    // mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"])
    // mazeRunner(maze, ["N", "N", "N", "W", "W"])
    // (mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "S", "S", "S", "S", "S", "S"]))

    mazeRunner(maze, [
        'N', 'N', 'N', 'N', 'N',
        'N', 'N', 'N', 'N', 'S',
        'S', 'S', 'S', 'S', 'S',
        'S', 'S', 'S'
    ])

);


// console.log(
//     maze[6].indexOf(0)
// );

// console.log(
//     findPostitionStart(maze)
// );

console.log(
    checkPosition(maze, position = { i: 4, j: 2 })
);

/**
 *          N
 *      w       E
 *          S
 */

// const done1 = () => {
//     [
//         [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
//         [1, 3, 1, 0, 1, 0, 0, 0, 0, 1],
//         [1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
//         [1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
//         [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
//         [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
//         [1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
//         [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
//         [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
//         [1, 1, 1, 0, 1, 1, 1, 1, 2, 1]
//     ]

// }

// const dataax0 = [ // Finish
//     'N', 'N', 'N', 'W', 'W',
//     'W', 'N', 'N', 'W', 'W',
//     'S', 'S', 'S', 'S', 'W',
//     'W', 'N', 'N', 'N', 'N',
//     'N', 'N', 'N'
// ]

// const dataax1 = [ // LOST
//     'N', 'N', 'N', 'N',
//     'N', 'N', 'N', 'N',
//     'W', 'W', 'W', 'S',
//     'W', 'W', 'N'
// ]

// const dataax2 = [// DEAD
//     'N', 'N', 'N', 'N',
//     'N', 'E', 'E', 'S',
//     'S', 'S', 'S', 'S',
//     'S'
// ]

// const dataax3 = ['N', 'W', 'W', 'W', 'W'] // DEAD

// const dataax4 = [
//     'N', 'N', 'N', 'N', 'N',
//     'N', 'N', 'N', 'N', 'S',
//     'S', 'S', 'S', 'S', 'S',
//     'S', 'S', 'S'
// ]
