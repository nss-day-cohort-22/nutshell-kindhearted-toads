// Author: Greg Lawrence
// Create event listener for the log-out button on the navbar

const logoutUser = require("../auth/logout")

const addEventListeners = function () {
    // get control of the logout button
    const logoutBtnEl = document.querySelector(".nutshellNavbar__logout")

    // add event listener for the click on logout button
    logoutBtnEl.addEventListener("click", () => {
        // log the user out using the logout.js module
        logoutUser()
        // refresh page to bring the next user to the welcome screen
        location.reload()
    })

    // get control of the DOM element to select a color theme for dashboard
    const colorSelector = document.querySelector(".nutshellNavbar__color-container")
    
    // add event listener to color theme selector
    colorSelector.addEventListener("click", (event) => {
        let color = "";
        // get the color the user has chosen when they click on the color selector
        if (event.target.className === "nutshellNavbar__select-color--brown") {
            color = "#b96a16"
        } else if (event.target.className === "nutshellNavbar__select-color--blue") {
            color = "#206dfc"
        } else if (event.target.className === "nutshellNavbar__select-color--black") {
            color = "black"
        }

        // get control of all the widget Dom elements, then iterate through the widgets and set the background color to the color chosen. Also set the navbar background color to the color chosen
        if (color.length > 0) {
            const allWidgets = document.querySelectorAll(".widget");
            Array.from(allWidgets).forEach(w=>w.style.backgroundColor=color);
            document.querySelector(".nutshellNavbar").style.backgroundColor=color;
        }
    })
}



module.exports = addEventListeners