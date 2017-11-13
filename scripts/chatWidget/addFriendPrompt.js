// Author: Greg Lawrence
// displays a modal window with a prompt asking the user if they would like to add the user they clicked on in chat as a friend

const addFriendsPrompt = function (chatWidget, userIdClicked) {
    
    // generate a visual popup or prompt to ask if you want to be friends with the user that you clicked on

    // Get the modal
    let addFriendModal = document.querySelector(".addFriendPrompt");
    let addFriendContent = document.querySelector(".addFriendPrompt__content");
    
    // check if the user is already a friend


    // else post this string
    addFriendMsgString = `<p> Do you want to add "{userName}" as a friend?</p>
    <button class="addFriend-yes">Yes</button><button class="addFriend-no">No</button>
    `

    addFriendContent.innerHTML = addFriendMsgString
    
    // Open the modal to add a friend
    addFriendModal.style.display = "block";

    // Get the <span> element that closes the modal
    let closeSpan = document.getElementById("closeFriendModal")


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





}


module.exports = addFriendsPrompt