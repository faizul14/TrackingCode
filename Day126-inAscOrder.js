// FMP Track Coding Chalenge 2024
// Day 126/366
// https://www.codewars.com/kata/56b7f2f3f18876033f000307/

function inAscOrder(arr) {
  // Code your algorithm here :)

  // Hmmm ... maybe we should try our luck out ...
  // if (Math.random() > 0.5) {
  //  return true;
  // } else {
  //  return false;
  // }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false
  }
  return true
}

console.log(
  inAscOrder([1, 2, 4, 7, 19])
);
