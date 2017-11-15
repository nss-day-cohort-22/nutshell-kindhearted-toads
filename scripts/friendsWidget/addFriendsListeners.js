/**
 * Krys Mathis
 * Event listeners for friends widget
 * Key Variables:
 *  result - this stores the user object once the user searched for
 *  users - stores the current users, exluding the current user, initialized
 *          on the add user affordance
 */

const getUsers = require("./getUsers");
const resetSearch = require("./resetSearch");
const isFriend = require("./checkFriendship");
const addFriend = require("./addFriend");
const Toaster = require("../toaster/toaster");
const global = require("../globalRefresh");

const addFriendsListeners = (widget) => {
    let toaster = Toaster();
    let result = {}
    let users = [];
    let readyToCommit = false;
    const friendsWidget = document.querySelector(".friendsWidget");
    const commitButton = document.querySelector(".friendsWidget__btn-commit");
    const userMessage = document.querySelector(".friendsWidget__user-comment");
    const friendsInput = document.querySelector(".friendsWidget__input");
    const friendsSearchResults = document.querySelector(".friendsWidget__search-results");
    const inputBox = document.querySelector(".friendsWidget__inputContainer")

    // the delete button functionality
    friendsWidget.addEventListener("click", (e)=>{
        if (e.target.className.includes("friend__btn-delete")) {
            // debugger
            const parent = e.target.parentNode;
            const id = parseInt(parent.dataset.friendshipId);
            widget.delete("friends", id)
            // provide a short delay before refrshing the DOM
            setTimeout(() => global.refresh(), 200);
        }
    });

    // Add a Friend Affordance
    // This is where the users array is populated
    document.querySelector(".friendsWidget__btn-add").addEventListener("click",() =>{
        // display the input fields
        inputBox.style.display = "inline";
        resetSearch("Type to Search");
        // *** prepopulate the users array with the current users ***
        users = getUsers();
        friendsInput.focus();
        readyToCommit = false;

    })

    // When the user clicks away from the friends seach box while a 
    // friend has not been identified
    friendsInput.addEventListener("focusout", (e)=> {
        // if the commitButton is still hidden OK to hide
        if (commitButton.style.display === "none") {
            inputBox.style.display = "none";
        }
        readyToCommit = false;
    });

    /**
     * Display users while typing in the search for friends box
     * For each letter the user types, perform a find on the users
     * array. This uses the pre-populated users array from the add button.
     */
    document.querySelector(".friendsWidget__input").addEventListener("keyup",(e) => {
        
        let searchString = e.target.value.toLowerCase();

        if (searchString.length === 0) {
            resetSearch("");
            return;
        }
        // the users array is initalized from the database.
        searchUsers = users.find(u=> u.userName.toLowerCase().includes(searchString.toLowerCase()));
        
        if (searchUsers) {
            result = searchUsers;
            const searchResults = `${searchUsers.userName}: ${searchUsers.email}`;
            friendsSearchResults.textContent = searchResults;
            userMessage.textContent = "";
            if (userMessage.classList.contains("friendsWidget--red")) {
                userMessage.classList.toggle("friendsWidget--red");
            }
            if (isFriend(searchUsers.id)) {
                commitButton.style.display = "none";
                userMessage.textContent = "Already friends..."
            } else {
                readyToCommit = true;
                commitButton.style.display = "";    
            }

        } else {
            friendsSearchResults.textContent = "";
            userMessage.textContent = "No User Found";
            
            if (!userMessage.classList.contains("friendsWidget--red")) {
                userMessage.classList.toggle("friendsWidget--red");
            }
            commitButton.style.display = "none";
            readyToCommit = false;
        }

        // enter key behavior
        if (e.keyCode === 13 && readyToCommit) {
            addFriend(result,widget);
            global.refresh()
        }
        
    })
    
    document.querySelector(".friendsWidget__btn-commit").addEventListener("click",() => {
        if (result) {
            addFriend(result,widget);
            global.refresh()
        }
    })



}

module.exports = addFriendsListeners;