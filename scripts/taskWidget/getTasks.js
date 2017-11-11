/**
 * Krys Mathis
 * Gets task data from the database for the user
 */
const database = require("../database");
const getActiveUser = require("../auth/getActiveUser");

const getTasks = function() {
    const user = getActiveUser();
    // get incomplete tasks for user
    let db = database() || {"tasks":[]};
    let tasks = db.tasks || []
    tasks = tasks
        .filter(t=> t.userId === user.userId && !t.complete)
        .sort((f,s)=> f.id - s.id);
    return tasks;
}

module.exports = getTasks;