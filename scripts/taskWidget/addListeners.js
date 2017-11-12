/**
 * Krys Mathis
 * Event listeners for the task widget
 */
const replaceInput = require("./replaceInput");
const autoScroll = require("../autoScroll")
const taskFactory = require ("../factories/tasksTableFactory")
const makeInput = require("./makeInput");
const createTaskObject = require("./createTaskObject");
const domIsClean = require("./verifyDOM");
const getTaskSiblings = require("./getTaskSiblings");
const getCurrentDate = require("../getCurrentDate");



const addEvents = function(taskWidget) {
    // task Widget Element
    const tasksWidgetEl = document.querySelector(`.${taskWidget.widgetContainer}`);

    // ADD button
    const taskAddButton = document.querySelector(".tasksWidget__btn-add");
    taskAddButton.addEventListener("click",(e)=>{
        if (domIsClean()) {
            const taskContainer = document.querySelector(".tasksContainer");
            const task = document.createElement("div");
            task.className = "task";

            task.innerHTML += "<input type='text' class='task__desc--input' autofocus>";
            task.innerHTML += "<input type='date' class='task__completion-date--input' value='"+getCurrentDate()+"'>";
            task.innerHTML += "<button class='task__btn-commit'>Commit</button>"
            taskContainer.appendChild(task);
            autoScroll(taskWidget.containerName);
        }
    });

    //
    tasksWidgetEl.addEventListener("keyup", function(e) {
        //if the task is in input mode, the enter key is pressed
        if (e.keyCode === 13 && e.target.className === "task__desc--input" && document.querySelector(".task__btn-update")) {
            const taskObj = createTaskObject(e.target,false);
            taskWidget.saveEdit("tasks",taskObj);
            taskWidget.refresh(taskWidget);
        }
    });

    // This will change the box from a span to an input box
    tasksWidgetEl.addEventListener("click", function(e) {

        /**
         * Edit Mode
         */
        if (e.target.className === "task__desc" || e.target.className === "task__completion-date") {

            if (!domIsClean()) {
                return;
            }
            // get the element values
            const parent = e.target.parentNode;
            const elements = getTaskSiblings(e.target);
            const descEl = elements[0];
            const dateEl = elements[1];
            // create the new elements
            // Input text box
            const inputDesc = document.createElement("input");
            inputDesc.type = "text";
            inputDesc.className = "task__desc--input";
            inputDesc.value = descEl.value;
            inputDesc.dataset.userId = e.target.dataset.userId;
            inputDesc.dataset.id = e.target.dataset.id;
            // Input completion date box
            const completionDateInput = document.createElement("input");
            completionDateInput.type = "date";
            completionDateInput.className = "task__completion-date--input";
            completionDateInput.value = dateEl.value;
            // add the confirm button too
            const confirmButton = document.createElement("button");
            confirmButton.className = "task__btn-update";
            confirmButton.textContent = "Update";
            parent.appendChild(confirmButton);
            // replace the old elements
            parent.replaceChild(inputDesc,descEl.element);
            parent.replaceChild(completionDateInput,dateEl.element);
            inputDesc.focus();



        }

        /**
         * Commiting a change after edit mode
         */
        if (e.target.className === "task__btn-commit") {
            // validate the input
            // take the input and add it to the database
            const elements = getTaskSiblings(e.target);
            const taskDetail = elements[0].value;
            const taskCompletionDate = elements[1].value;

            
            if (taskDetail.length > 0){
                taskFactory({taskName: taskDetail, completionDate: taskCompletionDate }).save();
            }
            taskWidget.refresh(taskWidget);
            autoScroll(taskWidget.containerName);
            //editing = false;
        }

        // Commit button after an update is made
        if (e.target.className === "task__btn-update") {
            // Update the database with a task object
            const parent  = e.target.parentNode;
            const childNodes = Array.from(parent.childNodes);
            const descEl = childNodes.find(el=>el.className === "task__desc--input");
            if (descEl.value.length > 0) {
                const taskObj = createTaskObject(e.target,false);
                taskWidget.saveEdit("tasks",taskObj);
            }
            taskWidget.refresh(taskWidget);

        }
    });

    // This handles the checkbox change event
    tasksWidgetEl.addEventListener("change", (e) => {
        if (e.target.className === "task__checkbox") {
            setTimeout(function() {
                const taskObj = createTaskObject(e.target,true);
                taskWidget.saveEdit("tasks",taskObj);
                taskWidget.refresh(taskWidget);
            }, 200);
        }
    });

}






module.exports = addEvents;