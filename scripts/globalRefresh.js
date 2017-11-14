const global =  {
    "widgets" : [],

    "set" : 
            function(widgetArray){
                this.widgets = widgetArray
            },

    "refresh":  
            function() {
                console.log(this.widgets)
                this.widgets.forEach(x => x.populate())
            }
}


module.exports = global