//Global Refresh - Chris Miller
//Function to refresh all of the widgets - it is called on a "friend" event or
//when the db event handler is fired

const global =  {
    "widgets" : [],
    
    //use this function on dashboard init to pass in the objects without requiring them in the module
    "set" : 
    function(widgetArray){
        this.widgets = widgetArray
    },
    
    //call the populate function on each of the widget objects
    "refresh":  
            function() {
                this.widgets.forEach(x => x.populate())
            }
}


module.exports = global