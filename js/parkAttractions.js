"use strict"

let db = require("./db-calls");
let writeAttractions = require ("./attractions")

let parkAttractions = {};

db.fetchAttractions()
.then((result) => {
    parkAttractions = result;
    parkAttractions.forEach(key => {
        document.getElementById("attractionsFull").innerHTML += writeAttractions.writeAttractions(key.name, key.description);
    })
});

module.exports = parkAttractions