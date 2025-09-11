// let sampleArr = ['A', 'B', 'C']

// console.log(sampleArr.slice(0, 0), sampleArr.slice(1));


const permutation = (arr) => {
    const result = []

    const backtracking = (value, tempArr) => {
        if (tempArr.length === 0) {
            result.push(value)
            return
        }

        for (let i = 0; i < tempArr.length; i++) {
            let newValue = [...value, tempArr[i]]
            let newTempArr = [...tempArr.slice(0, i), ...tempArr.slice(i + 1)]
            backtracking(newValue, newTempArr)
        }
    }

    
    
    backtracking([], arr)
    return result
}

console.log(
    permutation(['A', 'B', 'C'])
);
