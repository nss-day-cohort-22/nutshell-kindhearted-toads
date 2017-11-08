/**
 * Krys Mathis
 * The purpose of this function is to navigate the user through the login
 * process.
 */
const dashboardInit = require("./dashboardInit");

// elements you would click
const btnLogin = document.querySelector(".login__button-login");
const btnCreate = document.querySelector(".login__button-create");
const loginLink = document.querySelector(".welcome__link");

// function to navigate through login
const loginActions = document.addEventListener("click", (event) => {
    
    // page elements to toggle visible and invisible
    const welcome = document.querySelector(".welcome");
    const login = document.querySelector(".login");
    const dashboard = document.querySelector(".dashboard");

    // Handle navigating to the login page
    if (event.target === loginLink) {
        welcome.style.display = "none";
        login.style.display = "flex";
    }

    // get elements
    const username = document.querySelector(".login__username");
    const email = document.querySelector(".login__email");
    const message = document.querySelector(".login__user-message");

    // handle the login button errors
    if (event.target === btnLogin) {
        if (login(username, email)) {
            dashboardInit();
        } else {
            //display inline error message
            message.innerHTML = "username/email does not exist"
        }
    }

    // handle the create button errors
    if (event.target === btnCreate) {
        if (createNewUser(username, email)) {
            dashboardInit();
        } else {
            // your username or email matches an existing user
            message.innerHTML = "username/email already exists"
        }
    }

})

module.exports = loginActions;