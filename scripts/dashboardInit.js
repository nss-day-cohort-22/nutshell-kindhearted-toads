/**
 * Krys Mathis
 * Purpose is to handle initializing the structure for the dashboard
 */
// get page elements
//const chatWidgetInit = require("./chatWidget/chatWidgetInit");
const taskWidgetInit = require("./taskWidget/taskWidgetInit");

const welcome = document.querySelector(".welcome");
const login = document.querySelector(".login");
const dashboard = document.querySelector(".dashboard");
const message = document.querySelector(".login__user-message");

// control what elements exist on the page
const dashboardInit = function(user) {
    
    message.innerHTML = "";
    welcome.style.display = "none";
    login.style.display = "none";
    dashboard.style.display = "block";

    // const DB = getDatabase()
    //chatWidgetInit;
    taskWidgetInit();
}

module.exports = dashboardInit;