// eventsJoin - Chris Miller
// returns new object for eventsTable

const getDatabase = require("../database")
const setDatabase = require("../datasetter")
const getActiveUser = require("../auth/getActiveUser")

const eventsJoinFactory = eventJoinObject => {

    let db = getDatabase()
    
    let idValue = 0
    
    if (db.eventJoin.length > 0) {
        idValue = db.eventJoin[db.eventJoin.length - 1].id
    }

    return Object.create(null, {
        "id" : {value: ++idValue, enumerable: true, writable: true},
        "timeStamp" : {value: Date.now(), enumerable: true, writable: true},
        "eventId" : {value: eventJoinObject.eventId, enumerable: true, writable: true},
        "userId" : {value: getActiveUser().userId, enumerable: true, writable: true},
        "save": {value: function () {
            db.eventJoin.push({
                "id": this.id,
                "timeStamp": this.timeStamp,
                "userId": this.userId,
                "eventId": this.eventId
            })
            setDatabase(db.eventJoin, "eventJoin")
            return this
        }}
    })

}

module.exports = eventsJoinFactory