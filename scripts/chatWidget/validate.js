// Validae Private Message Reciepient - Chris Miller
// Validate that the text between the the @ and the ' '  at the beggining of a private message is a valid user - or append a message at the end of the message

const validate = function(msg, users) {

    if (!users.find(x => x.userName.toLowerCase() === msg.rcp.toLowerCase())){
        msg.content += ` <strong style="color:firebrick">: WARNING : ${msg.rcp} is not a valid user</strong>`
    }

}

module.exports = validate