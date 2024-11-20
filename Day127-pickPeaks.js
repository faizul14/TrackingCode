// FMP Track Coding Chalenge 2024
// Day 127/366 => Need fixing
// https://www.codewars.com/kata/5279f6fe5ab7f447890006a7/

// function pickPeaks(arr) {
//     const result = {
//         pos: [],
//         peaks: []
//     }
//     let bareMin = Math.min(...arr)
//     let bareMax = Math.max(...arr)
//     bareMax
//     bareMin
//     const arrTemp = arr.join('').split(bareMin)
//         .map(el => {
//             const max = Math.max(...el)
//             if (/[0-9]/.test(max)) {
//                 result.pos.push(max)
//                 result.peaks.push(arr.lastIndexOf(max))
//             }
//         })

//     // result.pos.push(1)

//     result


//     arrTemp

//     console.log(
//         arr.indexOf(bareMax)
//     );




//     //  return {pos:[],peaks:[]}
// }

function pickPeaks(arr) {
    let bareMin = arr[0]
    let bareMax = {
        pos: 0,
        peaks: arr[0]
    }
    const result = {
        pos: [],
        peaks: []
    }

    for (let i = 1; i < arr.length; i++) {
        i
        if (arr[i] < bareMin) {
            bareMin = arr[i]
        }

        if (arr[i] > bareMax.peaks) {
            i
            bareMin
            bareMin = bareMax.peaks
            bareMax.peaks = arr[i]
            bareMax.pos = i
        }

        if (arr[i] <= bareMin && bareMax.pos !== 0) {
            i
            result.pos.push(bareMax.pos)
            result.peaks.push(bareMax.peaks)

            bareMax.pos = 0
            bareMax.peaks = 0
        }
    }

    bareMax
    bareMin

    result


    return result
}

console.log(
    // pickPeaks([1, 2, 3, 6, 4, 1, 2, 3, 2, 1])
    // pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3])
    // pickPeaks([2, 1, 3, 2, 2, 2, 2, 5, 6])
    pickPeaks([2, 1, 3, 1, 2, 2, 2, 2, 1])
);
