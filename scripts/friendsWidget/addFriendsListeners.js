const addFriendsListeners = (widget) => {
    
    console.log("adding events");
    
    const friendsWidget = document.querySelector(".friendsWidget");
    // the delete button functionality
    friendsWidget.addEventListener("click", (e)=>{
        console.log("friends widget clicked");
        if (e.target.className.includes("friend__btn-delete")) {
            const parent = e.target.parentNode;
            const id = parseInt(parent.dataset.friendshipId);
            widget.delete("friends", id);
            widget.refresh(widget);
            // obj.latest = obj.getLatest();
            // //repaint the widget with latest
            // obj.populate(obj.latest)
        }
    });
}

module.exports = addFriendsListeners;