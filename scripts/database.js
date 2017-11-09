
// Author: Greg Lawrence
// Purpose: to retrieve database from local storage and return it, if no database exists, create one, set it to local storage and return it.

const popDB = require("./factories/populate_database")

function getDatabase () {

    // check if database exists in local storage and store in variable
    let DB = JSON.parse(localStorage.getItem("NutshellDatabase")) || null

    if (DB) {
        console.log("Database Found")
        return DB
    } else {
        // create a data base if none already exists
        console.log("No Database Found")

        DB = {
            "users": [],
            "events": [],
            "messages": [],
            "friends": [],
            "news": [],
            "tasks": [],
            "eventJoin": []
        }

        localStorage.setItem("NutshellDatabase", JSON.stringify(DB))
        popDB()
        return DB

    }
}

module.exports = getDatabase;

