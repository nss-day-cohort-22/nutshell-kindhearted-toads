// Author: Greg Lawrence
// Functionality to log out the current active user and remove them from session storage

const logoutUser = () => {
    // clear the current user from session storage
    sessionStorage.removeItem("userInfo")
}

module.exports = logoutUser