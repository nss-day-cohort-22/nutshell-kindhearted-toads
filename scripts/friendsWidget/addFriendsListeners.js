const addFriendsListeners = (widget) => {
    
    console.log("adding events");
    
    const friendsWidget = document.querySelector(".friendsWidget");
    // the delete button functionality
    friendsWidget.addEventListener("click", (e)=>{
        console.log("friends widget clicked");
        if (e.target.className.includes("friend__btn-delete")) {
            const parent = e.target.parentNode;
            widget.delete("friends", parseInt(parent.dataset.friendshipId));
            widget.refresh();
        }
    });
}

module.exports = addFriendsListeners;