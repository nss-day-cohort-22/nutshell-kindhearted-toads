// Author: Greg Lawrence
// A template to use to create widgets that inherit properties from the template. 

// add a require for autoScroll and all other functions/modules that are used
const autoScroll = require("./autoScroll")
const getDatabase = require("./database")
const dataSetter = require("./dataSetter")
const defaultWidget = Object.create(null, {
    "init": {
        "value": function(name, additionalContentString = ""){
            this.name = name
            let widgetEl = document.querySelector(`.${name}Widget`)
            let x = 1    
            // build up a DOM string for chat container
            let widgetContainerDomString = `
            <header class='${name}Widget__header widgetHeader'>${name}</header>
            <div class='${name}Container widgetContainer'>
            -- PLACEHOLDER DATA --
            </div>   
            `
            
            // add the users additional dom string from parameter to this variable    
            widgetContainerDomString += additionalContentString
            // push DOM string to DOM element
            widgetEl.innerHTML = widgetContainerDomString
            this.container = document.querySelector(`.${name}Container`)
        }
    },
    "saveEdit": {
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
        "value": function(stringLabelOfArray, itemId) {

            // check if the stringLabel passed in is a valid database object
            if (DB.hasOwnProperty(stringLabelOfArray)) {
                let indexToDelete = DB[stringLabelOfArray].findIndex(e => {
                    e.id === itemId
                })
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
            
            // fun autoScroll function, make sure to require it
            autoScroll(this.container)
        }
    },
    // "container": {
    //     "writable": true,
    //     "value": document.querySelector(`.${this.name}Container`)
    // },
    // "name": {
    //     "writable": true,
    //     "value": ""
    // }
})


const makeWidget = function(){
    return Object.create(defaultWidget, {})
}

module.exports = makeWidget
