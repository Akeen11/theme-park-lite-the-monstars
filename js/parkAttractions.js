"use strict"

let db = require("./db-calls");
let writeAttractions = require("./attractions")

let parkAttractions = {};

let writeAttactionsToDOM = () => {
    db.fetchAttractions()
        .then((result) => {
            parkAttractions = result;
            parkAttractions.forEach(key => {
                document.getElementById("attractionsFull").innerHTML += writeAttractions.writeAttractions(key.name, key.description, key.area_id, key.type_id);
            })
        });
}

module.exports = writeAttactionsToDOM