
/**
 * Krys Mathis
 * Populates the task items to the DOM
 */

const {a, button, div, h1, header, p, span, article, input} = require("../domHelpers");

const container = document.querySelector(".taskContainer");

const generateTasks = function(tasks) {
    tasks.forEach(task =>
        container.appendChild(div({"className": "task"},
            input({"type": "checkbox", "className": "task__checkbox"}),
            span({"className": "task__desc"}, `${task.task}`))
        )
    )
}

module.exports = generateTasks;