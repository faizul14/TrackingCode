// FMP Track Coding Chalenge 2025
// Day 41/365
// https://www.codewars.com/kata/540d0fdd3b6532e5c3000b5b/

function expand(expr) {
    // Parse the input
    // Format: (ax+b)^n or (ax-b)^n or (x+b)^n or (-x-b)^n etc.
    const regex = /\(([-+]?\d*)([a-z])([-+]\d+)\)\^(\d+)/;
    const match = expr.match(regex);

    if (!match) return "";

    let [, aStr, variable, bStr, nStr] = match;

    // Parse a
    let a;
    if (aStr === "" || aStr === "+") a = 1;
    else if (aStr === "-") a = -1;
    else a = parseInt(aStr, 10);

    // Parse b
    let b = parseInt(bStr, 10);

    // Parse n
    let n = parseInt(nStr, 10);

    // Special case: power 0
    if (n === 0) return "1";

    // Helper: factorial and nCr
    const factorial = [1];
    for (let i = 1; i <= n; i++) factorial[i] = factorial[i - 1] * i;

    function nCr(n, r) {
        return factorial[n] / (factorial[r] * factorial[n - r]);
    }

    const terms = [];

    for (let k = 0; k <= n; k++) {
        const coeff = nCr(n, k) * Math.pow(a, n - k) * Math.pow(b, k);
        const power = n - k;

        if (coeff === 0) continue;

        let coeffStr = "";
        if (power === 0) {
            // power 0, only coefficient
            coeffStr = coeff.toString();
        } else {
            // power > 0
            if (coeff === 1) coeffStr = "";
            else if (coeff === -1) coeffStr = "-";
            else coeffStr = coeff.toString();

            coeffStr += variable;

            if (power > 1) coeffStr += "^" + power;
        }

        terms.push(coeffStr);
    }

    // Join terms, fix signs
    // The terms array contains terms with signs in coeffStr (if negative)
    // We'll join by + but replace +- with -

    let result = terms.join("+");

    // Fix signs: replace "+-" with "-"
    result = result.replace(/\+\-/g, "-");

    return result;
}
