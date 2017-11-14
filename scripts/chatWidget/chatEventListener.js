// Author: Greg Lawrence
// listen for click on the "add" button used to create a new chat message. Pull data from input field, the current userId and pass in these values to the messageTableFactory.js 

const messagesFactory = require("../factories/messagesTableFactory")
const addFriendPrompt = require("../chatWidget/addFriendPrompt")


// require module to get Database
const getDatabase = require("../database")

// set edit mode to false by default
let editMode = false
// currentMessage will either hold a newly created chat message, or a edited chat message. 
let currentMessage = null


const createChatListener = (chatWidget) => {
    // get control of Send button used to create a new chat message
    const addChatBtnEl = document.querySelector(".chatWidget__btn")
    const chatInputField = document.querySelector(".chatWidget__text")
    const chatMsgAuthorEl = document.querySelector(".chatWidget__author")
    const chatMsgEl = document.querySelector(".chatWidget__msg")
    // const chatMsgContentEl = document.querySelector(".chatWidget__content")
    const chatContainerEl = document.querySelector(".chatContainer")
    const chatWidgetEditBtnEl = document.querySelector(".chatWidget__editBtn")

    // function to create a chat message object
    const createChatMsg = function() {
        let newChatObject
        // get control of dom input element
        let composeChatInput = document.querySelector(".chatWidget__text")

        if (!editMode) {
            // put the value of the input field into an object
            newChatObject = {"content": composeChatInput.value}

            // send new chat message object to the messagesFactory to get saved and pushed to local storage
            if (newChatObject.content.charAt(0) === "@") {
                let rcp = newChatObject.content.split(" ")[0].slice(1)
                messagesFactory(newChatObject, rcp).save()
            } else {
                messagesFactory(newChatObject).save()
            }




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
        chatWidget.populate()
    }
    

    // add an event listener for Send button click and for Enter key press
    addChatBtnEl.addEventListener("click", event => {
        // check that the input field is not blank before allow a message to be created
        if (chatInputField.value.length > 0) {
            createChatMsg()
            
            if (addChatBtnEl.textContent === "Save") {
                addChatBtnEl.textContent = "Send"
            }
        }
    }) 

    // event listener to check if user clicked the "Enter" key in the input field
    chatInputField.addEventListener("keyup", event => {

        // check if enter key is pressed inside input field and that the input field isn't empty, if so, run createChatMsg function
        if (event.keyCode === 13 && event.target.value.length > 0) {
            createChatMsg()
        }
    })
    
    // event listener to check if user has clicked edit button OR a username on a message
    chatContainerEl.addEventListener("click", event => {
        
        // check if event.target is the Edit Button
        if (event.target.id.startsWith("editBtn_")) {
            let composeChatInput = document.querySelector(".chatWidget__text")
            
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
                composeChatInput.value = msgToEditFromDB.content
                composeChatInput.focus()
                // console.log(addChatBtnEl.textContent)
                if (addChatBtnEl.textContent === "Send") {
                    addChatBtnEl.textContent = "Save"
                }
            }

            // set editMode to true
            editMode = true

            // Set the current article variable to the newly edited message object. This will later be passed into a function to write it to the database. 
            currentMessage = msgToEditFromDB

        }

        // event listener to listen for click on userName
        if (event.target.dataset.authorId && event.target.dataset.authorId.length > 0) {
            
            let userIdClicked = parseInt(event.target.dataset.authorId)
            let userNameClicked = event.target.dataset.author

            // check if the username clicked on is NOT the currentUser
            if (chatWidget.user.userId !== userIdClicked)
                addFriendPrompt(chatWidget, userIdClicked, userNameClicked)
        }

    })
    
    // mouseover event to display an edit button 
    chatContainerEl.addEventListener("click", event => {
        // check if the target has a next sibling
        if (event.target.nextElementSibling) {
            // check if the next sibling element is the Edit Button
            let nextSiblingId = event.target.nextElementSibling.id
            if (nextSiblingId.startsWith("editBtn_")) {
                event.target.nextElementSibling.classList.toggle("hidden")
            }
        }
    })

}
module.exports = createChatListener