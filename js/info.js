"use strict"

let writeInfo = (name, location, opening, closing, description) => {
    let block = `<h1>${name}</h1>
    <h2>${location}<h2>
    <h2>Open: ${opening} - Close: ${closing}</h2>
    <p>${description}</p>`;

    document.getElementById("welcome").innerHTML = block
}



module.exports = { writeInfo };