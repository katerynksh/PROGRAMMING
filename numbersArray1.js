let numArr = []
for(let i = 0 ; i < 10; i++) {
    numArr[i] = Math.round(Math.random() * 100 - 50)
}
console.log(numArr)

let i = 1


function sorting(vidro) {

for(let j = 0; j < numArr.length - 1; j++) {
    for(let i = j + 1; i < numArr.length; i++) {
        if(numArr[j] >= numArr[i]) {
            let temp = numArr[j]
            numArr[j] = numArr[i]
            numArr[i] = temp
        }
    }
}
}
return i
console.log(numArr)