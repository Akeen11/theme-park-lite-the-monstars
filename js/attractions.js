"use strict"

let writeAttractions = (name, description) => {
    let att = 
    `<div class="border border-primary m-2 p-3 rounded">
    <h1 class="">${name}</h1>
    <p>${description}</p>
    </div>`

    return att;
}

module.exports = { writeAttractions }