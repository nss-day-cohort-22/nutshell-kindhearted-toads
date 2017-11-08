// eventsTableFactory - Chris Miller
// returns new object for eventsTable

const idGenerator = require("./idGenerator")

eventsIdGenerator = idGenerator()

const eventsTableFactory = eventsInfoObject => {
    return Object.create(null, {
        "id" : {value: eventsIdGenerator.next().value, enumerable: true, writable: true},
        "timeStamp" : {value: Date.now(), enumerable: true, writable: true},
        "userID" : {value: eventsInfoObject.userID, enumerable: true, writable: true},
        "name" : {value: eventsInfoObject.name, enumerable: true, writable: true},
        "eventDate" : {value: eventsInfoObject.eventDate, enumerable: true, writable: true},
        "location" : {value: eventsInfoObject.location, enumerable: true, writable: true}
    })
}

module.exports = eventsTableFactory