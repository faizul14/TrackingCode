// FMP Track Coding Chalenge 2024
// Day 105/366
// https://www.codewars.com/kata/54d512e62a5e54c96200019e/

// const isPrime = digit => {
//     for (let i = digit - 1; i > 1; i--) {
//         if (digit % i === 0) return false
//     }
//     return true
// }

const isPrime = digit => {
    if (digit < 2) return false
    for (let i = 2; i * i <= digit; i++) {
        if (digit % i === 0) return false
    }
    return true
}


const decomposision = (digit, prime) => {
    const result = {
        afterDecpoposision: digit,
        resultDecomposision: ''
    }
    const p1 = prime
    let n1 = 0
    while (true) {
        if (digit % p1 !== 0) break
        digit = digit / p1
        n1++
    }
    result.afterDecpoposision = digit
    result.resultDecomposision = n1 > 1 ? `(${p1}**${n1})` : `(${p1})`
    return result

}

// function primeFactors(n) {
//     //your code here
//     let result = ''
//     let digitIncrement = 2
//     while (n >= digitIncrement) {
//         if (isPrime(digitIncrement) && n % digitIncrement === 0) {
//             const decompose = decomposision(n, digitIncrement)
//             result = result.concat(decompose.resultDecomposision)
//             n = decompose.afterDecpoposision
//         }
//         digitIncrement++
//     }
//     return result
// }

function primeFactors(n) {
    let result = ''
    let digitIncrement = 2
    while (digitIncrement * digitIncrement <= n) {
        if (isPrime(digitIncrement) && n % digitIncrement === 0) {
            const decompose = decomposision(n, digitIncrement)
            result = result.concat(decompose.resultDecomposision)
            n = decompose.afterDecpoposision
        }
        digitIncrement++
    }
    if (n > 1) {
        // Jika sisa n lebih besar dari 1, berarti itu adalah faktor prima
        result = result.concat(`(${n})`)
    }
    return result
}

// this solution after optimasi, and very redeable and performansi very well
function primeFactors(n) {
    let result = '';
    let digitIncrement = 2;

    // Loop untuk mencari faktor dari bilangan n
    while (digitIncrement * digitIncrement <= n) {
        let count = 0;
        // Hitung eksponen dari faktor digitIncrement
        while (n % digitIncrement === 0) {
            n = n / digitIncrement;
            count++;
        }
        // Jika count lebih dari 0, tambahkan ke hasil
        if (count > 0) {
            result += count > 1 ? `(${digitIncrement}**${count})` : `(${digitIncrement})`;
        }
        digitIncrement++;
    }

    // Jika sisa n lebih besar dari 1, maka itu adalah faktor prima terakhir
    if (n > 1) {
        result += `(${n})`;
    }

    return result;
}



console.log(
    primeFactors(86240)
);