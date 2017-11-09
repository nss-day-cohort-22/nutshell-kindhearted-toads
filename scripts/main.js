const getDatabase = require("./database")
const loginInit = require("./loginInit");
const login = require("./login")
const createNewUser = require("./createNewUser")
const taskWidgetInit = require("./taskGenerateWidget");

getDatabase()
createNewUser("paul", "peter")
login("paul", "peter")

taskWidgetInit();

