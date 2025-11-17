const fs = require('fs');
const SYMBOLS_PER_PAGE = 120 * 80;

const data = fs.readFileSync(
    'book.txt',
    {
        encoding: 'utf8',
        flag: 'r'
    }
);

function countPages(symbolsInBook, symbolsOnPage){
    if(typeof symbolsInBook !== `number` || typeof symbolsOnPage !== `number`){
        return 0
    }
            
    if(symbolsOnPage == 0 || symbolsOnPage == null){
        return 0  
    }

    return Math.ceil(symbolsInBook/Math.abs(symbolsOnPage))    
}

function getPage(book, pageNumber) {
    console.log(book.slice(SYMBOLS_PER_PAGE * (pageNumber - 1), SYMBOLS_PER_PAGE * pageNumber))
//    return // page text
}


const pagesCount = countPages(data.length, SYMBOLS_PER_PAGE)
console.log(pagesCount);
const pageText = getPage(data, 1);
console.log(pageText)
