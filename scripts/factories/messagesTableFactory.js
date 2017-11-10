// messageTableFactory - Chris Miller

const getDatabase = require("../database")
const setDatabase = require("../datasetter")
const getActiveUser = require("../auth/getActiveUser")

const messageFactory = messageObject => {

    let db = getDatabase()

    let idValue = 0

    if (db.messages.length > 0) {
        idValue = db.messages[db.messages.length - 1].id
    }

    return Object.create(null, {
        "id" : {value: ++idValue, enumerable: true, writable: true},
        "timeStamp" : {value: Date.now(), enumerable: true, writable: true},
        "userID" : {value: getActiveUser().userID, enumerable: true, writable: true},
        "content" : {value: messageObject.content, enumerable: true, writable: true},
        "save": {value: function () {
            db.messages.push({
                "id": this.id,
                "timeStamp": this.timeStamp,
                "userID": this.userID,
                "content": this.content
            })
            setDatabase(db.messages, "messages")
            return this
        }}
    })

}


module.exports = messageFactory
