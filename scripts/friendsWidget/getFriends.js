/**
 * Krys Mathis
 * Gets friends data from the database for the user
 */
const database = require("../database");
const getActiveUser = require("../auth/getActiveUser");

const getFriends = function() {
    const user = getActiveUser();
    // get incomplete tasks for user
    let db = database() || {"friends":[]};
    let friends = db.friends || []
    let filteredFriends = friends
        .filter(t=> t.userId === user.userId && !t.completed)
        .sort((f,s)=> f.id - s.id);

    return filteredfriends;
    
}

module.exports = getFriends;