// const getUser = require("../auth/getActiveUser");
const getFriends = require("./getFriends");

const isFriend = (friendId) => {
    const friends = getFriends();
    const isMatched = friends.some(f=> f.userId === friendId);
    return isMatched;
}

module.exports = isFriend;