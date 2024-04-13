// FMP Track Coding Chalenge 2024
// Day 33/366 => still nedd fixing and this kata level 7 kyuu but fell not, LOL 
// https://www.codewars.com/kata/56d9292cc11bcc3629000533/

function testit(s) {
    const length = s.length % 2 === 0 ? (s.length / 2) : (Math.floor(s.length / 2))
    //return s?
    //return s.substr(0,1) ?
    //return s.substr(0,s.length/2) ?
    console.log(
        length
    );

    return s.substring(0, length === 0 ? 1 : length)
}

console.log(
    testit('bc'),
    testit('aaaaaa'),
    testit('a'),
    testit('hheellllo')
);


console.log(
    'z'.charCodeAt() - 96
);

console.log(
    String.fromCharCode(Math.abs((4 + 96) - (26 + 96)) + 96),
);

let a = 'abcsefghijklm'


// console.log(
//     'RevoUpdate'.substring(0, 7)
// );

// console.log(1 % 2);



// let a = 'aaa'
// console.log(
//     a.substring(0,a.length/2),

//     a.substring()
// );

// console.log(
//     Math.floor(1.5)
// );

// ==========================================================
/**
 * Test Results:
Log

-------- Basic Test --------

s=""
Test Passed: Value == '\'\''
Log
<font color="#CD7F32">s="a"</font>
a
Test Passed: Value == '\'a\''
Log
<font color="#CD7F32">s="b"</font>
b
Test Passed: Value == '\'b\''
Log
<font color="#CD7F32">s="aa"</font>
aa
Test Passed: Value == '\'a\''
Log
<font color="#CD7F32">s="ab"</font>
ab
Test Passed: Value == '\'a\''
Log
<font color="#CD7F32">s="bc"</font>
bc
Test Passed: Value == '\'b\''
Log
<font color="#CD7F32">s="aaaa"</font>
aaaa
Test Passed: Value == '\'aa\''
Log
<font color="#CD7F32">s="aaaaaa"</font>
aaaaaa
Test Passed: Value == '\'aaa\''
Log
<font color="#CD7F32">s="abab"</font>
abab
Expected: '\'aa\'', instead got: '\'ab\''
Log
<font color="#CD7F32">s="acac"</font>
acac
Expected: '\'bb\'', instead got: '\'ac\''
Log
<font color="#CD7F32">s="hheelllloo"</font>
hheelllloo
Expected: '\'hello\'', instead got: '\'hheel\''
Log
<font color="#CD7F32">s="hheellllo"</font>
hheellllo
Expected: '\'hello\'', instead got: '\'hhee\''
 */