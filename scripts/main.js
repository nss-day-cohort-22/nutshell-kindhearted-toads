const getDatabase = require("./database")
const loginInit = require("./loginInit");
const login = require("./login")
const createNewUser = require("./createNewUser")
const chatWidgetInit = require("./chatWidgetInit")

const DB = getDatabase()
createNewUser("paul", "peter")

login("paul", "peter")




console.log("DB: ", DB)
chatWidgetInit(DB, DB.users[0].id)

