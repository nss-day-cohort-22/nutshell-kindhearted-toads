/**
 * Krys Mathis
 * This function controls what shows up when the application launches
 */
const activeUser = require("./getActiveUser");
const dashboardInit = require("../dashboardInit");
const loginInit = require("./loginInit");

const appInit = () => {

    document.title = "Nutshell"
    if (activeUser()) {
        dashboardInit();
    } else {
        loginInit();
    }
};

module.exports = appInit;