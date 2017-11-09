// friendsJoinTable - Chris Miller
// returns new object for eventsTable

// const getDatabase = require("../database")

const friendsFactory = friendsInfoObject => {

    let db = JSON.parse(localStorage.getItem("NutshellDatabase"))
    
    let idValue = 0
    
    if (db.friends.length > 0) {
        idValue = db.friends[db.friends.length - 1].id
    }

    return Object.create(null, {
        "id" : {value: ++idValue, enumerable: true, writable: true},
        "timeStamp" : {value: Date.now(), enumerable: true, writable: true},
        "userID" : {value: getActiveUser().id, enumerable: true, writable: true},
        "friendID" : {value: friendsInfoObject.friendID, enumerable: true, writable: true},
        "save": {value: function () {
            db.friends.push({
                "id": this.id,
                "timeStamp": this.timeStamp,
                "eventID": this.eventID,
                "friendID": this.friendID
            })
            localStorage.setItem("NutshellDatabase", JSON.stringify(db))
            return this
        }}
    })

}

module.exports = friendsFactory