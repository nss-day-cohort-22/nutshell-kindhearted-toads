/**
 * Krys Mathis
 * This function controls what shows up when the application launches
 */
//const activeUser = require("./getActiveUser");
const activeUser = require("./getActiveUser");
const dashboardInit = require("../dashboardInit");
const loginInit = require("./loginInit");

const appInit = () => {
    if (activeUser) {
        dashboardInit(activeUser);
    } else {
        loginInit;
    }
};

module.exports = appInit;