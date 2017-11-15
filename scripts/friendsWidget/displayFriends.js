/**
 * Krys Mathis
 * Display function for friends
 * Takes an array of user objects   
 */

const displayFriends = (friends) => {
    const friendsContainer = document.querySelector(".friendsContainer");
    // clear all existing friends records
    friendsContainer.innerHTML = "";

    friends.forEach( f => {
        // define a container div for each friend    
        const friendDiv = document.createElement("div");
        friendDiv.className = "friend";
        friendDiv.dataset.friendshipId = f.friendshipId;
        friendDiv.dataset.userId = f.userId;
        friendDiv.dataset.userName = f.userName;
        friendDiv.dataset.email = f.email;

        friendDiv.innerHTML += `<div class="friend__userName">${f.userName}</div>
        <div class="friend__email">${f.email}</div>
        <button class="friend__btn-delete">X</button>`
        friendsContainer.appendChild(friendDiv);
    });
}

module.exports = displayFriends;
