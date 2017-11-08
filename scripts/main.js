const getDatabase = require("./database")



const DB = getDatabase()

chatWidgetInit(DB.messages, DB.user[0].id)

const chatWidgetInit = require("./chatWidgetInit")
