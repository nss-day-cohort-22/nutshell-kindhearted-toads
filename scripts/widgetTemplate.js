// Author: Greg Lawrence
// A template to use to create widgets that inherit properties from the template. 

// add a require for autoScroll and all other functions/modules that are used
const autoScroll = require("./autoScroll")
const getDatabase = require("./database")
const dataSetter = require("./dataSetter")


const defaultWidget = Object.create(null, {
    "init": {
        "writable": true,
        "value": function(name, additionalContentString = ""){
            // Add the passed in name variable to the widget object
            this.name = name
            // get control of dom element for the widget 
            let widgetEl = document.querySelector(`.${name}Widget`)
                
            // build up a DOM string for widget container
            let widgetContainerDomString = `
            <header class='${name}Widget__header widgetHeader'>${name}</header>
            <div class='${name}Container widgetContainer'>
            -- PLACEHOLDER DATA --
            </div>   
            `
            
            // add the users additional dom string from passed in parameter     
            widgetContainerDomString += additionalContentString
            // push DOM string to DOM element
            widgetEl.innerHTML = widgetContainerDomString
            // add the widget container name to the widget object to use later
            this.container = document.querySelector(`.${name}Container`)
        }
    },
    "saveEdit": {
        "writable": true,
        "value": function(stringLabelOfArray, newEditedObject){
            // assign new editedObject to proper database location
            const DB = getDatabase()

            // check if the stringLabel passed in is a valid database object
            if (DB.hasOwnProperty(stringLabelOfArray)) {
                
                // find the index in the array that matches the item that was edited
                let editedIndexNum = DB[stringLabelOfArray].findIndex(e => e.id ===newEditedObject.id);
                // overwrite the object in the array with the edited object
                DB[stringLabelOfArray][editedIndexNum] = newEditedObject
                
                // call dataSetter() function to set the updated array into the database. 
                dataSetter(DB[stringLabelOfArray], stringLabelOfArray)
            }
        }
    },
    "delete": {
        "writable": true,
        "value": function(stringLabelOfArray, itemId) {
            const DB = getDatabase()
            // check if the stringLabel passed in is a valid database object
            if (DB.hasOwnProperty(stringLabelOfArray)) {
                let indexToDelete = DB[stringLabelOfArray].findIndex(e => e.id === itemId);
                // delete the item from the array
                DB[stringLabelOfArray].splice(indexToDelete, 1)

                // call dataSetter() function to set the updated array into the database. 
                dataSetter(DB[stringLabelOfArray], stringLabelOfArray)
            }
        }
    },
    "fill": {
        "writable": true,
        "value": function(domString) {
            // document.querySelector(`.${this.name}Container`)
            this.container = domString
            
            // use the autoScroll function, make sure to require it
            autoScroll(this.container)
        }
    }
})

// make a function that can be used to create widgets from the template object and inherit the template objects functions
const makeWidget = function(){
    return Object.create(defaultWidget, {})
}

module.exports = {makeWidget, defaultWidget}
