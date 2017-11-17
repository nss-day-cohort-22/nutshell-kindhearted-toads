// Author: Greg Lawrence
// Purpose: to retrieve database from local storage and return it.


function getDatabase (callback) {

    // check if database exists in local storage and store in variable
    $.ajax({
        "url": "database.json"
    }).then((database)=>{
        callback(database);
    })

}

module.exports = getDatabase;