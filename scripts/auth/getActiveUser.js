// Author: Sean Williams
//Purpose: Returns the active user from session storage.  If no active user, return false


const getActiveUser = function () {
    const activeUser = JSON.parse(sessionStorage.getItem("userInfo"))

    if (activeUser) {
        return activeUser
    }else {
        return false
    }
}

module.exports = getActiveUser