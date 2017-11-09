const getDatabase = require("./database")
const appInit = require("./appInit")
const login = require("./login")
const createNewUser = require("./createNewUser")

getDatabase()
appInit();
getDatabase()


const DB = getDatabase()
chatWidgetInit(DB, DB.users[0].id)


