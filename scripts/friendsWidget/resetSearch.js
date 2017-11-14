/**
 * Krys Mathis
 * This accepts a message for the user
 * And resets elements of the friends widget to include the message supplied to the user.
 */

const resetSearch = (msg) => {
    
    const commitButton = document.querySelector(".friendsWidget__btn-commit");
    const userMessage = document.querySelector(".friendsWidget__user-comment");
    const friendsInput = document.querySelector(".friendsWidget__input");
    const friendsSearchResults = document.querySelector(".friendsWidget__search-results");


    friendsInput.value = "";
    commitButton.style.display = "none";
    userMessage.textContent = msg;
    friendsSearchResults.textContent = "";
    if (userMessage.classList.contains("friendsWidget--red")) {
        userMessage.classList.toggle("friendsWidget--red");
    }
}

module.exports = resetSearch;