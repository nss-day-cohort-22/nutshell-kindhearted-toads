/**
 * Krys Mathis
 * Purpose is to handle initializing the structure for the dashboard
*/
// get page elements

const taskWidget = require("./taskWidget/taskWidgetInit")
const friendsWidget = require("./friendsWidget/friendsWidgetInit")
const chatWidget = require("./chatWidget/chatWidgetInit")
const newsWidget = require("./newsWidget/newsWidgetInit")
const eventWidget = require("./eventWidget/eventWidgetInit")


const generateNavbar = require("./navbar/generateNavbar")

// get page elements
const welcome = document.querySelector(".welcome");
const login = document.querySelector(".login");
const dashboard = document.querySelector(".dashboard");
const message = document.querySelector(".login__user-message");
const navbar = document.querySelector(".nutshellNavbar")


// control what elements exist on the page
const dashboardInit = function() {
    // I need to require chatWidget inside this function so it won't run until a user has made it to the dashboard. If it's on top of this module, it runs before there is an active user, and on first page load, we can't use chatWidget.user because it is blank.

    
    navbar.style.display = "flex"

    // populate navbar with items
    generateNavbar()

    message.innerHTML = "";
    welcome.style.display = "none";
    login.style.display = "none";
    dashboard.style.display = "block";

    newsWidget.init()
    taskWidget.init()
    chatWidget.init()
    newsWidget.init()
    eventWidget.init()
    friendsWidget.init()
}



module.exports = dashboardInit;