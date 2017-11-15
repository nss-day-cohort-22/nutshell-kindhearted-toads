const getDatabase = require("./database")
const appInit = require("./auth/appInit")


if(!getDatabase()){
    const populateDB = require("./factories/populate_database")
    populateDB()
}

appInit();



