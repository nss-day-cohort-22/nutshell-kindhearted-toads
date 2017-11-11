// Author: Greg Lawrence
// creates the chatWidget

const widgetTemplate = require("../widgetTemplate")
const fillChats = require("./fillChats")
const createChatListener = require("./chatEventListener")


let chatWidgetInit = function () { 

    //create new widget object
    const chatWidget = widgetTemplate()
    
    // build up a dom string for the additional unique elements for this widget, such as input fields and buttons that will be placed under the nested widgetContainer
    let additionalDomElementString = `
    <input type="text" class="chatWidget__text" placeholder="Chat with your friends">
    <button class="chatWidget__btn widgetBtn">Send</button>
    `

    // initialize new widget and pass in the name of the widget and the addition elements dom string
    chatWidget.init("chat", additionalDomElementString)
    
    // invoke the fill function
    fillChats()
    createChatListener()
    
}



module.exports = chatWidgetInit