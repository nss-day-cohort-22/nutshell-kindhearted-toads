//Event Toaster - Chris Miller
//Use the toaster fuctionality Krys wrote to display a toaster of all atendees of an event

const Toaster = require("../toaster/toaster")
const db = require("../database")

const toaster = Toaster()

const eventAtendeeToaster = function (eventId) {
    let userTable = db().users
    let eventJoinTable = db().eventJoin

    let eventAtendee = eventJoinTable.filter(x => x.eventId === eventId).map(x => userTable.find(a => a.id === x.userId).userName)
    if(eventAtendee.length > 0){
        toaster.makeToast(eventAtendee.toString().replace(/,/g, ", "), 5000)
    } else {
        toaster.makeToast("Sorry! No one wants to come!", 5000)
    }
}

module.exports = eventAtendeeToaster