"use strict"

let writeAttractions = (name, description, area, type) => {
    let areaName = ""
    if (area === 1) {
        areaName = "Main Street USA";
    } else if (area === 2) {
        areaName = "Adventureland";
    } else if (area === 3) {
        areaName = "Frontierland";
    } else if (area === 4) {
        areaName = "Liberty Square";
    } else if (area === 5) {
        areaName = "Fantasyland";
    } else if (area === 6) {
        areaName = "Tomorrowland";
    } else if (area === 7) {
        areaName = "Cinderella Castle";
    };

    let typeName = ""
    if (type === 1) {
        typeName = "Ride";
    } else if (type === 2) {
        typeName = "Restaurants";
    } else if (type === 3) {
        typeName = "Show";
    } else if (type === 4) {
        typeName = "Vendor";
    } else if (type === 5) {
        typeName = "Character Meets";
    } else if (type === 6) {
        typeName = "Animals";
    } else if (type === 7) {
        typeName = "Game";
    } else if (type === 8) {
        typeName = "Special Events"
    };

    let att = 
    `<div class="border border-primary m-2 p-3 rounded">
    <p>Location: ${areaName}</p>
    <hr>
    <h1 class="">${name}</h1>
    <p>${description}</p>
    <hr>
    <p class>Type: ${typeName}</p>
    </div>`

    return att;
}

module.exports = { writeAttractions }