"use strict"

let attractions = require("./parkAttractions")
let area = require("./parkArea")

let loop = () => {
    for (key in area) {
        for(attractions in area[key]) {
        }
    }
}

module.exports = loop


