// friendsJoinTable - Chris Miller
// returns new object for eventsTable

const getDatabase = require("../database")
const setDatabase = require("../datasetter")
const getActiveUser = require("../auth/getActiveUser")

const friendsFactory = friendsInfoObject => {

    let db = getDatabase()
    
    let idValue = 0
    
    if (db.friends.length > 0) {
        idValue = db.friends[db.friends.length - 1].id
    }

    return Object.create(null, {
        "id" : {value: ++idValue, enumerable: true, writable: true},
        "timeStamp" : {value: Date.now(), enumerable: true, writable: true},
        "userId" : {value: getActiveUser().userId, enumerable: true, writable: true},
        "friendId" : {value: friendsInfoObject.friendId, enumerable: true, writable: true},
        "save": {value: function () {
            db.friends.push({
                "id": this.id,
                "timeStamp": this.timeStamp,
                "eventId": this.eventId,
                "friendId": this.friendId
            })
            setDatabase(db.friends, "friends")
            return this
        }}
    })

}

module.exports = friendsFactory