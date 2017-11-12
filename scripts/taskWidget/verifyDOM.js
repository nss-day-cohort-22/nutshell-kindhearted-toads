const domIsClean = function() {
    
    if (document.querySelector(".task__desc--input")) {
        return false;
    }
    else {
        return true;
    }
}

module.exports = domIsClean;