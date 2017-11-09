// eventsJoin - Chris Miller
// returns new object for eventsTable

// const getDatabase = require("../database")

const eventsJoinFactory = eventJoinObject => {

    let db = JSON.parse(localStorage.getItem("NutshellDatabase"))
    
    let idValue = 0
    
    if (db.eventJoin.length > 0) {
        idValue = db.eventJoin[db.eventJoin.length - 1].id
    }

    return Object.create(null, {
        "id" : {value: ++idValue, enumerable: true, writable: true},
        "timeStamp" : {value: Date.now(), enumerable: true, writable: true},
        "eventID" : {value: eventJoinObject.eventID, enumerable: true, writable: true},
        "userID" : {value: getActiveUser().id, enumerable: true, writable: true},
        "save": {value: function () {
            db.eventJoin.push({
                "id": this.id,
                "timeStamp": this.timeStamp,
                "userID": this.userID,
                "eventID": this.eventID
            })
            localStorage.setItem("NutshellDatabase", JSON.stringify(db))
            return this
        }}
    })

}

module.exports = eventsJoinFactory