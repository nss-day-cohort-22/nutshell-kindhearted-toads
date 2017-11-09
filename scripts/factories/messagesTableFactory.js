// messageTableFactory - Chris Miller
// returns new object for messageTableFactory

// const getDatabase = require("../database")

const messageFactory = messageObject => {

    let db = JSON.parse(localStorage.getItem("NutshellDatabase"))

    let idValue = 0
    
    if (db.messages.length > 0) {
        idValue = db.messages[db.messages.length - 1].id
    }

    return Object.create(null, {
        "id" : {value: ++idValue, enumerable: true, writable: true},
        "timeStamp" : {value: Date.now(), enumerable: true, writable: true},
        "userID" : {value: getActiveUser().id, enumerable: true, writable: true},
        "content" : {value: messageObject.content, enumerable: true, writable: true},
        "save": {value: function () {
            db.messages.push({
                "id": this.id,
                "timeStamp": this.timeStamp,
                "userID": this.userID,
                "content": this.content
            })
            localStorage.setItem("NutshellDatabase", JSON.stringify(db))
            return this
        }}
    })

}


module.exports = messageFactory
