// Author: Greg Lawrence
// Create event listener for the log-out button on the navbar

const appInit = require("./auth/appInit")
const logoutUser = require("../auth/logout")

const addEventListeners = function () {
    // get control of the logout button
    const logoutBtnEl = document.querySelector(".nutshellNavbar__logout")

    // add event listener for the click on logout button
    logoutBtnEl.addEventListener("click", event => {
        // log the user out using the logout.js module
        logoutUser()
        // run appInit() to get the user back to the main welcome page
        appInit()
    })
}



module.exports = addEventListeners