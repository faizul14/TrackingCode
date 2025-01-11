// FMP Track Coding Chalenge 2025
// Day 7/365
// https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763/

var SequenceSum = (function () {
  function SequenceSum() { }

  SequenceSum.showSequence = function (count) {
    // for
    //while
    if (count === 0) return '0=0'
    if (count < 0) return `${count}<0`
    let result = []
    while (count >= 0) {
      result.push(count)
      count--
    }
    const sumResult = result.reduce((acc, el) => acc += el, 0)
    result = result.reverse().join('+')
    return result.concat(` = ${sumResult}`)
  };

  return SequenceSum;

})();

console.log(
  SequenceSum.showSequence(6)
);
