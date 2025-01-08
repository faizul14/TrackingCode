// FMP Track Coding Chalenge 2024
// Day 107/366
// https://www.codewars.com/kata/559a28007caad2ac4e000083/

function perimeter(n) {
    if(n <= 0) return 4
    const kotak = [1, 1]
    while (kotak.length <= n) {
        const nexValue = kotak[kotak.length - 1] + kotak[kotak.length - 2]
        kotak.push(nexValue)
        // break
    }
    return 4 * (kotak.reduce((acc, el) => acc += el, 0))

    // return ... fib...
}


console.log(
    perimeter(5)
);
