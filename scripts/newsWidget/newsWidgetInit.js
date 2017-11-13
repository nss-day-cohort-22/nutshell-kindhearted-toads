// Author: Sean Williams
//Purpose: Create the news widget and set up its inital state





const Widget = require("../widgetTemplate")
const getUser = require("../auth/getActiveUser")
const fillFunc = require("./fill")
const getNews = require("./getNews")
const addEvents = require("./eventListeners");



const newsWidget = Widget()


function newsWidgetInit() {
    //create new widget object

    // build up a dom string for the additional unique elements for this widget, such as input fields and buttons that will be placed under the nested widgetContainer

    let additionalElementDomString = "<button class='newsWidget__btn-add'>New Article</button>";

    // initialize new widget and pass in the name of the widget and the addition elements dom string
    newsWidget.init("news", additionalElementDomString)

    // invoke the fill function

    // invoke the createFriendsListener
    newsWidget.user = getUser();
    newsWidget.getNews = getNews;
    newsWidget.fill = fillFunc
    newsWidget.populate = function () {
        this.fill(this.getNews())
    }

    addEvents(newsWidget)
}

newsWidgetInit()

module.exports = newsWidget