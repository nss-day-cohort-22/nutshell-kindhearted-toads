// friends - Chris Miller
// returns new object for eventsTable

const getDatabase = require("../database")
const setDatabase = require("../datasetter")
const getActiveUser = require("../auth/getActiveUser")

const friendsJoinTableFactory = friendObject => {

    let db = getDatabase()
    
    let idValue = 0
    
    if (db.friends.length > 0) {
        idValue = db.friends[db.friends.length - 1].id
    }

    return Object.create(null, {
        "id" : {value: ++idValue, enumerable: true, writable: true},
        "timeStamp" : {value: Date.now(), enumerable: true, writable: true},
        "userId" : {value: getActiveUser().userId, enumerable: true, writable: true},
        "friendId" : {value: friendObject.friendId, enumerable: true, writable: true},
        "save": {value: function () {
            db.friends.push({
                "id": this.id,
                "userId": this.userId,
                "timeStamp": this.timeStamp,
                "friendId": this.friendId
            })
            setDatabase(db.friends, "friends")
            return this
        }}
    })

}

module.exports = friendsJoinTableFactory