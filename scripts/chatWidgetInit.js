// Author: Greg Lawrence
// creates the chatWidget and populates with current message data from database
//function gets database, userId as input




let chatWidgetInit = function (DB, userId) {

    console.log("DB in chatWidget: ", DB)
    console.log("userId in chatWidget: ", userId)

    // get control of DOM element to place HTML code for chat container
    let chatWidgetEl = document.querySelector(".chatWidget")

    // build up a DOM string for chat container
    let chatContainerDomString = `
        <header class='chatWidget__header'>Chat</header>
        <div class='chatContainer'>
        </div>   
        <input type="text" class="chatWidget__text" placeholder="Chat with your friends">
        <button class="chatWidget__btn"></button>
        `
        
    // push DOM string to DOM element    
    chatWidgetEl.innerHTML = chatContainerDomString


    // this maybe optional depending on how we push new messages to the database
    //array.sort((a,b) => a.id-b.id)


    // get access to userName attached to the userId to display next to each message


    // create a string to post to Dom for each chat message
    let chatMsgDomString = ""

    // iterate through messages array and look at each message
    DB.messages.forEach(msg => {
        let messageAuthor = ""
        // match up the userId attached to each message with a userId from user Table to get the username of the author of the message
        DB.users.forEach(user => {
            if (msg.userId === user.id) {
                messageAuthor = user.userName
            }
        })

        // populate chat msg container dom string with data from each chat message
        chatMsgDomString += `
            <span class="chatWidget__msg">${messageAuthor}: ${msg.content}</span>
        `
    })

    // get control of container for list of chat messages
    let chatContainerEl = document.querySelector(".chatContainer")
    // populate chat container with dom string
    chatContainerEl.innerHTML = chatMsgDomString
}


module.exports = chatWidgetInit