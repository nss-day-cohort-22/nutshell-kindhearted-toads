// tasksTableFactory - Chris Miller
// returns new object for tasksTableFactory

const idGenerator = require("./idGenerator")

tasksIdGenerator = idGenerator()

const taskTableFactory = taskInfoObject => {
    return Object.create(null, {
        "id" : {value: tasksIdGenerator.next().value, enumerable: true, writable: true},
        "timeStamp" : {value: Date.now(), enumerable: true, writable: true},
        "userID" : {value: taskInfoObject.userID, enumerable: true, writable: true},
        "taskName" : {value: taskInfoObject.taskName, enumerable: true, writable: true},
        "completionDate" : {value: taskInfoObject.completionDate, enumerable: true, writable: true},
        "completed" : {value: false, enumerable: true, writable: true}
    })
}

module.exports = taskTableFactory