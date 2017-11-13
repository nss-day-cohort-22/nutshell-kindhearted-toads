// Author: Greg Lawrence
// creates a new friendship between two users.  Needs to be passed a UserId for the friend the user would like to add


const friendsJoinTableFactory = require("../factories/friendsJoinTableFactory")

const createFriendship = function(userIdToBefriend) {
    // create a new friend object with the id of the friend you want to add
    let newFriendObject = {"friendId": userIdToBefriend}

    // send that object into the friendsJoinTableFactory to then be set in local storage
    friendsJoinTableFactory(newFriendObject).save()

}



module.exports = createFriendship