/**
 * Krys Mathis
 * The purpose of this function is to navigate the user through the login
 * process.
 */

// if is an invalid email

// if is an invalid username

// if is valid
function tempLogin ( username, email ) {
    return false;
}



const btnLogin = document.querySelector(".login__button-login");
const btnCreate = document.querySelector(".login__button-create");
const loginLink = document.querySelector(".welcome__link");

const welcome = document.querySelector(".welcome");
const login = document.querySelector(".login");
const dashboard = document.querySelector(".dashboard");

const loginActions = document.addEventListener("click", (event) => {

    // Handle navigating to the login page
    if (event.target === loginLink) {
        welcome.style.display = "none";
        login.style.display = "flex";
    }

    // get elements
    const username = document.querySelector(".login__username");
    const email = document.querySelector(".login__email");
    const message = document.querySelector(".login__user-init");

    // handle the login button errors
    if (event.target === btnLogin) {
        if (tempLogin(username, email)) {
            message.innerHTML = "";
            login.style.display = "none";
            dashboard.style.display = "";
        } else {
            //display inline error message
            message.innerHTML = "username/email does not exist"
        }
    }

    // handle the create button errors
    if (event.target === btnCreate) {
        if (createNewUser(username, email)) {
            message.innerHTML = "";
            login.style.display = "none";
            dashboard.style.display = "";
        } else {
            // your username or email matches an existing user
            message.innerHTML = "username/email already exists"
        }
    }

})

module.exports = loginActions;