"use strict"

let writeAttractions = (name, description) => {
    let att = 
    `<h1>${name}</h1>
    <p>${description}</p>`

    return att;
}

module.exports = { writeAttractions }