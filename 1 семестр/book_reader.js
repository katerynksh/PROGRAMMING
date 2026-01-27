const fs = require('fs');
const { Readline } = require('readline/promises');
const SYMBOLS_PER_PAGE = 120 * 80;
const data = fs.readFileSync (
    'book.txt',
    {
        encoding: 'utf8',
        flag: 'r'
    }
);

//функція рахує кількість сторінок у книзі
function countPages (symbolsInBook, symbolsOnPage) {
    if (typeof symbolsInBook !== `number` || typeof symbolsOnPage !== `number`) {
        return 0
    } 
    if (symbolsOnPage == 0 || symbolsOnPage == null) {
        return 0  
    }
    return Math.ceil(symbolsInBook/Math.abs(symbolsOnPage))    
}

//функція повертає текст сторінки за її номером
function getPage(book, pageNumber) {
    const startIndex = SYMBOLS_PER_PAGE * (pageNumber - 1);
    const maybeEndIndex = SYMBOLS_PER_PAGE * pageNumber;
    const endIndex = Math.max(
        book.lastIndexOf(' ', maybeEndIndex),
        book.lastIndexOf('\n', maybeEndIndex)
    );
    if (endIndex <= startIndex) {
        return book.slice(startIndex, maybeEndIndex);
    } 
    return book.slice(startIndex, endIndex);
}
//якщо ввести номер сторінки більше ніж є в книзі, або менше 1, 
//то користувача повідомлять, що такої сторінки немає
function pagesText(data, pageNumber) {
    if (pageNumber > countPages(data.length, SYMBOLS_PER_PAGE) || pageNumber < 1) {
        const answer = `Ваш запит: ` + pageNumber + `. Такої сторінки не існує. Всього сторінок: ` + countPages(data.length, SYMBOLS_PER_PAGE);
        return answer;
    }
    return getPage(data, pageNumber);
}
// const pagesCount = countPages(data.length, SYMBOLS_PER_PAGE)
// console.log(pagesCount);
//const pageText = getPage(data, pageNumber);
const pageText = pagesText(data, 10);
console.log(pageText);
