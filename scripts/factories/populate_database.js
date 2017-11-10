const userFactory = require("./usersTableFactory")
const tasksFactory = require("./tasksTableFactory")
const newsFactory = require("./newsTableFactory")
const messagesFactory = require("./messagesTableFactory")
const friendsJoinTableFactory = require("./friendsJoinTableFactory.js")
const eventsTableFactory = require("./eventsTableFactory.js")
const eventFriendJoinTableFactory = require("./eventFriendJoinTableFactory.js")

sessionStorage.setItem("userInfo", JSON.stringify({ "userId": 1, "userName": "Steve", "isEditing": false }))

let DB = {
    "users": [],
    "events": [],
    "messages": [],
    "friends": [],
    "news": [],
    "tasks": [],
    "eventJoin": []
}

localStorage.setItem("NutshellDatabase", JSON.stringify(DB))

const popDB = function () {

    const users = [
        { "userName": "Steve", "email": "me@me.com", "password": 123 },
        { "userName": "Mark", "email": "you@you.com", "password": 123 },
        { "userName": "Krista", "email": "foo@foo.com", "password": 123 },
        { "userName": "Greg", "email": "greg@greg.com", "password": 123 },
        { "userName": "Krys", "email": "krys@krys.com", "password": 123 },
        { "userName": "Chris", "email": "chris@chris.com", "password": 123 },
        { "userName": "Sean", "email": "sean@sean.com", "password": 123 },
    ]

    const messages = [
        { "content": "This is where a chat message will display" },
        { "content": "More Displayed Content" },
        { "content": "Test to see if this gets a userId info attached" },
        { "content": "I just want more than 4 messages" },
        { "content": "Five or more is better" },
        { "content": "Maybe even ten!" }
    ]

    const news = [
        { "url": "https://www.quantamagazine.org/newfound-wormhole-allows-information-to-escape-black-holes-20171023/", "title": "This is an example of a News Article", "synopsis": "put a summary of the article here" },
        { "url": "https://www.quantamagazine.org/newfound-wormhole-allows-information-to-escape-black-holes-20171023/", "title": "This is the same article again!" }
    ]

    const friends = [
        { "friendId": 3 },
        { "friendId": 1 },
        { "friendId": 4 },
        { "friendId": 2 }
    ]

    const tasks = [
        { "task": "Task example :: Take out garbage", "completionDate": "10/2/14" },
        { "task": "Second task example :: Bring the garbage back in", "completionDate": "10/2/14" },
        { "task": "Third Example", "completionDate": "10/11/12" }
    ]

    const events = [
        { "name": "Event example :: Foo Fighters", "eventDate": "10-10-17", "location": "Bridgestone" },
        { "name": "Event example :: Boo Bighters", "eventDate": "10-12-17", "location": "Bridgeblock" },
        { "name": "Event example :: Doo Dighters", "eventDate": "10-14-17", "location": "Walkwayestone" }
    ]

    const eventsJoin = [
        { "eventId": 1 },
        { "eventId": 1 },
        { "eventId": 2 },
        { "eventId": 2 },
        { "eventId": 3 },
        { "eventId": 3 }
    ]

    users.forEach(obj => userFactory(obj).save())
    messages.forEach(obj => messagesFactory(obj).save())
    news.forEach(obj => newsFactory(obj).save())
    friends.forEach(obj => friendsJoinTableFactory(obj).save())
    tasks.forEach(obj => tasksFactory(obj).save())
    events.forEach(obj => eventsTableFactory(obj).save())
    eventsJoin.forEach(obj => eventFriendJoinTableFactory(obj).save())

    sessionStorage.removeItem("userInfo")
}

module.exports = popDB