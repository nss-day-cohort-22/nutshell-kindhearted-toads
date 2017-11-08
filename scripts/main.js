const getDatabase = require("./database")
const login = require("./login")
const createNewUser = require("./createNewUser")

getDatabase()
createNewUser("paul", "peter")
login("paul", "peter")
