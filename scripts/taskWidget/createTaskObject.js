/**
 * Krys Mathis
 * Creates an object to load into the database for updates
 */

const getTaskSiblings = require("./getTaskSiblings");
const createTaskObject = function(taskChildElement,completedStatus) {
    
    const parent = taskChildElement.parentNode;
    const siblings = getTaskSiblings(taskChildElement);
    
    const descElValue = siblings[0].value;
    const dateElValue = siblings[1].value;
    
    const taskObj = {"id": parseInt(parent.dataset.id),
        "timestamp": Date.now(),
        "userId": parseInt(parent.dataset.userId),
        "taskName": descElValue,
        "completionDate": dateElValue,
        "completed": completedStatus
    };

    return taskObj;
}

module.exports = createTaskObject;