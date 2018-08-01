"use strict"

let writeInfo = (name, location, hours, description) => {
    let block = `<h1>${name}</h1>
    <h2>${location}<h2>
    <h2>${hours}</h2>
    <p>${description}</p>`;

    document.getElementById("welcome").innerHTML = block
}



module.exports = { writeInfo };