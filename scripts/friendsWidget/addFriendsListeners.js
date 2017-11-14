const getUsers = require("./getUsers");
const isFriend = require("./checkFriendship");
const friendFactory = require("../factories/friendsJoinTableFactory");


const addFriendsListeners = (widget) => {
    
    let result = {}
    let users = [];
    const commitButton = document.querySelector(".friendsWidget__btn-commit");
    const userMessage = document.querySelector(".friendsWidget__user-comment");

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
        const inputBox = document.querySelector(".friendsWidget__inputContainer")
        inputBox.style.display = "inline";
        inputBox.value = "";
        users = getUsers();
        commitButton.style.display = "none";
        userMessage.textContent = "";
    })

    document.querySelector(".friendsWidget__input").addEventListener("keyup",(e) => {
        
        //let currentResults = document.querySelector(".friendsWidget__search-results").textContent;
        let searchString = e.target.value.toLowerCase();
        commitButton.style.display = "none";
        userMessage.textContent = "";

        if (searchString.length === 0) {
            document.querySelector(".friendsWidget__search-results").textContent = "Type To Search";
            return;
        }
        
        searchUsers = users.find(u=> u.userName.toLowerCase().includes(searchString.toLowerCase()));
        if (searchUsers) {
            result = searchUsers;
            const searchResults = searchUsers.userName;
            const searchEl = document.querySelector(".friendsWidget__search-results");
            searchEl.textContent = searchResults;
            searchEl.dataset.friendId = result.id;
            commitButton.style.display = "";
        } else {
            document.querySelector(".friendsWidget__search-results").textContent = "No User Found";
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