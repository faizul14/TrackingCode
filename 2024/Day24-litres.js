// FMP Track Coding Chalenge 2024
// Day 24/366
// https://www.codewars.com/kata/582cb0224e56e068d800003c/

// function litres(time) {
//     const literPerTimer = 0.5
//     time = Math.floor(time) * literPerTimer
//     return time < 1 ? 0 : Math.floor(time);
// }

// const litres = time => Math.floor(time) * 0.5 < 1 ? 0 : Math.floor(time * 0.5)

const litres = time => Math.floor(time / 2)

console.log(litres(11.8));
