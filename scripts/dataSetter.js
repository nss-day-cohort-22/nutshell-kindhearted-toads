// Greg - DataSetter will take in data as input and set it to local storage.


// parameters will be the array to put into the database and a string that states the label/contents of the array

function setData (arrayToSet, labelOfArray) {
    // get a copy of the most recent version of DB in Local Storage
    let DB = JSON.parse(localStorage.getItem("DB"))

    // iterate over the DB and look for the property that matches the data to set.
    for (let key in DB) {
        // if property matches, overwrite the contents of the DB with the updated array
        if (key === labelOfArray) {
            DB.key = arrayToSet
        }
    }

    // set the updated DB into local storage
    localStorage.setItem("DB", JSON.stringify(DB))

}

modedule.exports = setData