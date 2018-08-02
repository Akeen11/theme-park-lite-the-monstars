"use strict"

let db = require("./db-calls.js");
let writeType = require("./type");

let parkTypes = {};

db.fetchTypes()
    .then((result) => {
        parkTypes = result
        parkTypes.forEach(key => {
            document.getElementById("attractionTypes").innerHTML += writeType.writeType(key.name);
        return parkTypes
        })
    }).then((result) => {
        // console.log("parkTypes from parkTypes.js", result)
    })
    ;

module.exports = parkTypes