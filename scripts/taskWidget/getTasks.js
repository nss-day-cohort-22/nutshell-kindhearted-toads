/**
 * Krys Mathis
 * Gets task data from the database for the user
 */
const database = require("../database");

const getTasks = function(user) {
    // get incomplete tasks for user
    let tasks = database().tasks
        .filter(t=> t.userId === user.userId && !t.complete)
        .sort((f,s)=> f.id - s.id);
    return tasks;
}

module.exports = getTasks;