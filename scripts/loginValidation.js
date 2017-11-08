// Author: Sean Williams
//Purpose: Validate user login data against the database


const validateNewUser = function (userName, email, userArray) {
    if (userArray.find(user => user.userName === userName)) {
        console.log("ERROR: username not unique")
        return false
    }
    else if (userArray.find(user => user.email === email)) {
        console.log("ERROR: Email is not unique")
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
            console.log("ERROR: Incorrect email")
            return false
        }
    }
    else if (userArray.find(user => user.email === email)) {
        console.log("ERROR: Incorrect Email")
        return false
    }
    else {
        console.log("ERROR: User does not exist")
        return false
    }
}


module.exports = {validateUser, validateNewUser}