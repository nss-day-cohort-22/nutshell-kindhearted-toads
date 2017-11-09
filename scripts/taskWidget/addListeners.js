/**
 * Krys Mathis
 * Event listeners for the task widget
 */

const {a, button, div, h1, header, p, span, article, input} = require("../domHelpers");
const replaceInput = require("./replaceInput");

// element
const task = document.querySelector(".taskWidget");
let currentText = ""
let editing = false;

document.addEventListener("keyup", (e)=> {
    // temp will go away once pulling from database
    if (e.target.className === "taskWidget__input"){
        if (e.keyCode === 13) {
            // get the value
            const txt = e.target.value;
            // clear the value
            e.target.value = "";

            const taskContainer = document.querySelector(".taskContainer");

            // build a new element for each entry
            taskContainer.appendChild(div({"className": "task"},
                input({"type": "checkbox", "className": "task__checkbox"}),
                div({"className": "task__desc"}, `${txt}`)));

        }
    }

    // check input field and return it to normal status when user clicks return
    if (e.target.className === "task__input") {
        if (e.keyCode === 13) {
            if (e.target.value !== currentTxt){
                // save it to the database
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
        const inputBox = input({"type":"text", "className": "task__input", "value": txt});

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

module.exports = null;