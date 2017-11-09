const getDatabase = require("./database")
const appInit = require("./auth/appInit")

// The three lines below can be uncommented to populate the database with random stuff

getDatabase()
const populateDB = require("./factories/populate_database")
populateDB()


appInit();



