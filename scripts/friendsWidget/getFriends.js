/**
 * Krys Mathis
 * Gets friends data from the database for the user
 * Returns: userid, username and email, friendshipId
 */
const getActiveUser = require("../auth/getActiveUser");

const getFriends = function(database) {
    const user = getActiveUser();
    let filteredUsers = [];
    // get all the current users friends
    try {
        let friends = database.friends;
        let filteredFriends = friends
            .filter(t=> t.userId === user.userId);

        // now you have filteredFriends;
        let users = database.users;
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