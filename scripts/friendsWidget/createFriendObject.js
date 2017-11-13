const getFriendObject = function(parentEl) {
    const friendId = parseInt(parentEl.friendId);
    return {"friendId": friendId};
}

module.exports = getFriendObject;