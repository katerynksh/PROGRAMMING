const stringToEncrypt = `Hello, World!`
let key = 53
function caesarCode (text, key) {
    const abs = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,
                `o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`,`A`,`B`,
                `C`,`D`,`E`,`F`,`G`,`H`,`I`,`J`,`K`,`L`,`M`,`N`,`O`,`P`,
                `Q`,`R`,`S`,`T`,`U`,`V`,`W`,`X`,`Y`,`Z`]

let result = ' '
console.log(abs.length)
for (let i = 0; i < text.length; i++) {    
    const newIndex = (abs.indexOf(text[i]) + key) % abs.length
    result += abs[newIndex] 
}
    return result
}
const ciphered = caesarCode(stringToEncrypt, key)
console.log(ciphered)
