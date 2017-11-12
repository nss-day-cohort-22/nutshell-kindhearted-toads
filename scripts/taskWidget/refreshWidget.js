/**
 * Krys Mathis
 * Steps to refresh the widget
 * @param {*} obj 
 */

const refreshWidget = function(obj) {
    // get the latest
    obj.latest = obj.getLatest();
    //repaint the widget with latest
    obj.populate(obj.latest)
}

module.exports = refreshWidget;