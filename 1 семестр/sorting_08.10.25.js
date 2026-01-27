console.log("_______________________________________")
let numArr = []
for (let i = 0; i < 20; i++) 
{
    numArr[i] = Math.round(Math.random() * 100 - 50);
}
console.log(`vidro:`, numArr)
console.log("_______________________________________")

let i = 1
function sorting(vidro) 
{
    for(let star = 0; star < vidro.length - 1; star++) 
    {
        for(let i = star + 1; i < vidro.length; i++) 
        {
            if(vidro[star] > vidro[i]) 
            {
                let temp = vidro[star]
                vidro[star] = vidro[i]
                vidro[i] = temp
            }
        }
    }
    return vidro
}

console.log("sorted vidro:", sorting(numArr))
console.log("_______________________________________")
