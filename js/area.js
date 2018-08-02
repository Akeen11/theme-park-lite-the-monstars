"use strict"

let rideTypes = require("./parkType")

let writeArea = (color, name, description, rideTypes) => {
    let area = `
    <div style = "background-color:#${color}" class="text-white m-2 p-3 rounded">
    <h1>${name}</h1>
    <p>${description}</p>
    <div class="attractionTypes">${rideTypes}</div>
    </div>`;

    return area;
}

module.exports = { writeArea };