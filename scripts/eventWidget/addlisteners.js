const autoScroll = require("../autoScroll")
const getCurrentDate = require("../getCurrentDate")
const eventsTableFactory = require("../factories/eventsTableFactory.js")
const eventFriendJoinTableFactory = require("../factories/eventFriendJoinTableFactory.js")


const addlisteners = function(eventWidget) {

    //Create Event Button
    const createEventButton = document.querySelector(".eventWidget__btn-create");
    createEventButton.addEventListener("click",(e)=>{
        container = document.querySelector(".eventsContainer")
        const newDiv = document.createElement("div")
        newDiv.className = "event event--create"
        container.appendChild(newDiv)
        newDiv.innerHTML = `
            <span class="event__eventDetails">
                <input type="text" class="create-event create-event__name" name="eventName" placeholder="Event Name" width="100%"><br>
                <span class="eventDetails-bottom">
                    <input type="text" class="create-event create-event__location" name="eventLocation" placeholder="Event Location">
                    <input type="date" name="eventDate" class="create-event create-event__date" value=${getCurrentDate()}>
                </span>
            </span>
            <span class="event__eventAttending">
                <p>Attending</p>
                <input type="checkbox" class="event-button__attending" disabled checked>
            </span>
        `
        autoScroll(eventWidget.containerName)

        Array.from(document.getElementsByClassName("eventWidget__btn")).map(el => el.classList.toggle("eventWidget__btn-hidden"))
    })

    //save event button
    const saveEventButton = document.querySelector(".eventWidget__btn-save")
    saveEventButton.addEventListener("click",(e)=>{
        eventsTableFactory({
            "name": document.querySelector("input[name='eventName']").value,
            "eventDate": document.querySelector("input[name='eventDate']").value,
            "location": document.querySelector("input[name='eventLocation']").value
        }).save()
        
        Array.from(document.getElementsByClassName("eventWidget__btn")).map(el => el.classList.toggle("eventWidget__btn-hidden"))

        eventWidget.populate()
    })

    const eventWidgetContainer = document.querySelector(`.${eventWidget.containerName}`)
    eventWidgetContainer.addEventListener("click", (e)=>{
        //delete button
        if(e.target.classList.contains("event-delete")){
            eventWidget.delete("events", e.target.dataset.id)
            eventWidget.populate()
        }

        //replace an event with text inputs for editing

        else if (e.target.parentNode.parentNode.dataset.creator === "true" && document.querySelector(".event__editDetails") === null) {
            
            let eventEl = e.target.parentNode.parentNode
        
            eventEl.innerHTML = `
                <span class="event__editDetails">
                    <input type="text" class="edit-event edit-event__name" name="eventName" value="${eventEl.dataset.eventName}" width="100%"><br>
                    <span class="eventDetails-bottom">
                        <input type="text" class="edit-event edit-event__location" name="eventLocation" value="${eventEl.dataset.eventLocation}">
                        <input type="date" name="eventDate" class="edit-event edit-event__date" value="${eventEl.dataset.eventDate}">
                    </span>
                </span>
                <span class="event__eventAttending">
                    <p>Editing</p>
                    <button class="edit-event__btn">Save</btn>
                </span>
            `

            document.getElementsByClassName("eventWidget__btn")[0].classList.toggle("eventWidget__btn-hidden")
        }

        else if (e.target.className === "edit-event__btn") {
            
            let eventId = parseInt(e.target.parentNode.parentNode.dataset.id)
            let eventName = document.querySelector(".edit-event__name").value
            let eventLocation = document.querySelector(".edit-event__location").value
            let eventDate = document.querySelector(".edit-event__date").value
            
            let newEventObject = Object.create(null, {
                "id" : {value: eventId, enumerable: true, writable: true},
                "timeStamp" : {value: Date.now(), enumerable: true, writable: true},
                "userId" : {value: eventWidget.user.userId, enumerable: true, writable: true},
                "name" : {value: eventName, enumerable: true, writable: true},
                "eventDate" : {value: eventDate, enumerable: true, writable: true},
                "location" : {value: eventLocation, enumerable: true, writable: true}
            })

            eventWidget.saveEdit("events", newEventObject)
            document.getElementsByClassName("eventWidget__btn")[0].classList.toggle("eventWidget__btn-hidden")
            eventWidget.populate()
        }

        //click to set attending status
        else if (e.target.className === "event-button__attending") {
            if(e.target.checked){
                eventFriendJoinTableFactory({ "eventId":  parseInt(e.path[2].dataset.id)}).save()
                eventWidget.populate()
            } else if (!e.target.checked) {
                eventWidget.delete("eventJoin", parseInt(e.path[2].dataset.eventJoin))
                eventWidget.populate()
            }
        }
    })
}

module.exports = addlisteners
