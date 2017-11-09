/**
 * Krys Mathis
 *   replaces an input box with a span
 */
const {a, button, div, h1, header, p, span, article, input} = require("../domHelpers");
const replaceInput = function(e) {
    let txt = e.target.value;
    let parent = e.target.parentNode;
    let replaceSpan = div({"className": "task__desc"},txt);
    parent.replaceChild(replaceSpan,e.target);
}

module.exports = replaceInput;