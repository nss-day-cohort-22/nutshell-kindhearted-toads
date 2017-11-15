// Author: Greg Lawrence
// create the navbar when the dashboard is created, for now, include a logo and a log-out button

const addEventListeners = require("./addListeners")
const getActiveUser = require("../auth/getActiveUser")

const generateNavbar = () => {
    // get control of navbar dom element
    const navbarEl = document.querySelector(".nutshellNavbar")

    // build a dom string to populate the navbar
    let navbarItemsString = `
        <div class="nutshellNavbar__logo">Nutshell</div>
        `

    // get Active user
    const currentUser = getActiveUser()
    // place name of valid user next to logOut button
    
    navbarItemsString += `
        <div class="nutshellNavbar__color-container">
        <span class="nutshellNavbar__instructions">Select Color</span>
            <div class="nutshellNavbar__select-color--blue"></div>
            <div class="nutshellNavbar__select-color--brown"></div>
            <div class="nutshellNavbar__select-color--black"></div>
        </div>
        <span class="nutshellNavbar__activeUser">${currentUser.userName}<span>
        <button class="nutshellNavbar__logout">Logout</button>
        `
        

    // post dom string to innerHTML of navbar
    navbarEl.innerHTML = navbarItemsString

    // add event listener to the logout button
    addEventListeners()
}


module.exports = generateNavbar

