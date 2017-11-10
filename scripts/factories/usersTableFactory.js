// usersTableFactory - Chris Miller
// returns new object for usersTable

const getDatabase = require("../database")
const setDatabase = require("../datasetter")

const userFactory = userObject => {

    let db = getDatabase()
    
    let idValue = 0

    if (db.users.length > 0) {
        idValue = db.users[db.users.length - 1].id
    }

    return Object.create(null, {
        "id" : {value: ++idValue, enumerable: true, writable: true},
        "timeStamp" : {value: Date.now(), enumerable: true, writable: true},
        "userName" : {value: userObject.userName, enumerable: true, writable: true},
        "email" : {value: userObject.email, enumerable: true, writable: true},
        "save": {value: function () {
            db.users.push({
                "id": this.id,
                "timeStamp": this.timeStamp,
                "userName": this.userName,
                "email": this.email
            })
            setDatabase(db.users, "users")
            return this
        }}
    })

}
//
module.exports = userFactory