/**
 * Krys Mathis
 * What task information is in the current element?
 * Returns the task desc element and value + the date element and value as an object
 * The task widget can either be in input status or display status. If it is display
 * mode then we need to pull the textContent, if it is in input mode we want the 
 * value from the input box
 */

const getTaskSiblings = function( element ) {
    
    const parent = element.parentNode;
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

    return [{"element": descEl, "value": descElValue}, {"element": dateEl, "value": dateElValue}];
}

module.exports = getTaskSiblings;