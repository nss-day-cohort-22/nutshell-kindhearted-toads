// Author: Greg Lawrence
// This module will automatically scroll the dom element to the bottom when there are more items than will fit in the container.

const autoScroll = function (elementToScroll) {
    // uses the passed in parameter to get control of a dom element
    const domEl = document.querySelector(`.${elementToScroll}`)
    // sets the scroll bar to the bottom of that element by using that elements scroll height number as the value. scrollTo(x, y)
    domEl.scrollTo(0, domEl.scrollHeight)
}

module.exports = autoScroll