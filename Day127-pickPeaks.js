// FMP Track Coding Chalenge 2024
// Day 127/366
// https://www.codewars.com/kata/5279f6fe5ab7f447890006a7/

const pickPeaks = arr => {
    const result = {
        pos: [],
        peaks: []
    }
    let posCandidate = null

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            // Naik, simpan kandidat
            posCandidate = i;
        } else if (arr[i] < arr[i - 1] && posCandidate !== null) {
            // Turun setelah naik, berarti fix ada peak
            result.pos.push(posCandidate);
            result.peaks.push(arr[posCandidate]);
            posCandidate = null; // reset kandidat
        }
    }
    return result
}

console.log(
    // pickPeaks([1, 2, 3, 6, 4, 1, 2, 3, 2, 1]),
    // pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3])
    // pickPeaks([2, 1, 3, 2, 2, 2, 2, 5, 6])
    // pickPeaks([2, 1, 3, 1, 2, 2, 2, 2, 1])
    // pickPeaks([1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3])
    pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1])
);
