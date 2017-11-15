/**
 * Krys Mathis
 * This module unhides the sections
 * 
 */
// the requirement for 
const addEvents = require("./loginEventListeners");

const loginInit = () => {
    const welcomePage = document.querySelector(".welcome");
    const loginPage = document.querySelector(".login");
    const dashboardPage = document.querySelector(".dashboard");
    // add event listeners
    addEvents();
    welcomePage.style.display = "";
    loginPage.style.display = "none";
    dashboardPage.style.display = "none";
}

module.exports = loginInit