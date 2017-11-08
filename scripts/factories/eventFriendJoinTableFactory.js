// eventFriendJoinTableFactory - Chris Miller
// returns new object for eventsTable

const idGenerator = require("./idGenerator")

eventsIdGenerator = idGenerator()

const eventFriendJoinTableFactory = eventFriendJoinTableInfoObject => {
    Object.create(null, {
        "id" : {value: eventsIdGenerator.next.value(), enumerable: true, writable: true},
        "timeStamp" : {value: Date.now(), enumerable: true, writable: true},
        "eventID" : {value: eventFriendJoinTableInfoObject.eventID, enumerable: true, writable: true},
        "userID" : {value: eventFriendJoinTableInfoObject.userID, enumerable: true, writable: true}
    })
}

module.exports = eventFriendJoinTableFactory