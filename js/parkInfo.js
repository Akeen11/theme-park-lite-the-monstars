let db = require("./db-calls.js");
let writeInfo = require("./info.js")

let parkInfo = {};

db.fetchParkInfo()
    .then((result) => {
        parkInfo = result
        result.forEach(item => {
            writeInfo.writeInfo(item.name, item.location, item.hours, item.description);
        })
    })

module.exports = parkInfo 