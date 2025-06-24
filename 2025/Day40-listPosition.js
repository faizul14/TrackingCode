// FMP Track Coding Chalenge 2025
// Day 40/365
// https://www.codewars.com/kata/53e57dada0cb0400ba000688/

function listPosition(word) {
    const length = word.length;
    const letters = word.split('');

    // Precompute factorials up to length 25
    const factorial = [1];
    for (let i = 1; i <= length; i++) {
        factorial[i] = factorial[i - 1] * i;
    }

    // Count frequency of each letter in the word
    const freq = {};
    for (const ch of letters) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    // Helper: compute permutations count given freq map
    function permutationsCount(freq) {
        let denom = 1;
        let total = 0;
        for (const c in freq) {
            total += freq[c];
            denom *= factorial[freq[c]];
        }
        return factorial[total] / denom;
    }

    let rank = 1; // 1-based rank

    for (let i = 0; i < length; i++) {
        const current = letters[i];

        // For all letters smaller than current letter
        for (let c = 'A'.charCodeAt(0); c < current.charCodeAt(0); c++) {
            const ch = String.fromCharCode(c);
            if (freq[ch] > 0) {
                freq[ch]--; // use this smaller letter here

                // count how many permutations can be formed with remaining letters
                rank += permutationsCount(freq);

                freq[ch]++; // restore freq
            }
        }
        freq[current]--;
    }

    return rank;
}
