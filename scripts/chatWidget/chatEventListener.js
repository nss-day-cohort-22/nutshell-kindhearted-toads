// Author: Greg Lawrence
// listen for click on the "add" button used to create a new chat message. Pull data from input field, the current userId and pass in these values to the messageTableFactory.js 

const messagesFactory = require("../factories/messagesTableFactory")
const fillChats = require("./fillChats")

// temporarily get database
const getDatabase = require("../database")

let editMode = false
let currentArticle = null

const createChatListener = (chatWidget) => {
    // get control of Send button used to create a new chat message
    const addChatBtnEl = document.querySelector(".chatWidget__btn")
    const chatInputField = document.querySelector(".chatWidget__text")
    const chatMsgAuthorEl = document.querySelector(".chatWidget__author")
    const chatMsgEl = document.querySelector(".chatWidget__msg")
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
            messagesFactory(newChatObject).save()
        } else if (editMode) {
            // put the msg object currently being edited into newChatObject variable. Add the new content that's been edited, then use saveEdit() to replace item in database
            newChatObject = currentArticle
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
    addChatBtnEl.addEventListener("click", createChatMsg)
    chatInputField.addEventListener("keyup", e => {
        // check if enter key is pressed inside input field, if so, run createChatMsg function
        if (e.keyCode === 13) {
            createChatMsg()
        }
    })
    
    // event listener to check if user has clicked edit btn on a message
    chatContainerEl.addEventListener("click", event => {
        console.log(event) 
        let composeChatInput = document.querySelector(".chatWidget__text")
        
        // get message the user wants to edit
        let msgToEditId = parseInt(event.target.id.split("_")[1])
        // get the id of the author of the message
        let msgToEditAuthorId = parseInt(event.target.dataset.author)
        
        // check if the current user is the author of the message. If not, don't let the user edit
        if (chatWidget.user.userId === msgToEditAuthorId){
            // get Database, and search messages array for the message that user wants to edit.
            const DB = getDatabase()
            msgToEditFromDB = DB.messages.find(msg => {
                return msg.id === msgToEditId
            })
            // put the contents of the message to edit back into the input field
            composeChatInput.value = msgToEditFromDB.content
            
            console.log("msgToEditFromDB = ", msgToEditFromDB)

            // set editMode to true
            editMode = true
            //Set the current article variable to the newly edited message object. This will later be passed into a function to write it to the database. 
            currentArticle = msgToEditFromDB

           
        }
     
    })

    // event listener to listen for click on userName

}
module.exports = createChatListener