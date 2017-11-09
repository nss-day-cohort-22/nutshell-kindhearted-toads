/**
 * Krys Mathis
 * This function controls what shows up when the application
 */
const utilities = require("./utilities");
const dashboardInit = require("./dashboardInit");
const loginInit = require("./loginInit");

const appInit = () => {
    const userID = utilities.getUserID;
    if (userID === -1) {
        dashboardInit(userID);
    } else {
        loginInit();
    }
};

module.exports = appInit;