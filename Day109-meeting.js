// FMP Track Coding Chalenge 2024
// Day 109/366 => Need fixing
// https://www.codewars.com/kata/59df2f8f08c6cec835000012/

function meeting(s) {
    return s
        .toUpperCase()
        .split(';')
        .map(name => {
            const [first, last] = name.split(':');
            return [last, first];
        })
        .sort((a, b) => {
            if (a[0] === b[0]) {
                return a[1].localeCompare(b[1]);
            }
            return a[0].localeCompare(b[0]);
        })
        .map(name => `(${name[0]}, ${name[1]})`)
        .join('');
}

// ===== Unit Tests =====
function runTests() {
    const tests = [
        {
            input: "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill",
            expected: "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
        },
        {
            input: "Megan:Bell;Amber:Cornwell;Paul:Dorries;James:Dorny;John:Gates;Anna:Korn;Ann:Kern;Alex:Meta;Elizabeth:Russel;Lewis:Steve;Michael:Wahl",
            expected: "(BELL, MEGAN)(CORNWELL, AMBER)(DORNY, JAMES)(DORRIES, PAUL)(GATES, JOHN)(KERN, ANN)(KORN, ANNA)(META, ALEX)(RUSSEL, ELIZABETH)(STEVE, LEWIS)(WAHL, MICHAEL)"
        },
        {
            input: "John:Smith;Alice:Smith;Bob:Smith",
            expected: "(SMITH, ALICE)(SMITH, BOB)(SMITH, JOHN)"
        }
    ];

    tests.forEach(({ input, expected }, i) => {
        const result = meeting(input);
        console.assert(result === expected, `Test #${i + 1} failed.\nExpected: ${expected}\nGot: ${result}`);
    });

    console.log("All tests done.");
}

runTests();
