const friendsJoinTableFactory = require("../factories/friendsJoinTableFactory")

const createFriendship = function(userIdToBefriend) {
    // create a new friend object with the id of the friend you want to add
    let newFriendObject = {"friendId": userIdToBefriend}

    // send that object into the friendsJoinTableFactory to then be set in local storage
    friendsJoinTableFactory(newFriendObject).save()

   
}



module.exports = createFriendship