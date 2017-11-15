//Get Number of Atendees - Chris Miller
//Query the databse and find the number of attendees to the event

const db = require("../database")

const getNumberOfAttendees = function(eventId) {
    
    const  eventJoin = db().eventJoin
    return eventJoin.filter(x => x.eventId === eventId).length

}

module.exports = getNumberOfAttendees