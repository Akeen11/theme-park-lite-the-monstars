"use strict"

let db = require("./db-calls.js");
let writeArea = require ("./area")

let parkArea = {};

db.fetchAreas()
   .then((result) => {
    parkArea = result;
    parkArea.forEach(key => {
        document.getElementById("areas").innerHTML += writeArea.writeArea(key.colorTheme, key.name, key.description);
    })
});

module.exports = parkArea