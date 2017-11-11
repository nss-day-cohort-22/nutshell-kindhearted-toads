// Author: Greg Lawrence
// listen for click on the "add" button used to create a new chat message. Pull data from input field, the current userId and pass in these values to the messageTableFactory.js 

const messagesFactory = require("../factories/messagesTableFactory")
const fillChats = require("./fillChats")


// temporarily get database
const getDatabase = require("../database")

let editMode = false
let currentArticle = null

const createChatListener = () => {
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

            // STUCK HERE, chatWidget is causing an error as "undefined"
            console.log("chatWidget", chatWidget)
            //chatWidget.saveEdit("messages", newChatObject)
            editMode = false
        }

        // clear chat input field
        composeChatInput.value = ""
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
    
    // event listener to check if user has clicked edit btn on a message
    chatContainerEl.addEventListener("click", event => {
        console.log(event) 
        let composeChatInput = document.querySelector(".chatWidget__text")
        
        // get message the user wants to edit
        let msgToEditId = parseInt(event.target.id.split("_")[1])
        const DB = getDatabase()

        msgToEditFromDB = DB.messages.find(msg => {
            return msg.id === msgToEditId
        })
        composeChatInput.value = msgToEditFromDB.content
        
        console.log("msgToEditFromDB = ", msgToEditFromDB)

        // set editMode to true
        editMode = true
        currentArticle = msgToEditFromDB

        // console.log(msgToEditId)

     
    })

    // event listener to listen for click on userName

}
module.exports = createChatListener