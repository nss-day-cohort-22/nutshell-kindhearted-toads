/**
 * Krys Mathis
 * This module takes a user Id and returns
 * True or false if the current user is friends with the submitted userId
 */
const getFriends = require("./getFriends");

const isFriend = (friendId) => {
    const friends = getFriends();
    const isMatched = friends.some(f=> f.userId === friendId);
    return isMatched;
}

module.exports = isFriend;