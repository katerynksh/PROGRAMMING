/*const fs = require('fs');

const data = fs.readFileSync(
    'book.txt',
    {
        encoding: 'utf8',
        flag: 'r'
    }
);

const counters = {};

for (let i = 0; i < data.length; i++) {
    if (counters[data[i]] === undefined) {
        counters[data[i]] = 0
    }
    
    counters[data[i]] += 1;
}

const entries = Object.entries(counters);
const sortedEntries = entries.sort((a, b) => b[1] - a[1]);

console.log("Невідсортований масив:", counters);
console.log("Відсортований масив від більшого до меншого:");
console.table(sortedEntries);
*/




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
        highWaterMark:100
    }
);

let allSymbols = 0;
const counters = {};

let allWords = 0
const wordCount = {}

readFile.on('data', (chunk) => {
    allSymbols += chunk.length;
    // console.log("Chunk => ", chunk);
    console.log("All symbols => ", allSymbols);

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