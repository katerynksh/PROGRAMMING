const fs = require('fs');

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

// console.log(counters)
// console.table(Object.entries(counters))