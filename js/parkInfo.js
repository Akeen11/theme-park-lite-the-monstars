let db = require("./db-calls.js");
let writeInfo = require("./info.js")

let parkInfo = {};

let writeInfoToDom = () => {
    db.fetchParkInfo()
        .then((result) => {
            parkInfo = result
            result.forEach(item => {
                writeInfo.writeInfo(item.name, item.location, item.operating_hours[0].opening, item.operating_hours[0].closing, item.description);
            })
        })
}

module.exports = writeInfoToDom