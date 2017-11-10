// Author: Greg Lawrence
// listen for click on the "add" button used to create a new chat message. Pull data from input field, the current userID and pass in these values to the messageTableFactory.js 

const messagesFactory = require("../factories/messagesTableFactory")
const fillChats = require("./fillChats")

// get control of Send button used to create a new chat message
const addChatBtnEl = document.querySelector(".chatWidget__btn")
const chatInputField = document.querySelector(".chatWidget__text")

const createChatMsg = function(event) {
    // get control of dom input element
    let newChatString = document.querySelector(".chatWidget__text")
    // put the value of the input field into an object
    let newChatObject = {"content": newChatString.value}
    // send new chat message object to the messagesFactory to get saved and pushed to local storage
    messagesFactory(newChatObject).save()
    
    // clear chat input field
    newChatString.value = ""
    // refresh chat window with newest content
    fillChats()
}

// add an event listeners for Send button click and for Enter key press
addChatBtnEl.addEventListener("click", createChatMsg)
chatInputField.addEventListener("keyup", e => {
    // check if enter key is pressed inside input field, if so, run createChatMsg function
    if (e.keyCode === 13) {
        createChatMsg()
    }
})

module.exports = null