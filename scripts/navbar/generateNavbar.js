// Author: Greg Lawrence
// create the navbar when the dashboard is created, for now, include a logo and a log-out button

const addEventListeners = require("./addListeners")


const generateNavbar = () => {
    // get control of navbar dom element
    const navbarEl = document.querySelector(".nutshellNavbar")

    // build a dom string to populate the navbar
    let navbarItemsString = `
        <div class="nutshellNavbar__logo">Nutshell</div>
        <button class="nutshellNavbar__logout">Logout</button>
        `
    // post dom string to innerHTML of navbar
    navbarEl.innerHTML = navbarItemsString

    // add event listener to the logout button
    addEventListeners()
}


module.exports = generateNavbar

