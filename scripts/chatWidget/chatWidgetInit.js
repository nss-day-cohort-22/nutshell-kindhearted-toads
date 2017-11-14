// Author: Greg Lawrence
// creates the chatWidget

const widgetTemplate = require("../widgetTemplate")
const getUser = require("../auth/getActiveUser");
const fillChats = require("./fillChats")
const createChatListener = require("./chatEventListener")

//create new widget object
const chatWidget = widgetTemplate()

chatWidget.init = function () { 

    // build up a dom string for the additional unique elements for this widget, such as input fields and buttons that will be placed under the nested widgetContainer
    let additionalDomElementString = `
    <input type="text" class="chatWidget__text" placeholder="Chat with your friends">
    <button class="chatWidget__btn widgetBtn">Send</button>
    `

    // initialize new widget and pass in the name of the widget and the addition elements dom string
    chatWidget.prototype.init("chat", additionalDomElementString)
    
    const user = getUser();

    chatWidget.widgetContainer = "chatWidget";
    chatWidget.user = user;
    chatWidget.populate = fillChats
    chatWidget.containerName = "chatContainer"
    
    
    chatWidget.createChatListener = createChatListener
    chatWidget.createChatListener(chatWidget)
}


module.exports = chatWidget