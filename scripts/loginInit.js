/**
 * The purpose of this function is to navigate the user through the login
 * process.
 */

// if is an invalid email

// if is an invalid username

// if is valid
function tempLogin ( username, email ) {
    return true;
}

const btnLogin = document.querySelector(".login__button-login");
const btnCreate = document.querySelector(".login__button-create");
const loginLink = document.querySelector(".welcome__link");

const loginActions = document.addEventListener("click", (event) => {

    if (event.target === loginLink) {
        document.querySelector(".welcome__container").style.display = "none";
        document.querySelector(".login").style.display = "flex";
    }

    if (event.target === btnLogin) {
        alert("you clicked one");
    }

    if (event.target === btnCreate) {

        alert("you clicked the create button");
    }

})

module.exports = loginActions;