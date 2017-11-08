// Greg - DataSetter will take in data as input and set it to local storage.

// get a copy of the most recent version of DB in Local Storage from the database module
const DB = require("./database")


// parameters will be the array to put into the database and a string that states the label/contents of the array
function setData (arrayToSet, stringLabelOfArray) {

    // iterate over the DB and look for the property that matches the data to set.
    for (let key in DB) {
        // if property matches, overwrite the contents of the DB with the updated array
        if (key === stringLabelOfArray) {
            DB.key = arrayToSet
        }
    }

    // set the updated DB into local storage
    localStorage.setItem("NutshellDatabase", JSON.stringify(DB))

}

module.exports = setData