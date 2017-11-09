const popDB = require("./factories/populate_database")

function getDatabase () {

    let DB = JSON.parse(localStorage.getItem("NutshellDatabase")) || null

    if (DB) {
        console.log("Database Found")
        return DB
    } else {
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

