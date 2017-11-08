// tasksTableFactory - Chris Miller
// returns new object for tasksTableFactory

const idGenerator = require("./idGenerator")

messageIdGenerator = idGenerator()

const messageTableFactory = messageInfoObject => {
    Object.create(null, {
        "id" : {value: messageIdGenerator.next.value(), enumerable: true, writable: true},
        "timeStamp" : {value: Date.now(), enumerable: true, writable: true},
        "userID" : {value: messageInfoObject.userID, enumerable: true, writable: true},
        "content" : {value: messageInfoObject.content, enumerable: true, writable: true}
    })
}

module.exports = messageTableFactory