// usersTableFactory - Chris Miller
// returns new object for usersTable

// const getDatabase = require("../database")

const userFactory = userObject => {

    let db = JSON.parse(localStorage.getItem("NutshellDatabase"))
    
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
            localStorage.setItem("NutshellDatabase", JSON.stringify(db))
            return this
        }}
    })

}

module.exports = userFactory