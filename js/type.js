"use strict"

let writeType = (name) => {
    let uppercaseFirstLetter = name.charAt(0).toUpperCase();
    let stringWithoutFirstLetter = name.slice(1)

    let word = uppercaseFirstLetter + stringWithoutFirstLetter
    return `<h1>${word}</h1>`
    
}

module.exports = { writeType };