// Author: Greg Lawrence
// A template to use to create widgets that inherit properties from the template. 

const defaultWidget = function(){ 

    return Object.create(null, {
        "init": {
            "value": function(name, additionalContentString){
                this.name = name
                let widgetEl = document.querySelector(`.widget${name}`)
                
                // build up a DOM string for chat container
                let widgetContainerDomString = `
                        <header class='${name}Widget__header'>${name}</header>
                        <div class='${name}Container'>
                        </div>   
                        `
                // add the users additional dom string from parameter to this variable    
                widgetContainerDomString += additionalContentString
                // push DOM string to DOM element
                widgetEl.innerHTML = widgetContainerDomString

            }
        },
        "edit": {
            "value": function(){
                
            }
        },
        "delete": {
            "value": function() {}
        },
        "fill": {
            "value": function(domString) {
                // document.querySelector(`.${this.name}Container`)
                this.container = domString
            
                // fun autoScroll function, make sure to require it
                autoScroll(this.container)
            }
        },
        "container": {
            "value": document.querySelector(`.${this.name}Container`)
        },
        "name": ""
    })
}

    



const makeWidget = function(){
    return Object.create(defaultWidget, {})
}

