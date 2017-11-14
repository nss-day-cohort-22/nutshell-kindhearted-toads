
const validate = function(msg, users) {

    if (!users.find(x => x.userName.toLowerCase() === msg.rcp.toLowerCase())){
        msg.content += ` <strong style="color:firebrick">: WARNING : ${msg.rcp} is not a valid user</strong>`
    }

}

module.exports = validate