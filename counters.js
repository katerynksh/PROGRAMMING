const fs = require('fs');

const data = fs.readFileSync(
    '2.txt',
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

console.log(counters)
console.table(Object.entries(counters))