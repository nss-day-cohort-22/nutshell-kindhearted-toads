//Event Widget Init - Chris Miller
//Initialize task widget and add methods

const getEvents = require("./getEvents")
const getUser = require("../auth/getActiveUser")
const generateEventContent = require("./generateEventContent")
const addlisteners = require("./addlisteners")
const autoScroll = require("../autoScroll")
const Widget = require("../widgetTemplate")

const eventWidget = Widget()

eventWidget.init = function() {

    //create new widget object

    // build up a dom string for the additional unique elements for this widget, such as input fields and buttons that will be placed under the nested widgetContainer

    let additionalElementDomString = `
        <div class="eventWidget__btn-container">
            <button class="eventWidget__btn eventWidget__btn-create">Create Event</button>
            <button class="eventWidget__btn eventWidget__btn-save eventWidget__btn-hidden">Save Event</button>
        </div>
    `

    // initialize new widget and pass in the name of the widget and the addition elements dom string
    eventWidget.prototype.init("events", additionalElementDomString)

    // invoke the createFriendsListener
    const user = getUser();
    
    const fillEvents = function() {
        let events = getEvents(user)
        generateEventContent(events)
        const autoScroll = require("../autoScroll")
        autoScroll(eventWidget.containerName)
    }

    eventWidget.widgetContainer = "eventsWidget"
    eventWidget.user = user
    eventWidget.populate = fillEvents
    eventWidget.containerName = "eventsContainer"
    eventWidget.addlisteners = addlisteners
    eventWidget.addlisteners(eventWidget)
}

module.exports = eventWidget;

