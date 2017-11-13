//getEvents - Chris Miller
//Pull all events from data base to be displayed - 

const database = require("../database");
const getFriends = require("../auth/getFriends");

const getEvents = function(user) {
    let userId = user.userId
    let friendsList = getFriends()
    let eventsAttending = database().eventJoin.filter(el => el.userId === userId)
    eventsAttending = eventsAttending.map(el => el.eventId)

    let events = database().events


    let filteredEvents = events.map( event => {

        event.creator = false
        event.attending = false
        event.display = false

        if (event.userId === userId) {
            event.creator = true
            event.attending = true
            event.display = true
        } else if (eventsAttending.includes(event.id)) {
            event.attending = true
            event.display = true
        } else if (friendsList.includes(event.userId)) {
            event.display = true
        }

        return event

    })

    console.log(filteredEvents)
    return filteredEvents
}

module.exports = getEvents;