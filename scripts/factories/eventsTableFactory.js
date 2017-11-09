// eventsTableFactory - Chris Miller
// returns new object for eventsTable

const getDatabase = require("../database")
const setDatabase = require("../datasetter")
const getActiveUser = require("../auth/getActiveUser")

const eventsFactory = eventsInfoObject => {

    let db = getDatabase()
    
    let idValue = 0
    
    if (db.events.length > 0) {
        idValue = db.events[db.events.length - 1].id
    }

    return Object.create(null, {
        "id" : {value: ++idValue, enumerable: true, writable: true},
        "timeStamp" : {value: Date.now(), enumerable: true, writable: true},
        "userID" : {value: getActiveUser.id, enumerable: true, writable: true},
        "name" : {value: eventsInfoObject.name, enumerable: true, writable: true},
        "eventDate" : {value: eventsInfoObject.eventDate, enumerable: true, writable: true},
        "location" : {value: eventsInfoObject.location, enumerable: true, writable: true},
        "save": {value: function () {
            db.events.push({
                "id": this.id,
                "timeStamp": this.timeStamp,
                "userID": this.userID,
                "name": this.name,
                "eventDate": this.eventDate,
                "location": this.location
            })
            setDatabase(db.events, "events")
            return this
        }}
    })

}

module.exports = eventsFactory