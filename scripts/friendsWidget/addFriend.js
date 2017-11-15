/**
 * Krys Mathis
 * Functionality for adding friend from widget
 */

const isFriend = require("./checkFriendship");
const friendFactory = require("../factories/friendsJoinTableFactory");
const autoScroll = require("../autoScroll");
const Toaster = require("../toaster/toaster")
const toaster = Toaster()


const addFriend = function(friend, widget) {

    const userMessage = document.querySelector(".friendsWidget__user-comment");
    const inputContainer = document.querySelector(".friendsWidget__inputContainer")

    /**
     * 1. Check if the users are already friends
     * 2. If not, create a new friend
     *  2.1 send a new friend object to the obj factory
     *  2.2 Update the DOM: Hide the add a friend forms 
     *  2.3 Update the DOM: Enable the autoscroll function
     */
    if (isFriend(friend.id)) {
        userMessage.textContent = "Already friends..."
    } else {
        try {
            friendFactory({"friendId": friend.id}).save();
            inputContainer.style.display = "none";
            toaster.makeToast(`You are now friends with ${friend.userName}`, 2000)
            autoScroll("friendsContainer");
        } catch (err) {
            console.warn("Error while adding friend -", err);
        }
    }
}

module.exports = addFriend;