/**
 * Krys Mathis
 * Pulls the filtered users from the database
 * Excludes the current user
 */
const getCurrentUser = require("../auth/getActiveUser");

const getUsers = function(database) {
    let filteredUsers = [];
    try {
        const currentUser = getCurrentUser();
        // get incomplete tasks for user
        const users = database.users;
        filteredUsers = users.filter(u=> u.id !== currentUser.userId)
            .sort((f,s)=>f.userName - s.userName)
    } catch (err) {
        console.warn(err);
    }

    return filteredUsers;
    
}

module.exports = getUsers;