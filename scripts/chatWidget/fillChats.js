// Author: Greg Lawrence
// This module populates chatWidget with current message data from database

const getDatabase = require("../database")
const autoScroll = require("../autoScroll")


const fillChats = function() {
    const DB = getDatabase()
   
    // create a string to post to Dom for each chat message
    let chatMsgDomString = ""
    
    // get access to userName attached to the userId to display next to each message
    // iterate through messages array and look at each message
    DB.messages.forEach(msg => {
        // match up the userId attached to each message with a userId from user Table to get the username of the author of the message
        const messageAuthor = DB.users.find(user => {
            return msg.userId === user.id
        })

        // populate chat msg container dom string with data from each chat message
        chatMsgDomString += `
            <p class="chatWidget__msg" data-msg-id="${msg.id}"><span class="chatWidget__author" data-author-id="${messageAuthor.id}" data-author="${messageAuthor.userName}">${messageAuthor.userName}:</span><span class="chatWidget__content"> ${msg.content}</span>
            `
        //debugger
        // check if the logged in user is the author of the message, if so, add edit button
        if (this.user.userId === messageAuthor.id) {
            chatMsgDomString += `<button class="chatWidget__editBtn" id="editBtn_${msg.id}" data-author="${msg.userId}">Edit</button>
            `
        }
        chatMsgDomString += "</p>"
    })

    // get control of container for list of chat messages
    let chatContainerEl = document.querySelector(".chatContainer")
    // populate chat container with dom string
    chatContainerEl.innerHTML = chatMsgDomString
    autoScroll(this.containerName)
}


module.exports = fillChats