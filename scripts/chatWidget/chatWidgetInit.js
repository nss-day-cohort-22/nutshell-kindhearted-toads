// Author: Greg Lawrence
// creates the chatWidget


const fillChats = require("./fillChats")
const createChatListener = require("./chatEventListener")

let chatWidgetInit = function () {
    
    // get control of DOM element to place HTML code for chat container
    let chatWidgetEl = document.querySelector(".chatWidget")

    // build up a DOM string for chat container
    let chatContainerDomString = `
        <header class='chatWidget__header widgetHeader'>Chat</header>
        <div class='chatContainer widgetContainer'>
        </div>   
        <input type="text" class="chatWidget__text" placeholder="Chat with your friends">
        <button class="chatWidget__btn widgetBtn">Send</button>
        `

    // push DOM string to DOM element
    chatWidgetEl.innerHTML = chatContainerDomString


    // this maybe optional depending on how we push new messages to the database
    //array.sort((a,b) => a.id-b.id)
    // debugger
    fillChats()
    createChatListener()
}



module.exports = chatWidgetInit