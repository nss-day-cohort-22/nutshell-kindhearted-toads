// Author: Greg Lawrence
// Create event listener for the log-out button on the navbar

const logoutUser = require("../auth/logout")

const addEventListeners = function () {
    // get control of the logout button
    const logoutBtnEl = document.querySelector(".nutshellNavbar__logout")

    // add event listener for the click on logout button
    logoutBtnEl.addEventListener("click", event => {
        // log the user out using the logout.js module
        logoutUser()
        // // run appInit() to get the user back to the main welcome page
        // appInit()
        location.reload()
    })

    const colorSelector = document.querySelector(".nutshellNavbar__color-container")
    
    colorSelector.addEventListener("click", (event) => {
        let color = "";
        if (event.target.className === "nutshellNavbar__select-color--brown") {
            color = "#b96a16e6"
        } else if (event.target.className === "nutshellNavbar__select-color--blue") {
            color = "#206dfc"
        } else if (event.target.className === "nutshellNavbar__select-color--black") {
            color = "black"
        }

        if (color.length > 0) {
            const allWidgets = document.querySelectorAll(".widget");
            Array.from(allWidgets).forEach(w=>w.style.backgroundColor=color);
            document.querySelector(".nutshellNavbar").style.backgroundColor=color;
        }


    })
}



module.exports = addEventListeners