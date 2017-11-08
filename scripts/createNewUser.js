// Author: Sean Williams
//Purpose: Create a new user and give it to the database handler then set session storage with user ifo


const { validateUser, validateNewUser } = require("./loginValidation")
const NutshellDatabase = require("./database")
const setData = require("./dataSetter")
const userTableFactory = require("./factories/usersTableFactory")


const createNewUser = function (userName, email) {
    debugger
    if (validateNewUser(userName, email, NutshellDatabase().users)) {
        const newUser = userTableFactory({ "userName": userName, "email": email })
        const newUserArray = NutshellDatabase.users.push(newUser)
        setData(newUserArray, "users")

        const storedUserInfo = JSON.stringify({ "userID": newUser.id, "userName": newUser.userName, "isEditing": false })
        sessionStorage.setItem("userInfo", storedUserInfo)
        return true
    }
    else {
        return false
    }
}

module.exports = createNewUser