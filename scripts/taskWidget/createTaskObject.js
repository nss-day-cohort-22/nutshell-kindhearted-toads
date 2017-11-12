const createTaskObject = function(taskChildElement,completedStatus) {
    
    const parent = taskChildElement.parentNode;
    const childNodes = Array.from(parent.childNodes);
    
    // if the element has an input then use that otherwise use the 
    let descEl = childNodes.find(el=> el.className === "task__desc--input");
    let descElValue = "";
    // Handle when it is not an input box
    if (!descEl) {
        descEl = childNodes.find(el=> el.className === "task__desc");
        descElValue = descEl.textContent;
    } else {
        descElValue = descEl.value;
    }
    
    let dateEl = childNodes.find(el=> el.className === "task__completion-date--input");
    let dateElValue = "";
    // handle when it is not an input box
    if (!dateEl) {
        dateEl = childNodes.find(el=> el.className === "task__completion-date");
        dateElValue = dateEl.textContent;
    } else {
        dateElValue = dateEl.value;
    }
    
    const taskObj = {"id": parseInt(parent.dataset.id),
        "timestamp": Date.now(),
        "userId": parseInt(parent.dataset.userId),
        "taskName": descElValue,
        "completionDate": dateElValue,
        "completed": completedStatus
    };

    return taskObj;
}

module.exports = createTaskObject;