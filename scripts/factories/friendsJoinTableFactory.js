// friendsJoinTable - Chris Miller
// returns new object for eventsTable

const idGenerator = require("./idGenerator")

friendsIdGenerator = idGenerator()

const friendsJoinTableFactory = friendsInfoObject => {
    Object.create(null, {
        "id" : {value: friendsIdGenerator.next.value(), enumerable: true, writable: true},
        "timeStamp" : {value: Date.now(), enumerable: true, writable: true},
        "userID" : {value: friendsInfoObject.userID, enumerable: true, writable: true},
        "friendID" : {value: friendsInfoObject.friendID, enumerable: true, writable: true}
    })
}

module.exports = friendsJoinTableFactory