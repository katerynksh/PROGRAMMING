import { createReadStream, createWriteStream } from 'node:fs';
import { Transform } from 'node:stream';

const removeSpaces = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, String(chunk).replaceAll('. ', '\n'));
    
    
    }
});

const readFile = createReadStream('book.txt',);
const writeFile = createWriteStream('output.txt',);

readFile.pipe(removeSpaces).pipe(writeFile);

// readFile.on('data', (chunk) => {
//     console.log("Chunk => ", chunk);
//     writeFile.write(chunk);
// });

// readFile.on('close', (close) => {
//     console.log("File closed", close);
// });

// readFile.on('end', (end) => {
//     console.log("End of file", end);
// });