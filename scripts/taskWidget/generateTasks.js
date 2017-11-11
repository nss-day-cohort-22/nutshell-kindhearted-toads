
/**
 * Krys Mathis
 * Populates the task items to the DOM
 */

const {a, button, div, h1, header, p, span, article, input} = require("../domHelpers");

const generateTasks = function(tasks) {
    const container = document.querySelector(".tasksContainer");
    tasks.forEach(task => {
        let newDiv = div({"className": "task"});
        container.appendChild(newDiv);
        newDiv.innerHTML = `<input type="checkbox" class="task__checkbox">
        <div class="task__desc" data-id="${task.id}" data-user-id="${task.userId}">${task.taskName}</div>
        <div class="task__completion-date" data-id="${task.id}" data-user-id="${task.userId}">${task.completionDate}</div>
        `
    })
}

module.exports = generateTasks;