const toFilter = [3, 5, 6, -1, -7, 12, `lalala`, null, undefined, -0.5, -9, `Tanya`, `42`, ]

function negativeFiltering(arr =[]) {

    const negativeNumber = []

    if(!Array.isArray(arr)){
        return `Це не масив`
    }
    else console.log("Оригінальний масив:",arr)

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativeNumber.push(arr[i])
        }
    }
    return negativeNumber
}
const a = negativeFiltering(toFilter)
console.log(`від'ємні числа:`, a)