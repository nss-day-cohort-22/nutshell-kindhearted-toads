const Toaster = require("../toaster/toaster")
const db = require("../database")

const toaster = Toaster()

const eventAtendeeToaster = function (eventId) {
    let userTable = db().users
    let eventJoinTable = db().eventJoin

    let eventAtendee = eventJoinTable.filter(x => x.eventId === eventId).map(x => userTable.find(a => a.id === x.userId).userName)
    toaster.makeToast(eventAtendee.toString().replace(/,/g, ", "), 5000)
}

module.exports = eventAtendeeToaster