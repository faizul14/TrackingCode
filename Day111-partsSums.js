
// this solution succes, but get on time limit, need tunning performance
function partsSums(ls) {
    // your code
    const kumArr = []
    const result = []
    for(let i in ls){
        i
        const tempArr = ls.slice(+i)
        kumArr.push(tempArr)
    }
    for(let i in kumArr){
        i
        const reduce = kumArr.reduce((acc, el) => acc += el[i] || 0 , 0)
        result.push(reduce)
    }
    result.push(0)


    kumArr
    return result
}

// this solution after tunning performance, and very weel, -> colaborator by Ai(GPT)
function partsSums(ls) {
    const result = [];
    let sum = ls.reduce((acc, el) => acc + el, 0); // Hitung total sum dari semua elemen
    sum

    result.push(sum); // Tambahkan total sum sebagai elemen pertama
    result

    // Hitung akumulasi secara mundur
    for (let i = 0; i < ls.length; i++) {
        sum -= ls[i]; // Kurangi elemen saat ini dari sum
        console.log(ls[i]);   
        sum
        result.push(sum); // Simpan hasil yang diperbarui
        result
    }

    result

    return result;
}



console.log(
    partsSums([0, 1, 3, 6, 10])
);

let example = [0, 1, 3, 6, 10]
let afterSlice = example.slice(2)
console.log(
    example,
    afterSlice
);

