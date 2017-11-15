// Author: Sean Williams
//Purpose: Validate user login data against the database


const validateNewUser = function (userName, email, userArray) {
    if (userArray.find(user => user.userName === userName)) {
        return false
    }
    else if (userArray.find(user => user.email === email)) {
        return false
    }
    else {
        return true
    }
}
const validateUser = function (userName, email, userArray) {
    const validUser = userArray.find(user => user.userName === userName)
    if (validUser) {
        if (validUser.email === email) {
            return validUser
        }
        else {
            return false
        }
    }
    else if (userArray.find(user => user.email === email)) {
        return false
    }
    else {
        return false
    }
}


module.exports = {validateUser, validateNewUser}