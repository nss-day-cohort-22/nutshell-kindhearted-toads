//Generate Event Content - Chris Miller
//take the filtered events and display them to the DOM

const generateEvents = function(events) {

    const container = document.querySelector(".eventsContainer");

    container.innerHTML = "";

    //filter events by date
    events = events.sort((a,b) => b.upcoming-a.upcoming)
    console.log(events[events.length-1])
    events[events.length-1].style += " event--nextEvent"

    events.forEach(event => {
        if (event.display) {
            let checked = ""
            let disabled = ""
            let deleteButton = ""
            let editIcon = ""
            
            if (event.creator){
                disabled = "disabled"
                deleteButton = `<button class="event-delete event-delete__${event.id}">Delete</button>`
                editIcon = `<img src="/images/edit.svg" class="event-edit event-edit__${event.id}"></div>`
            }

            if (event.attending){
                checked = "checked"
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
                <div class="event-edit__container">
                    ${editIcon}
                </div>
                <span class="event__eventDetails">
                    <p>${event.name}</p>
                    <p>${event.location} / ${event.eventDate}</p>
                </span>
                <span class="event__eventAttending">
                    <p>Attending</p>
                    ${deleteButton}
                    <input type="checkbox" class="event-button__attending" ${disabled} ${checked}>
                </span>
            `
        }
    })
}

module.exports = generateEvents;