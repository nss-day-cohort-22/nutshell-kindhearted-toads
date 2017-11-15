//Event Toaster - Chris Miller
//Use the toaster fuctionality Krys wrote to display a toaster of all atendees of an event

const Toaster = require("../toaster/toaster")
const db = require("../database")

const toaster = Toaster()

const eventAtendeeToaster = function (eventId) {
    let userTable = db().users
    let eventJoinTable = db().eventJoin

    //filter out the entries in the event join table to find the event attendies - for each of those entries find and return the user name that matches the user id
    let eventAtendee = eventJoinTable.filter(x => x.eventId === eventId).map(x => userTable.find(a => a.id === x.userId).userName)

    //display a toaster with the list of names or a message if there are currently no attendees
    if(eventAtendee.length > 0){
        toaster.makeToast(eventAtendee.toString().replace(/,/g, ", "), 5000)
    } else {
        toaster.makeToast("Sorry! No one wants to come!", 5000)
    }
}

module.exports = eventAtendeeToaster