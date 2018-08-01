"use strict"

let writeArea = (color, name, description) => {
    let area = `
    <div style = "background-color:#${color}">
    <h1>${name}</h1>
    <p>${description}</p>
    </div>`;

    return area;
}

module.exports = { writeArea };