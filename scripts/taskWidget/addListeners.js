/**
 * Krys Mathis
 * Event listeners for the task widget
 */

const {a, button, div, h1, header, p, span, article, input} = require("../domHelpers");
const replaceInput = require("./replaceInput");
const autoScroll = require("../autoScroll")
const taskFactory = require ("../factories/tasksTableFactory")

// element
const task = document.querySelector(".taskWidget");
let currentText = ""
let editing = false;

const addEvents = function(taskWidget) {

    // adding a new task
    const taskAddButton = document.querySelector(".tasksWidget__btn-add");
    taskAddButton.addEventListener("click",(e)=>{
        const taskContainer = document.querySelector(".tasksContainer");
        
        // build a new element for each entry
        // taskContainer.appendChild(div({"className": "task"},
        //     input({"type": "checkbox", "className": "task__checkbox"}),
        //     input({"type":"text", "className": "task__input", "value": ""})));

        taskContainer.appendChild(div({"className": "task"},
            input({"type": "checkbox", "className": "task__checkbox"}),
            input({"type":"text", "className": "task__input", "value": ""})));

        autoScroll(taskWidget.containerName);
    });

    document.addEventListener("keyup", (e)=> {

        // check input field and return it to normal status when user clicks return
        if (e.target.className === "task__input") {
            if (e.keyCode === 13) {
                if (e.target.value !== currentText){
                // save it to the database
                // "id": this.id,
                // "timeStamp": this.timeStamp,
                // "userId": this.userId,
                // "taskName": this.taskName,
                // "completionDate": this.completionDate,
                // "completed": this.completed    
                
                    taskObj = {"id": parseInt(e.target.dataset.id),
                        "timestamp": Date.now(),
                        "userId": parseInt(e.target.dataset.userId),
                        "taskName": e.target.value,
                        "completionDate": null,
                        "completed": false
                    };
  
                    taskWidget.saveEdit("tasks",taskObj);
                    console.warn("saving to the database");
                }
                editing = false;
                replaceInput(e);
            }
        }
    });


    // This will change the box from a span to an input box
    document.addEventListener("click", function(e) {

        if (e.target.className === "task__desc") {

        // get text from element
            let txt = e.target.innerHTML;
            currentTxt = txt;
            let parent = e.target.parentNode;
            // create the new element
            const inputBox = document.createElement("input");
            inputBox.type = "text";
            inputBox.className = "task__input";
            inputBox.value = txt;
            inputBox.dataset.userId = e.target.dataset.userId;
            inputBox.dataset.id = e.target.dataset.id;

            // replace the old element
            parent.replaceChild(inputBox,e.target);
            inputBox.focus();
            editing = true;
        

        }
    });

    // This will revert an input box back to a span
    document.addEventListener("focusout", function(e) {

        if (e.target.className === "task__input" && editing===true) {
            if (e.target.value !== currentTxt) {
                console.warn("saving to the database");
            }
            replaceInput(e);
        }
    });
}
module.exports = addEvents;