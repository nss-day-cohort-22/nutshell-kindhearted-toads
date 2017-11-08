const NutshellDatabase = {
    "users": [
        { "id": 1, "username": "Steve", "email": "me@me.com", "password": 123 },
        { "id": 2, "username": "Mark", "email": "you@you.com", "password": 123 },
        { "id": 3, "username": "Krista", "email": "foo@foo.com", "password": 123 }
    ],
    "messages": [
        { "id": 1, "userId": 1, "content": "What's up?", "timestamp": 0}
    ],
    "news": [
        { "id": 1, "userId": 1, "url": "https://www.quantamagazine.org/newfound-wormhole-allows-information-to-escape-black-holes-20171023/", "title": "Check out this recent discovery about workholes", "synopsis": "wormholes", "timestamp": 0 },
        { "id": 2, "userId": 2, "url": "www.google.com", "title": "Check out this great search site", "synopsis": "search", "timestamp": 0 },
        { "id": 3, "userId": 3, "url": "www.github", "title": "A great repo site", "synopsis": "repos", "timestamp": 0 }
    ],
    "friends": [
        { "id": 1, "userId": 1, "friendId": 3 },
        { "id": 2, "userId": 1, "friendId": 2 }
    ],
    "tasks": [
        { "id": 1, "userId": 3, "task": "Take out garbage", "complete": false, "completionDate": 0, "timestamp": 0 },
        { "id": 2, "userId": 1, "task": "Take out garbage, Steve", "complete": false, "completionDate": 0, "timestamp": 0 }
    ],
    "events": [
        {"id": 1, "userId": 1, "name": "Foo Fighters", "eventDate": 0, "location": "Bridgestone", "timestamp": 0 }
    ]
}

module.exports = NutshellDatabase;