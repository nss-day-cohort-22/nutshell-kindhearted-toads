// Author: Greg Lawrence
// Purpose: to retrieve database from local storage and return it.


function getDatabase () {

    // check if database exists in local storage and store in variable
    let DB = JSON.parse(localStorage.getItem("NutshellDatabase")) || null

    return DB
}

module.exports = getDatabase;