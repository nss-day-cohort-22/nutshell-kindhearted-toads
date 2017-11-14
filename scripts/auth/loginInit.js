/**
 * Krys Mathis
 * This module unhides the sections
 * 
 */
const addEvents = require("./loginEventListeners");

const loginInit = () => {
    const welcomePage = document.querySelector(".welcome");
    const loginPage = document.querySelector(".login");
    const dashboardPage = document.querySelector(".dashboard");
    
    welcomePage.style.display = "";
    loginPage.style.display = "none";
    dashboardPage.style.display = "none";
}

module.exports = loginInit