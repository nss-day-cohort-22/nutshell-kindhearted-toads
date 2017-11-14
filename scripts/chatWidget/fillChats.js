// Author: Greg Lawrence
// This module populates chatWidget with current message data from database

const getDatabase = require("../database")
const autoScroll = require("../autoScroll")

const isPrivate = function (msg) {
    if (msg.rcp) {
        return true
    } else {
        return false
    }
}
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

        if(isPrivate(msg) && (messageAuthor.id === this.user.userId || msg.rcp === this.user.useName)) {
            // populate chat msg container dom string with data from each chat message
            chatMsgDomString += `
                <p class="chatWidget__msg isPrivate" data-msg-id="${msg.id}"><span class="chatWidget__author" data-author-id="${messageAuthor.id}" data-author="${messageAuthor.userName}">${messageAuthor.userName}:</span><span class="chatWidget__content" data-msg-id="${msg.id}"> ${msg.content}</span>
                `
        } else {
            // populate chat msg container dom string with data from each chat message
            chatMsgDomString += `
                <p class="chatWidget__msg" data-msg-id="${msg.id}"><span class="chatWidget__author" data-author-id="${messageAuthor.id}" data-author="${messageAuthor.userName}">${messageAuthor.userName}:</span><span class="chatWidget__content" data-msg-id="${msg.id}"> ${msg.content}</span>
                `
        }
        //debugger
        // check if the logged in user is the author of the message, if so, add edit button
        if (this.user.userId === messageAuthor.id) {

            chatMsgDomString += `<button class="chatWidget__editBtn btn hidden" id="editBtn_${msg.id}" data-msg-id="${msg.id}" data-author="${msg.userId}">Edit</button>
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