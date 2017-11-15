// Author: Sean Williams
//Purpose: Find user and set session storage with needed info


const { validateUser, validateNewUser } = require("./loginValidation")
const NutshellDatabase = require("../database")


const login = function (userName, email) {
    const user = validateUser(userName, email, NutshellDatabase().users)
    if (user) {
        const storedUserInfo = JSON.stringify({ "userId": user.id, "userName": user.userName, "isEditing": false })
        sessionStorage.setItem("userInfo", storedUserInfo)
        document.title = user.userName + "'s Nutshell"
        return true
    }
    else {
        return false
    }
}

module.exports = login