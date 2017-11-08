/**
 * Krys Mathis
 * Purpose is to handle initializing the structure for the dashboard
 */

const welcome = document.querySelector(".welcome");
const login = document.querySelector(".login");
const dashboard = document.querySelector(".dashboard");
const message = document.querySelector(".login__user-init");

const dashboardInit = function() {
    message.innerHTML = "";
    welcome.style.display = "none";
    login.style.display = "none";
    dashboard.style.display = "";
}

module.exports = dashboardInit;