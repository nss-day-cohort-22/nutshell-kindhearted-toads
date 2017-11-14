// Author: Greg Lawrence
// displays a modal window with a prompt asking the user if they would like to add the user they clicked on in chat as a friend

const isFriend = require("../friendsWidget/checkFriendship")
const createFriendship = require("./createFriendship")

const addFriendsPrompt = function (chatWidget, userIdClicked, userClicked) {
    
    // generate a visual popup or prompt to ask if you want to be friends with the user that you clicked on

    // Get the modal
    let addFriendModal = document.querySelector(".addFriendPrompt");
    let addFriendContent = document.querySelector(".addFriendPrompt__content");
    
    // use isFriend() function (from Krys) to check if a friendship already exits
    if (isFriend(userIdClicked)) {
        addFriendMsgString = `<p>You are already friends with ${userClicked}.</p>
        <p><button class="addFriendPrompt__okBtn btn">Ok</button>`

    } else {
    // else post this string
        addFriendMsgString = `<p> Do you want to add "${userClicked}" as a friend?</p>
        <button class="addFriend-yes btn">Yes</button><button class="addFriend-no btn">No</button>
        `
    }
    // post friend request string to dom
    addFriendContent.innerHTML = addFriendMsgString
    
    // Open the modal to add a friend
    addFriendModal.style.display = "block";

    // Get the <span> element that closes the modal and the "No" button
    let closeSpan = document.getElementById("closeFriendModal")
    
    // If user clicked "No", to not add a new friend, then close modal
    if (document.querySelector(".addFriend-no")) {
        let noBtn = document.querySelector(".addFriend-no")
        
        noBtn.onclick = function() {
            addFriendModal.style.display = "none";
        }
    }

    // If user clicks the "OK" button when told they are already friends, then close modal
    if (document.querySelector(".addFriendPrompt__okBtn")) {
        let okBtn = document.querySelector(".addFriendPrompt__okBtn")

        okBtn.onclick = function() {
            addFriendModal.style.display = "none";
        }
    }

    // When the user clicks on <span> (x), close the addFriendModal
    closeSpan.onclick = function() {
        addFriendModal.style.display = "none";
    }

    // When the user clicks anywhere outside of the addFriendModal, close it
    window.onclick = function(event) {
        if (event.target === addFriendModal) {
            addFriendModal.style.display = "none";
        }
    }
    
    // if user clicks "Yes" to add a friend
    if (document.querySelector(".addFriend-yes")) {
        // add function to add friend to the "Yes" button. 
        let yesBtn = document.querySelector(".addFriend-yes")
        // use createFriendship function to create a friend pairing and pass it the userId that was clicked
        yesBtn.addEventListener("click", () => {
            // close modal
            addFriendModal.style.display = "none";
            // send userId to befriend to the function to create the friendship
            createFriendship(userIdClicked)
        })
            
    }
}


module.exports = addFriendsPrompt