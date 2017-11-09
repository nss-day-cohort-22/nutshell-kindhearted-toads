/**
 * Krys Mathis
 * This init function:
 * 1. Create the overall structure for the task widget
 * 2. get the user data
 * 3. generate the individual tasks
 */

const structure = require("./createStructure");
const getTasks = require("./getTasks");
const getUser = require("../auth/getActiveUser");
const generateTasks = require("./generateTasks");
const addListeners = require("./addListeners");



const taskInit = function() {
    const user = getUser;
    generateTasks(getTasks(user));
}

module.exports = taskInit;

