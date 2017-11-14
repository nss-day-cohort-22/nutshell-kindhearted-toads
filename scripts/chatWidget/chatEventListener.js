// Author: Greg Lawrence
// listen for click on the "add" button used to create a new chat message. Pull data from input field, the current userId and pass in these values to the messageTableFactory.js 

const messagesFactory = require("../factories/messagesTableFactory")
const addFriendPrompt = require("../chatWidget/addFriendPrompt")
const getDatabase = require("../database")

const createChatListener = (chatWidget) => {

    // set edit mode to false by default
    let editMode = false
    // currentMessage will either hold a newly created chat message, or a edited chat message. 
    let currentMessage = null

    // get control of Send button used to create a new chat message
    const addChatBtnEl = document.querySelector(".chatWidget__btn")
    const chatInputField = document.querySelector(".chatWidget__text")
    const chatMsgAuthorEl = document.querySelector(".chatWidget__author")
    const chatMsgEl = document.querySelector(".chatWidget__msg")
    const chatContainerEl = document.querySelector(".chatContainer")

    // function to create a chat message object
    const createChatMsg = function() {
        
        let newChatObject = {}
        
        // get control of dom input element
        let composeChatInputEl = document.querySelector(".chatWidget__text")
        
        // check if enter key is pressed inside input field.
        if (event.type === "click" || event.keyCode === 13) {

            // check that the input field is not blank before allowing a message to be created
            if (chatInputField.value.length > 0) {
              
                // put the value of the input field into an object
                newChatObject.content = composeChatInputEl.value
                
                if (!editMode) {
                    // send new chat message object to the messagesFactory to get saved and pushed to local storage
                    messagesFactory(newChatObject).save()
                    

                } else if (editMode) {
                    // put the msg object currently being edited into newChatObject variable. Add the new content that's been edited, then use saveEdit() to replace item in database
                    newChatObject = currentMessage
                    newChatObject.content = composeChatInputEl.value

                    // use the function on our object to overwrite the chat message object in the database
                    chatWidget.saveEdit("messages", newChatObject)
                    
                    // change edit mode to false
                    editMode = false

                    // check if the button next to the input says "Save", if so, change back to Send
                    if (addChatBtnEl.textContent === "Save") {
                        addChatBtnEl.textContent = "Send"
                    }
                }

                // clear chat input field
                composeChatInputEl.value = ""
                // refresh chat window with newest content
                chatWidget.populate()
            }
        }
    }


    // add an event listener for Send button click and for Enter key press
    addChatBtnEl.addEventListener("click", createChatMsg)

    // event listener to check if user clicked the "Enter" key in the input field
    chatInputField.addEventListener("keyup", createChatMsg)
    
    // event listener to check if user has clicked edit button OR a username on a message
    chatContainerEl.addEventListener("click", event => {
        
        // check if event.target is the Edit Button
        if (event.target.id.startsWith("editBtn_")) {
            let composeChatInputEl = document.querySelector(".chatWidget__text")
            
            // get message the user wants to edit
            let msgToEditId = parseInt(event.target.id.split("_")[1])
            // get the id of the author of the message
            let msgToEditAuthorId = parseInt(event.target.dataset.author)
            

            // get Database, and search messages array for the message that user wants to edit.
            const DB = getDatabase()
            msgToEditFromDB = DB.messages.find(msg => {
                return msg.id === msgToEditId
            })
            // put the contents of the message to edit back into the input field
            if (msgToEditFromDB) {
                composeChatInputEl.value = msgToEditFromDB.content
                composeChatInputEl.focus()
                
                if (addChatBtnEl.textContent === "Send") {
                    addChatBtnEl.textContent = "Save"
                }
            }

            // set editMode to true
            editMode = true

            //Set the current article variable to the newly edited message object. This will later be passed into a function to write it to the database. 
            currentMessage = msgToEditFromDB

        }

        // event listener to listen for click on userName in Chat Widget
        if (event.target.dataset.authorId && event.target.dataset.authorId.length > 0) {
            
            let userIdClicked = parseInt(event.target.dataset.authorId)
            let userNameClicked = event.target.dataset.author

            // check if the username clicked on is NOT the currentUser
            if (chatWidget.user.userId !== userIdClicked)
                addFriendPrompt(chatWidget, userIdClicked, userNameClicked)
        }

    })
    
    // click event to display an edit button 
    chatContainerEl.addEventListener("click", event => {
        // check if the target has a next sibling
        if (event.target.nextElementSibling) {
            // check if the next sibling element is the Edit Button
            let nextSiblingId = event.target.nextElementSibling.id
            if (nextSiblingId.startsWith("editBtn_")) {
                // toggle class to make button visible
                event.target.nextElementSibling.classList.toggle("hidden")
            }
        }
    })
}
module.exports = createChatListener