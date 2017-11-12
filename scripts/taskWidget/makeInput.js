/**
 * Krys Mathis
 * This function takes an existing element and turns it into in input field
 */

const makeInput = function(taskElement) {
    // take a task element and break it into children
    // return a new task element that is input boxes instead
    const childNodes = Array.from(taskElement.childNodes);

    if (childNodes.length === 0) {
        taskElement.innerHTML = "<input type='checkbox' class='task__checkbox'>";
        taskElement.innerHTML += "<input type='text' class='task__desc--input'>";
        taskElement.innerHTML += "<input type='date' class='task__completion-date--input'>";
        taskElement.innerHTML += "<button class='task__btn-commit'>Commit</button>"
    } else {
    // get the individual task elements
        const taskDesc = childNodes.find(c => c.className === "task__desc");
        const taskCompletionDate = childNodes.find(c=> c.className === "task__completion-date");
        const taskCheckbox = childNodes.find(c=> c.className === "task__checkbox");

        const taskDescContent = taskDesc ? taskDesc.textContent : "";
        const taskCompletionDateContent = taskCompletionDate ? taskCompletionDate.textContent : "";

        // replace the desc element with an input box
        //taskElement.replaceChild(taskInputDesc, taskDesc);
        const taskInputDesc = document.createElement("input");
        taskInputDesc.type = "text";
        taskInputDesc.className = "task__desc--input";
        taskInputDesc.value = taskDescContent;
        taskElement.replaceChild(taskInputDesc, taskDesc);
       
        // for the completion date field only
        const taskInputCompletionDate = document.createElement("input");
        taskInputCompletionDate.type = "date";
        taskInputCompletionDate.className = "task__completion-date--input";
        taskInputCompletionDate.value = taskCompletionDateContent;
        taskElement.replaceChild(taskInputCompletionDate,taskCompletionDate);
    }
    //console.log(taskElement);
    return taskElement;
}
// makeInput(taskElement);
module.exports = makeInput;