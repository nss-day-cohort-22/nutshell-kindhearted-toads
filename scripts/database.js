// Author: Greg Lawrence
// Purpose: to retrieve database from local storage and return it, if no database exists, create one, set it to local storage and return it.


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
            "users": [
                // eventually remove these placeholder accounts
                { "id": 1, "userName": "Steve", "email": "me@me.com", "password": 123 },
                { "id": 2, "userName": "Mark", "email": "you@you.com", "password": 123 },
                { "id": 3, "userName": "Krista", "email": "foo@foo.com", "password": 123 }
            ],
            "messages": [
                { "id": 1, "userId": 1, "content": "This is where a chat message will display", "timestamp": 0},
                { "id": 2, "userId": 2, "content": "I love placeholder!", "timestamp": 0},
                { "id": 3, "userId": 2, "content": "Whatever, this is lame.", "timestamp": 0},
            ],
            "news": [
                { "id": 1, "userId": 1, "url": "https://www.quantamagazine.org/newfound-wormhole-allows-information-to-escape-black-holes-20171023/", "title": "This is an example of a News Article", "synopsis": "put a summary of the article here", "timestamp": 0 },
                // { "id": 2, "userId": 2, "url": "www.google.com", "title": "Check out this great search site", "synopsis": "search", "timestamp": 0 },
                // { "id": 3, "userId": 3, "url": "www.github", "title": "A great repo site", "synopsis": "repos", "timestamp": 0 }
            ],
            "friends": [
                // eventually remove these placeholder friend connections
                { "id": 1, "userId": 1, "friendId": 3 },
                { "id": 2, "userId": 1, "friendId": 2 }
            ],
            "tasks": [
                { "id": 1, "userId": 3, "task": "Task example :: Take out garbage", "complete": false, "completionDate": 0, "timestamp": 0 },
                // { "id": 2, "userId": 1, "task": "Take out garbage, Steve", "complete": false, "completionDate": 0, "timestamp": 0 }
            ],
            "events": [
                {"id": 1, "userId": 1, "name": "Event example :: Foo Fighters", "eventDate": 0, "location": "Bridgestone", "timestamp": 0 }
            ]
        }

        localStorage.setItem("NutshellDatabase", JSON.stringify(DB))
        return DB
    }
}

module.exports = getDatabase;

