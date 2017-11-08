const getDatabase = require("./database")
const loginInit = require("./loginInit");
const login = require("./login")
const createNewUser = require("./createNewUser")
getDatabase()
createNewUser("paul", "peter")
debugger
login("paul", "peter")
debugger


const DB = getDatabase()

chatWidgetInit(DB.messages, DB.user[0].id)

const chatWidgetInit = require("./chatWidgetInit")
