/**
 * Krys Mathis
 * Event listeners for the task widget
 */

const {a, button, div, h1, header, p, span, article, input} = require("../domHelpers");
const replaceInput = require("./replaceInput");
const autoScroll = require("../autoScroll")
const taskFactory = require ("../factories/tasksTableFactory")
const makeInput = require("./makeInput");

// element
const task = document.querySelector(".taskWidget");
let currentText = ""
let editing = false;

const addEvents = function(taskWidget) {


    const tasksWidgetEl = document.querySelector(".tasksWidget");
    
    // adding a new task
    const taskAddButton = document.querySelector(".tasksWidget__btn-add");
    taskAddButton.addEventListener("click",(e)=>{
        const taskContainer = document.querySelector(".tasksContainer");
        const task = document.createElement("div");
        task.className = "task";
        task.innerHTML = "<input type='checkbox' class='task__checkbox'>";
        task.innerHTML += "<input type='text' class='task__desc--input'>";
        task.innerHTML += "<input type='date' class='task__completion-date--input'>";
        task.innerHTML += "<button class='task__btn-commit'>Commit</button>"
        taskContainer.appendChild(task);
        editing = false;
        autoScroll(taskWidget.containerName);
    });

    
    tasksWidgetEl.addEventListener("keyup", (e)=> {

        // check input field and return it to normal status when user clicks return
        if (e.target.className === "task__desc--input") {
            if (e.keyCode === 13) {
                if (e.target.value !== currentText && editing){
                    

                    taskObj = {"id": parseInt(e.target.parentNode.dataset.id),
                        "timestamp": Date.now(),
                        "userId": parseInt(e.target.parentNode.dataset.userId),
                        "taskName": e.target.value,
                        "completionDate": null,
                        "completed": false
                    };
  
                    taskWidget.saveEdit("tasks",taskObj);

                }
                editing = false;
                replaceInput(e);
            }
        }
    });


    // This will change the box from a span to an input box
    tasksWidgetEl.addEventListener("click", function(e) {

        if (e.target.className === "task__desc") {

        // get text from element
            let txt = e.target.innerHTML;
            currentTxt = txt;
            let parent = e.target.parentNode;
            // create the new element
            const inputBox = document.createElement("input");
            inputBox.type = "text";
            inputBox.className = "task__desc--input";
            inputBox.value = txt;
            inputBox.dataset.userId = e.target.dataset.userId;
            inputBox.dataset.id = e.target.dataset.id;

            // replace the old element
            parent.replaceChild(inputBox,e.target);
            inputBox.focus();
            editing = true;
        

        }

        if (e.target.className === "task__btn-commit") {
            // validate the input
            // take the input and add it to the database
            const parent = e.target.parentNode;
            const childNodes = Array.from(parent.childNodes);
            const descEl = childNodes.find(el=> el.className === "task__desc--input");
            const dateEl = childNodes.find(el=> el.className === "task__completion-date--input");
            const taskDetail = descEl.value;
            const taskCompletionDate = dateEl.value;
            console.warn("adding to the database");
            taskFactory({taskName: taskDetail, completionDate: taskCompletionDate }).save();

            console.log("taskDeail: ", taskDetail);
        }
    });

    // This will revert an input box back to a span
    tasksWidgetEl.addEventListener("focusout", function(e) {

        if (e.target.className === "task__desc--input" && editing===true) {
            if (e.target.value !== currentTxt) {
                console.warn("saving to the database");
            }
            replaceInput(e);
        }
    });
}
module.exports = addEvents;