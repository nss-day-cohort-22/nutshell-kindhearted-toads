/**
 * Krys Mathis
 * Check that there are no other input boxes in the task widget
 * before adding or modifying any other records
 * This is a way to make sure you are only adding or modifying one
 * record at a time
 */
const domIsClean = function() {
    
    if (document.querySelector(".task__desc--input")) {
        return false;
    }
    else {
        return true;
    }
}

module.exports = domIsClean;