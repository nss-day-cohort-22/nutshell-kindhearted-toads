/**
 * Krys Mathis
 * This function takes an existing element and turns it into in input field
 */

let taskElement = document.createElement("div")
taskElement.className = "task";
taskElement.dataset.userId = "1";
taskElement.dataset.id = "1";
//container.appendChild(taskElement);
taskElement.innerHTML = "<input type='checkbox' class='task__checkbox'>" +
"<div class='task__desc' data-id='1' data-user-id='1'>The Task</div>"+
"<div class='task__completion-date' data-id='1' data-user-id='1'>CompletionDate</div>"

const makeInput = function(taskElement) {
    // take a task element and break it into children
    // return a new task element that is input boxes instead
    const childNodes = Array.from(taskElement.childNodes);

    // get the individual task elements
    const taskDesc = childNodes.find(c => c.className === "task__desc");
    const taskCompletionDate = childNodes.find(c=> c.className === "task__completion-date");
    const taskCheckbox = childNodes.find(c=> c.className === "task__checkbox");

    // replace the desc element with an input box
    //taskElement.replaceChild(taskInputDesc, taskDesc);
    const taskInputDesc = document.createElement("input");
    taskInputDesc.type = "text";
    taskInputDesc.className = "task__input";
    taskInputDesc.value = taskDesc.textContent;
    taskElement.replaceChild(taskInputDesc, taskDesc);
    console.log("taskElement: ",taskElement);



}
makeInput(taskElement);
module.exports = makeInput;