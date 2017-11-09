const getDatabase = require("./database")
const appInit = require("./auth/appInit")

getDatabase()
appInit();
getDatabase()


const DB = getDatabase()
chatWidgetInit(DB, DB.users[0].id)


