// FMP Track Coding Chalenge 2024
// Day 36/366 => masih dirty code (karena debugging), see todo
// https://www.codewars.com/kata/550f22f4d758534c1100025a/

// TODO
// Next time => Clean code and find eficiency code on this algoritma
const arrah = {
    north: 1,
    south: -1,
    west: 2,
    east: -2,
}

console.log(
    arrah.north
);

function dirReduc(arr) {
    // ...
    let lopping = 0

    let count = 0
    while (lopping < 15) {
        count++

        for (let i = 0; i < arr.length - 1; i++) {
            const helper = arr[i].toLowerCase()
            // console.log(
            //     arrah[arr[i].toLowerCase()]
            // );
            const compare = arrah[arr[i].toLowerCase()] + arrah[arr[i + 1].toLowerCase()]
            console.log(
                compare
            );
            console.log(arr.length);
            if (compare === 0) {
                console.log(i, i + 1);
                console.log(arr[i], arr[i + 1]);
                arr.splice(i, 1)
                arr.splice(i, 1)
                break
            }

            // if (i === arr.length - 1) {
            //     lopping = false
            // }
        }
        console.log(arr);
        lopping++
        // lopping = false
        console.log(count);
    }
    console.log(
        arr
    );
}

console.log(
    dirReduc(
        ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
    )
);

