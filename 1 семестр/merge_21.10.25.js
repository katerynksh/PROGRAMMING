// function merge(arr1, arr2)  {
//     let i = 0
//     let j = 0
//     let result = []
//     while (i < arr1.length && j < arr2.length)  {
//         if (arr1[i] < arr2[j])  {
//             result.push (arr1[i])
//             i++
//         }
//         else {
//             result.push(arr2[j])
//             j++
//         }
//     }
//     if (i < arr1.length){
//         for (let r = i; r < arr1.length; r++)   {
//             result.push(arr1[r])
//         }

//     }
//     if (j < arr2.length){
//         for (let t = j; t < arr2.length; t++) {
//             result.push(arr2[t])
//         }
//     }
//     return result
// }

// function mergeSort (arr){
//     if (arr.length == 0){
//         return []
//     }

//     if (arr.length == 1) {
//         return arr
//     }

//     const middleIndex = Math.round(arr.length / 2)
//     const arr1 = arr.slice(0, middleIndex)
//     const arr2 = arr.slice(middleIndex, arr.length)
    
//     console.log({middleIndex, arr1, arr2})
//     return merge(mergeSort(arr1), mergeSort(arr2))
// }
   
// const sorted = mergeSort([2, -9, 8, 19,])
// console.log(sorted)






import { createReadStream } from 'node:fs';
import { exit } from 'node:process';
import path from 'path'

const parsed = path.parse(process.argv[1]);

if (!process.argv[2]) {
  console.log(`Роззуй очі!: node ${parsed.base} <input file name>`)
  exit(0);
}

const readFile = createReadStream(process.argv[2],
    {
        encoding: 'utf8',
        flag: 'r',
        highWaterMark: 10
    }
);

let allSymbols = 0;
const counters = {};

let allWords = 0
const wordCount = {}
let zalyshok = [''];

readFile.on('data', (chunk) => {
    allSymbols += chunk.length;
    chunk = zalyshok[0] + chunk;
    console.log("z -> ", zalyshok[0]);
    console.log("c -> ", chunk);
    // console.log("Chunk => ", chunk);
    // console.log("All symbols in chunk => ", allSymbols);

    for (let i = 0; i < chunk.length; i++) {
        if (counters[chunk[i]] === undefined) {
            counters[chunk[i]] = 0
        }
        counters[chunk[i]] += 1;
    }
 
    // \p{L} - будь-яка буква (Unicode)
    // \p{N} - будь-яка цифра
    // [^\p{L}\p{N}]+ - шукаємо групи символів, що НЕ є буквами чи цифрами

    const words = chunk
    .toLowerCase()
    .split(/[^\p{L}\p{N}]+/u)
    .filter(word => word.length > 0);
        

    //zalyshok - last element; words = array with words to count
    zalyshok =words.length > 1 ? words.splice(-1) : [""];
    console.log(words)
    //
    allWords += words.length;

    for (const word of words) {
    //for (let word = 0; word < chunk.length; word++) {
        if (wordCount[word] === undefined){
            wordCount[word] = 0
    }
    wordCount[chunk[word]] += 1;
    }
});

readFile.on('end', () => {
// console.table(Object.entries(counters).sort((a, b) => b[1] - a[1]))

    const sortedSymbols = Object.entries(counters).sort((a, b) => b[1] - a[1]);
    const sortedWords = Object.entries(wordCount).sort((a, b) => b[1] - a[1]);
        
    console.log("Numbers of each symbol:");
    console.table(sortedSymbols);

    console.log("Number of all words:", + allWords)
    console.table("Number of every word:" + sortedWords)
});
