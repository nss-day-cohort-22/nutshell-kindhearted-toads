const getDatabase = require("./database")
const loginInit = require("./loginInit");
const login = require("./login")
const createNewUser = require("./createNewUser")
getDatabase()
createNewUser("paul", "peter")
debugger
login("paul", "peter")
debugger

