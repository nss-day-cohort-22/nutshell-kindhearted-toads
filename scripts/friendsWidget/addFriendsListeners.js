const addFriendsListeners = (widget) => {
    
    const friendsWidget = document.querySelector(".friendsWidget");
    // the delete button functionality
    friendsWidget.addEventListener("click", (e)=>{

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