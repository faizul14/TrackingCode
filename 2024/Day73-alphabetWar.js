// FMP Track Coding Chalenge 2024
// Day 73/366
// https://www.codewars.com/kata/59377c53e66267c8f6000027/

const leftSideLetterPower = {
   w: 4,
   p: 3,
   b: 2,
   s: 1,
}
const rightSideLetterPower = {
   m: 4,
   q: 3,
   d: 2,
   z: 1,
}
const leftSideLetterSoldier = 'wpbs'
const rightSideLetterSoldier = 'mqdz'

const letterFightWhoWin = (letterSoldier, leftOrRight) => {
   return letterSoldier
      .reduce((acc, el) => acc += leftOrRight[el], 0)
}

const clasificationSoldier = (soldier, leftOrRight) => soldier.split('').filter(el => leftOrRight.includes(el))

function alphabetWar(fight) {
   let rightSoldier = clasificationSoldier(fight, rightSideLetterSoldier)
   let leftSoldier = clasificationSoldier(fight, leftSideLetterSoldier)
   rightSoldier = letterFightWhoWin(rightSoldier, rightSideLetterPower)
   leftSoldier = letterFightWhoWin(leftSoldier, leftSideLetterPower)

   // return "Let's fight again!";
   return leftSoldier == rightSoldier ? "Let's fight again!" : rightSoldier > leftSoldier ? 'Right side wins!' : 'Left side wins!'
}


// get this solution on discussion, and very clever, i like it
const alphabetWar = (fight) => {
   const letterPower = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 }
   const fighyResult = fight.split('').reduce((acc, el) => acc += (letterPower[el] || 0), 0)
   return fighyResult ? (fighyResult > 0 ? 'Right' : 'Left') + " side wins!" : "Let's fight again!"
}

console.log(
   alphabetWar('zdqmwpbs')
);
