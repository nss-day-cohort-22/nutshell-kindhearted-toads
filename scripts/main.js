const getDatabase = require("./database")
const appInit = require("./auth/appInit")
const dbEventHandler = require("./dbEvent")

// The three lines below can be uncommented to populate the database with random stuff


// Uncomment these 3 lines if you need to build your database. This code maybe should be moved to the dashboardInit module.
if(!getDatabase()){
    const populateDB = require("./factories/populate_database")
    populateDB()
}

appInit();



