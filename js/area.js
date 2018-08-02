"use strict"

let writeArea = (color, name, description) => {
    let area = `
    <div style = "background-color:#${color}" class="text-white m-2 p-3 rounded">
    <h1>${name}</h1>
    <p>${description}</p>
    </div>`;

    return area;
}

module.exports = { writeArea };