/**
 * Krys Mathis
 * Generate the mark-up for the task widget
 */
const taskData = [];
const userId = 1;
const {a, button, div, h1, header, p, span, article, input} = require("./domHelpers");

const taskGenerateWidget = function() {
    
    const taskWidget = document.querySelector(".taskWidget");

    // Widget Header
    taskWidget.appendChild(
        header({"className": "taskWidget_header"},"Tasks")
    );

    // Task container
    taskWidget.appendChild(
        div({"className": "taskContainer"},
            input({ "className": "taskWidget", "type": "text" , "placeholder": "Enter task"}),
            button({"className": "taskWidget__btnSubmit"},"Submit")
        )

    );

    // let html = `
    //     <header class="taskWidget__header">Tasks</header>
    //         <div class="taskContainer">
    //         </div>
    //     <div class=taskWidget__input">
    //         <input class="taskWidget__txt" type="text">
    //         <button class="taskWidget__btnSubmit">Submit</button>
    //     </div>
    // `
    console.log(taskWidget);
};

module.exports = taskGenerateWidget