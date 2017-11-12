/**
 * Krys Mathis
 *   replaces an input box with a completed task
 */
const replaceInput = function(e) {
    let txt = e.target.value;
    let parent = e.target.parentNode;
    // gather the inputs from the element

    // repopulate the task container
    //parent.innerHTML = ""
    let replaceWithText = document.createElement("div");
    replaceWithText.className = "task__desc",
    replaceWithText.innerHTML = txt;
    replaceWithText.dataset.userId = e.target.dataset.userId;
    replaceWithText.dataset.id = e.target.dataset.id;

    parent.replaceChild(replaceWithText,e.target);
}

module.exports = replaceInput;