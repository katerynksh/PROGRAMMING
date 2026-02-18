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
const readFile = createReadStream(
    'book.txt',
    {
        encoding: 'utf8',
        flag: 'r'
    }
);

let allSymbols = 0;
const counters = {};
const words = {};
readFile.on('data', (chunk) => {
    allSymbols += chunk.length;
    // console.log("Chunk => ", chunk);
    console.log("All symbols => ", allSymbols);
    for (let i = 0; i < chunk.length; i++) {
        if (counters[chunk[i]] === undefined) {
            counters[chunk[i]] = 0
        }
        counters[chunk[i]] += 1;
    // }
    // for (let i = 0; i < chunk.length; i++) {
    //     if (chunk[i] === ' ' || chunk[i] === '\n') {
    //         continue;
    //     }
    //     if (words[chunk[i]] === undefined) {
    //         words[chunk[i]] = 0
    //     }
    //     words[chunk[i]] += 1;
    // }

    const entries = Object.entries(counters);
    const sortedEntries = entries.sort((a, b) => b[1] - a[1]);
    const wordEntries = Object.entries(words);
    
console.log("Numbers of each symbol:");
console.table(sortedEntries);
console.log("Numbers of each word:");
console.table(wordEntries);
});

