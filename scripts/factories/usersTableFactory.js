// usersTableFactory - Chris Miller
// returns new object for usersTable

const idGenerator = require("./idGenerator")

userIdGenerator = idGenerator()

const userTableFactory = userInfoObject => {
    return Object.create(null, {
        "id" : {value: userIdGenerator.next().value, enumerable: true, writable: true},
        "timeStamp" : {value: Date.now(), enumerable: true, writable: true},
        "userName" : {value: userInfoObject.userName, enumerable: true, writable: true},
        "email" : {value: userInfoObject.email, enumerable: true, writable: true}
    })
}

module.exports = userTableFactory