/**
 * Krys Mathis
 * Pulls the filtered users from the database
 * Excludes the current user
 */
const database = require("../database");
const getCurrentUser = require("../auth/getActiveUser");

const getUsers = function() {
    let filteredUsers = [];
    try {
        const currentUser = getCurrentUser();
        // get incomplete tasks for user
        let db = database();
        const users = db.users;
        filteredUsers = users.filter(u=> u.id !== currentUser.userId)
            .sort((f,s)=>f.userName - s.userName)
    } catch (err) {
        console.warn(err);
    }

    return filteredUsers;
    
}

module.exports = getUsers;