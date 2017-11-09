const getDatabase = require("./database")
const loginInit = require("./loginInit");
const login = require("./login")
const createNewUser = require("./createNewUser")
const chatWidgetInit = require("./chatWidgetInit")






createNewUser("paul", "peter")
login("paul", "peter")




const DB = getDatabase()
chatWidgetInit(DB, DB.users[0].id)

