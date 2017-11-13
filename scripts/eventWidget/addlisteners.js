const autoScroll = require("../autoScroll")
const eventsTableFactory = require("./eventsTableFactory.js")

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
                    <input type="date" class="create-event create-event__date" name="eventDate">
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
        console.log(e)
        if(e.target.classList.contains("event-delete")){
            eventWidget.delete("events", e.target.dataset.id)
            eventWidget.populate()
        }
    })

}

module.exports = addlisteners
