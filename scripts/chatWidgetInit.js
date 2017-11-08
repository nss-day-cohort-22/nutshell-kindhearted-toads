// Greg - creates the chatWidget 
// function gets database, userId as input



let chatWidgetInit = function (DB, userId) {
    let chatWidgetEl = document.querySelector(".chatWidget")

    
    let chatContainerDomString = `
        <header class='chatWidget__header'>Chat</header>
        <div class='chatContainer'>
        </div>   
        <input type="text" class="chatWidget__text">
        <button class="chatWidget__btn"></button>
        `

    // this maybe optional depending on how we push new messages to the database
    //array.sort((a,b) => a.id-b.id)
        
        
    // get access to userName attached to the userId to display next to each message    
    
    // iterate through messages array and look at each message
    DB.messages.forEach(msg => {
        let messageAuthor = ""
        // match up the userId attached to each message with a userId from user Table to get the username of the author of the message
        DB.users.forEach(user => {
            if (msg.userId === user.id) {
                messageAuthor = user.userName
            }
        })

        // create a string to post to Dom
        let chatMsgDomString = `
            ${messageAuthor}: ${msg.content}
        `
    })
}


modules.exports = chatWidgetInit