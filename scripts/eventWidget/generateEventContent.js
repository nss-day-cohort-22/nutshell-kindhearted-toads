//Generate Event Content - Chris Miller
//take the filtered events and display them to the DOM

const generateEvents = function(events) {

    const container = document.querySelector(".eventsContainer");

    container.innerHTML = "";

    events.forEach(event => {
        if (event.display) {
            let checked = ""
            let disabled = ""
            let deleteButton = ""
            
            if (event.creator){
                disabled = "disabled"
                deleteButton = `<button class="event-delete event-delete__${event.id}">Delete</button>`
            }

            if (event.attending){
                checked = "checked"
            }


            const newDiv = document.createElement("div");
            newDiv.className = "event";
            newDiv.dataset.userId = event.userId;
            newDiv.dataset.id = event.id;
            newDiv.dataset.creator = event.creator;
            container.appendChild(newDiv);
            newDiv.innerHTML = `
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