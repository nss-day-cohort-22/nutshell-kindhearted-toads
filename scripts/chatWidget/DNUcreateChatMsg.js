// Author: Greg Lawrence
// function to create a chat message object

// currently NOT using this, got too complicated to split this up for now. Going to work on adding friending first


const messagesFactory = require("./messagesTableFactory")


const createChatMsg = function(chatMsgObject) {


    const chatInputField = document.querySelector(".chatWidget__text")
    const chatMsgAuthorEl = document.querySelector(".chatWidget__author")
    const chatMsgEl = document.querySelector(".chatWidget__msg")
    const chatContainerEl = document.querySelector(".chatContainer")

    
    // currentMessage will either hold a newly created chat message, or a edited chat message. 
    let currentMessage = null

    let newChatObject
    // get control of dom input element
    let composeChatInput = document.querySelector(".chatWidget__text")

    if (!editMode) {
        // put the value of the input field into an object
        newChatObject = {"content": composeChatInput.value}
        // send new chat message object to the messagesFactory to get saved and pushed to local storage
        messagesFactory(newChatObject).save()
    } else if (editMode) {
        // put the msg object currently being edited into newChatObject variable. Add the new content that's been edited, then use saveEdit() to replace item in database
        newChatObject = currentMessage
        newChatObject.content = composeChatInput.value

        // use the function on our object to overwrite the chat message object in the database
        chatWidget.saveEdit("messages", newChatObject)
        editMode = false
    }

    // clear chat input field
    composeChatInput.value = ""
    // refresh chat window with newest content
    chatWidget.populate(chatWidget)
}


module.exports = createChatMsg