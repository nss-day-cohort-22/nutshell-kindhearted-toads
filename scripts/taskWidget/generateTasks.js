
/**
 * Krys Mathis
 * Populates the task items to the DOM
 */
const generateTasks = function(tasks) {
    const container = document.querySelector(".tasksContainer");
    container.innerHTML = "";
    tasks.forEach(task => {
        const newDiv = document.createElement("div");
        newDiv.className = "task";
        newDiv.dataset.userId = task.userId;
        newDiv.dataset.id = task.id;
        container.appendChild(newDiv);
        newDiv.innerHTML = `<input type="checkbox" class="task__checkbox">
        <div class="task__desc" data-id="${task.id}" data-user-id="${task.userId}">${task.taskName}</div>
        <div class="task__completion-date" data-id="${task.id}" data-user-id="${task.userId}">${task.completionDate}</div>
        `
    })
}

module.exports = generateTasks;