// FMP Track Coding Chalenge 2025
// Day 3/365
// https://www.codewars.com/kata/5f0ed36164f2bc00283aed07/

// This solution not work with large input, but if we use normal input, it's okay.
function overTheRoad(address, n) {
    //code here
    const addressLeftRoad = []
    const addressRightRoad = []
    for (let i = 1; i <= n; i++) {
        if (i === 1) {
            addressLeftRoad.push(i)
            addressRightRoad.push(i + 1)
            continue
        }
        addressLeftRoad.push(addressLeftRoad[addressLeftRoad.length - 1] + 2)
        addressRightRoad.push(addressRightRoad[addressRightRoad.length - 1] + 2)
    }
    addressLeftRoad.reverse()
    return address % 2 === 1 ? addressRightRoad[addressLeftRoad.indexOf(address)] : addressLeftRoad[addressRightRoad.indexOf(address)]
}

// i have found solution and verry simple with matematic konsep, and i feel stupid when i saw the solution, LOL
function overTheRoad(address, n) {
    return 2 * n - (address - 1);
}



console.log(
    overTheRoad(1, 3),
    overTheRoad(23633656673, 310027696726)
);
