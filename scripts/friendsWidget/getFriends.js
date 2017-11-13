/**
 * Krys Mathis
 * Gets friends data from the database for the user
 * Returns: userid, username and email, friendshipId
 */
const database = require("../database");
const getActiveUser = require("../auth/getActiveUser");

const getFriends = function() {
    const user = getActiveUser();
    let filteredUsers = [];
    // get incomplete tasks for user
    try {
        let db = database();
        let friends = db.friends;
        let filteredFriends = friends
            .filter(t=> t.userId === user.userId)
            .sort((f,s)=> f.id - s.id);
    
        // now you have filteredFriends;
        let users = db.users;
        let individualUser = {};
        filteredFriends.forEach(f=> {
            individualUser = users.find(u=> u.id === f.friendId);
            filteredUsers.push({
                "friendshipId": f.id,
                "userName": individualUser.userName,
                "userId": individualUser.id,
                "email": individualUser.email
            }); 
        });
    } catch (err) {
        console.warn(err);
    }
    return filteredUsers;
}

module.exports = getFriends;