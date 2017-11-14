//Generate Event Content - Chris Miller
//take the filtered events and display them to the DOM

const getUserName = require("./getUserName")
const getNumberOfAtendees = require("./getNumberOfAttendees")

const generateEvents = function(events) {

    const container = document.querySelector(".eventsContainer");

    container.innerHTML = "";

    //filter events by date
    events = events.sort((a,b) => b.upcoming-a.upcoming)
    events[events.length-1].style += " event--nextEvent"

    events.forEach(event => {
        if (event.display) {
            let checked = ""
            let disabled = ""
            let deleteButton = ""
            let status = `Created by ${getUserName(event.userId)}`
            
            if (event.creator){
                let eventAttendees = getNumberOfAtendees(event.id)
                disabled = "disabled"
                deleteButton = `<button class="event-delete event-delete__${event.id}">Delete</button>`
                status = `Creator - <strong style="font-size:.8em">${eventAttendees} Guests</strong>`
                checked = "checked"
            } else if (event.attending){
                checked = "checked"
                deleteButton = "Attending : "
            } else {
                deleteButton = "Attend? : "
            }


            const newDiv = document.createElement("div")
            newDiv.className = `event  ${event.style}`
            newDiv.dataset.userId = event.userId
            newDiv.dataset.id = event.id
            newDiv.dataset.creator = event.creator
            newDiv.dataset.eventName = event.name
            newDiv.dataset.eventDate = event.eventDate
            newDiv.dataset.eventLocation = event.location
            newDiv.dataset.eventJoin = event.eventJoin

            container.appendChild(newDiv)
            newDiv.innerHTML = `
                <span class="event__eventDetails">
                    <p>${event.name}</p>
                    <p>${event.location} -- ${event.eventDate}</p>
                </span>
                <span class="event__eventAttending">
                    <p style="font-size:.7em">${status}</p>
                    ${deleteButton}
                    <input type="checkbox" class="event-button__attending" ${disabled} ${checked}>
                </span>
            `
        }
    })
}

module.exports = generateEvents;