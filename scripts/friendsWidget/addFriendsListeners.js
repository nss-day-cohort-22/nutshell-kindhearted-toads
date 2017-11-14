const getUsers = require("./getUsers");
const isFriend = require("./checkFriendship");
const friendFactory = require("../factories/friendsJoinTableFactory");
const resetSearch = require("./resetSearch");


const addFriendsListeners = (widget) => {
    
    let result = {}
    let users = [];
    const commitButton = document.querySelector(".friendsWidget__btn-commit");
    const userMessage = document.querySelector(".friendsWidget__user-comment");
    const friendsInput = document.querySelector(".friendsWidget__input");
    const friendsSearchResults = document.querySelector(".friendsWidget__search-results");
    const inputBox = document.querySelector(".friendsWidget__inputContainer")
    
    const friendsWidget = document.querySelector(".friendsWidget");
    // the delete button functionality
    friendsWidget.addEventListener("click", (e)=>{

        if (e.target.className.includes("friend__btn-delete")) {
            const parent = e.target.parentNode;
            const id = parseInt(parent.dataset.friendshipId);
            widget.delete("friends", id);
            widget.populate();
            // obj.latest = obj.getLatest();
            // //repaint the widget with latest
            // obj.populate(obj.latest)
        }
    });

    document.querySelector(".friendsWidget__btn-add").addEventListener("click",() =>{
        // display the input fields
        inputBox.style.display = "inline";
        resetSearch("Type to Search");
        // prepopulate the users array with the current users
        users = getUsers();
        friendsInput.focus();
    })

    friendsInput.addEventListener("focusout", (e)=> {
        if (commitButton.style.display === "none") {
            inputBox.style.display = "none";
        }
    });

    document.querySelector(".friendsWidget__input").addEventListener("keyup",(e) => {
        
        //let currentResults = document.querySelector(".friendsWidget__search-results").textContent;
        let searchString = e.target.value.toLowerCase();

        if (searchString.length === 0) {
            resetSearch("");
            return;
        }
        
        searchUsers = users.find(u=> u.userName.toLowerCase().includes(searchString.toLowerCase()));
        if (searchUsers) {
            result = searchUsers;
            const searchResults = `${searchUsers.userName}: ${searchUsers.email}`;
            const searchEl = document.querySelector(".friendsWidget__search-results");
            searchEl.textContent = searchResults;
            userMessage.textContent = "";
            if (userMessage.classList.contains("friendsWidget--red")) {
                userMessage.classList.toggle("friendsWidget--red");
            }
            
            commitButton.style.display = "";
        } else {
            friendsSearchResults.textContent = "";
            userMessage.textContent = "No User Found";
            if (!userMessage.classList.contains("friendsWidget--red")) {
                userMessage.classList.toggle("friendsWidget--red");
            }
            commitButton.style.display = "none";
        }
        
    })
    
    document.querySelector(".friendsWidget__btn-commit").addEventListener("click",() => {
        if (isFriend(result.id)) {
            userMessage.textContent = "Already friends..."
        } else {
            try {
                friendFactory({"friendId": result.id}).save();
                widget.populate();
                document.querySelector(".friendsWidget__inputContainer").style.display = "none";
            } catch (err) {
                console.warn(err);
            }
        }
    })

    document.querySelector(".friendsWidget__user-interaction").addEventListener("blur",() => {
        console.log("out");
    })
}

module.exports = addFriendsListeners;