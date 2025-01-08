// FMP Track Coding Chalenge 2024
// Day 79/366
// HackerRank : https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem

function climbingLeaderboard(ranked, player) {
    // Write your code here
    ranked = [...new Set(ranked.sort((a, b) => b - a))]
    const result = []

    for (let players of player) {
        players
        for (let i = 0; i < ranked.length; i++) {

            if (players >= ranked[i]) {
                i
                result.push(ranked.indexOf(ranked[i]) + 1)
                break
            }

            if (players < ranked[ranked.length - 1]) {
                i
                result.push(ranked.length + 1)
                break
            }
        }
    }

    return result
}

// this solution after optimization, and perform very weel
function climbingLeaderboard(ranked, player) {
    // Remove duplicates and keep ranked in descending order
    ranked = [...new Set(ranked)];

    const result = [];
    let l = ranked.length;

    for (let players of player) {
        players
        // Perform binary search to find the player's rank
        let low = 0;
        let high = l - 1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (ranked[mid] <= players) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        // Since low is the index where players should be inserted,
        // the rank is low + 1
        result.push(low + 1);
    }

    return result;
}


console.log(
    // climbingLeaderboard(
    //     [100, 90, 90, 80],
    //     [40, 70, 80, 105]
    // )
    climbingLeaderboard(
        [100, 100, 50, 40, 40, 20, 10],
        [5, 25, 50, 120]
    )
);
