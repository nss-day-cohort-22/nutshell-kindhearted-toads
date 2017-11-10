// Author: Greg Lawrence
// listen for click on the "add" button used to create a new chat message. Pull data from input field, the current userID and pass in these values to the messageTableFactory.js 

const messagesFactory = require("../factories/messagesTableFactory")
const fillChats = require("./fillChats")

const addChatBtnEl = document.querySelector(".chatWidget__btn")

addChatBtnEl.addEventListener("click", e => {
    let newChatString = document.querySelector(".chatWidget__text")

    let newChatObject = {"content": newChatString.value}
    
    messagesFactory(newChatObject).save()

    newChatString.value = ""

    fillChats()
})


module.exports = null