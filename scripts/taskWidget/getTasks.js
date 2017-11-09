/**
 * Krys Mathis
 * Gets task data from the database for the user
 */
const database = require("../database");

const getData = function(user) {
    // get incomplete tasks for user
    tasks = database()["tasks"].filter(task => task.userId === user.userID && task.complete === false);
    return tasks;

}

module.exports = getData;