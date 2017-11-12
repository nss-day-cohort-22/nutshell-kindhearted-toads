/**
 * Krys Mathis
 * Purpose is to handle initializing the structure for the dashboard
*/
// get page elements
const taskWidget = require("./taskWidget/taskWidgetInit");
const friendsWidgetInit = require("./friendsWidget/friendsWidgetInit")




// get page elements
const welcome = document.querySelector(".welcome");
const login = document.querySelector(".login");
const dashboard = document.querySelector(".dashboard");
const message = document.querySelector(".login__user-message");

// control what elements exist on the page
const dashboardInit = function(user) {
    // I need to require chatWidget inside this function so it won't run until a user has made it to the dashboard. If it's on top of this module, it runs before there is an active user, and on first page load, we can't use chatWidget.user because it is blank.
    const chatWidget = require("./chatWidget/chatWidgetInit")
    message.innerHTML = "";
    welcome.style.display = "none";
    login.style.display = "none";
    dashboard.style.display = "block";

    taskWidget.populate(taskWidget.getLatest());
    chatWidget.populate(chatWidget);
    friendsWidgetInit();
}



module.exports = dashboardInit;