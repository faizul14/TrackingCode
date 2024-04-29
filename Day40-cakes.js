// FMP Track Coding Chalenge 2024
// Day 41/366
// https://www.codewars.com/kata/525c65e51bf619685c000059/

function cakes(recipe, available) {
    let result = []
    const recipeKey = Object.keys(recipe)
    const availableKey = Object.keys(available)

    if (recipeKey.length > availableKey.length) {
        return 0
    }

    for (let i = 0; i < recipeKey.length; i++) {
        if (!availableKey.includes(recipeKey[i])) {
            return 0
        }

        if (recipe[recipeKey[i]] > available[i]) {
            return 0
        }

        result.push(Math.floor(available[recipeKey[i]] / recipe[recipeKey[i]]))
    }
    return Math.min(...result)
}

// this solution get insighth from discusion after submit and like it
const cakes = (recipe, available) => {
    return Math.min(
        ...Object.keys(recipe).map((el) => {
            return Math.floor(available[el] / recipe[el] || 0)
        })
    )
}

// this solution same with above an make like one liner
// const cakes = (recipe, available) => Math.min(...Object.keys(recipe).map((el) => Math.floor(available[el] / recipe[el] || 0)))

// const recipe = { flour: 500, sugar: 200, eggs: 1 };
// const available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
const recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
const available = { sugar: 500, flour: 2000, milk: 2000 };
console.log(
    cakes(
        recipe, available
    )
);