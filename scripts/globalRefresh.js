const global =  {
    "widgets" : [],

    "set" : 
            function(widgetArray){
                this.widgets = widgetArray
            },

    "refresh":  
            function() {
                this.widgets.forEach(x => x.populate())
            }
}


module.exports = global