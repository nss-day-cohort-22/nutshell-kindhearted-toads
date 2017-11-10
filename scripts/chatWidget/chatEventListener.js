// Author: Greg Lawrence
// listen for click on the "add" button used to create a new chat message. Pull data from input field, the current userId and pass in these values to the messageTableFactory.js 

const messagesFactory = require("../factories/messagesTableFactory")
const fillChats = require("./fillChats")

// temporarily get database
const getDatabase = require("../database")


const createChatListener = () => {
    // get control of Send button used to create a new chat message
    const addChatBtnEl = document.querySelector(".chatWidget__btn")
    const chatInputField = document.querySelector(".chatWidget__text")
    const chatMsgAuthorEl = document.querySelector(".chatWidget__author")
    const chatMsgEl = document.querySelector(".chatWidget__msg")
    const chatContainerEl = document.querySelector(".chatContainer")
    const chatWidgetEditBtnEl = document.querySelector(".chatWidget__editBtn")


    const createChatMsg = function(event) {
        // get control of dom input element
        let composeChatInput = document.querySelector(".chatWidget__text")
        // put the value of the input field into an object
        let newChatObject = {"content": composeChatInput.value}
        // send new chat message object to the messagesFactory to get saved and pushed to local storage
        messagesFactory(newChatObject).save()
        
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
    
    // event listener to check if user is click edit btn on a message
    chatContainerEl.addEventListener("click", event => {
        console.log(event) 
        let composeChatInput = document.querySelector(".chatWidget__text")
        
        // get message the user wants to edit
        let msgToEditId = parseInt(event.target.id.split("_")[1])
        const DB = getDatabase()

        msgToEditfromDB = DB.messages.find(msg => {
            return msg.id === msgToEditId
        })
        composeChatInput.value = msgToEditfromDB.content

        console.log("msgToEditFromDB = ", msgToEditfromDB)



        // console.log(msgToEditId)

     
    })

    // event listener to listen for click on userName

}
module.exports = createChatListener