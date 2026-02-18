// const fs = require('node:fs/promises');

// async function readFile() {
//   const txt = await fs.readFile(
//     'book.txt', { encoding: 'utf8' }
// );
//     console.log("DONE");
// }
// fs.readFile('book.txt', { encoding: 'utf8' },)
//     .then(data => {
//         console.log("data => ", data);
//         return data[0];
//     })
    
//     .catch(err => {
//         console.log(err);
//     });
//     console.log("2222");


const myPromise = new Promise((resolve, reject) => {
    reject('Error!');
    // resolve('True!');
})
myPromise.then((data) => {
    console.log("data => ", data);
})
console.log()