//Get User Name - Chris Miller
//Given a user name - Query the database to find userName

const db = require("../database")

const getUserId = function(userId) {
    const  userTable = db().users
    let user = userTable.find(x => x.id === userId)
    return user.userName
}

module.exports = getUserId