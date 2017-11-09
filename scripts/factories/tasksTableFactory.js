// tasksTableFactory - Chris Miller
// returns new object for tasksTableFactory

const getDatabase = require("../database")
const setDatabase = require("../datasetter")
const getActiveUser = require("../auth/getActiveUser")

const taskFactory = taskObject => {

    const getDatabase = require("../database")
    let db = getDatabase()

    let idValue = 0

    if (db.tasks.length > 0) {
        idValue = db.tasks[db.tasks.length - 1].id
    }

    return Object.create(null, {
        "id" : {value: ++idValue, enumerable: true, writable: true},
        "timeStamp" : {value: Date.now(), enumerable: true, writable: true},
        "userID" : {value: getActiveUser.id, enumerable: true, writable: true},
        "taskName" : {value: taskObject.taskName, enumerable: true, writable: true},
        "completionDate" : {value: taskObject.completionDate, enumerable: true, writable: true},
        "completed" : {value: false, enumerable: true, writable: true},
        "save": {value: function () {
            db.tasks.push({
                "id": this.id,
                "timeStamp": this.timeStamp,
                "userID": this.userID,
                "taskName": this.taskName,
                "completionDate": this.completionDate,
                "completed": this.completed
            })
            setDatabase(db.tasks, "tasks")
            return this
        }}
    })

}

module.exports = taskFactory