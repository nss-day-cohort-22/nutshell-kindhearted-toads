/**
 * Krys Mathis
 * Gets task data from the database for the user
 */

const getActiveUser = require("../auth/getActiveUser");
const generateTasks = require("./generateTasks");

const getTasks = function(database) {
    const user = getActiveUser();
    // get incomplete tasks for user
    let tasks = database.tasks || []
    let filteredTasks = tasks
        .filter(t=> t.userId === user.userId && !t.completed)
        .sort((f,s)=> f.id - s.id);

    return filteredTasks;
    
}

module.exports = getTasks;