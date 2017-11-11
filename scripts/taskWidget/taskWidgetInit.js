/**
 * Krys Mathis
 * This init function:
 * 1. Create the overall structure for the task widget
 * 2. get the user data
 * 3. generate the individual tasks
 */

//const structure = require("./createStructure");
const getTasks = require("./getTasks");
const getUser = require("../auth/getActiveUser");
const generateTasks = require("./generateTasks");
const addEvents = require("./addListeners");
const database = require("../database.js");
const Widget = require("../widgetTemplate")

//console.log(taskWidget);
const taskWidget = Widget()

function taskWidgetInit() {

    //create new widget object

    // build up a dom string for the additional unique elements for this widget, such as input fields and buttons that will be placed under the nested widgetContainer

    let additionalElementDomString = "<button class='tasksWidget__btn-add'>Add</button>";

    // initialize new widget and pass in the name of the widget and the addition elements dom string
    taskWidget.init("tasks", additionalElementDomString)

    // invoke the fill function

    // invoke the createFriendsListener
    const user = getUser();
    const tasks = getTasks(user);

    const generateTasksEls = function() {
        generateTasks(tasks);
    }

    taskWidget.user = user;
    taskWidget.getTasks = getTasks;
    taskWidget.tasks = taskWidget.getTasks(taskWidget.user);
    taskWidget.populate = generateTasks;
    taskWidget.containerName = "tasksContainer";
    taskWidget.addEvents = addEvents;
    taskWidget.addEvents(taskWidget);

 
}
taskWidgetInit();

module.exports = taskWidget;

