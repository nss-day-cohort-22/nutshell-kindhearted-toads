const widgetTemplate = require("../widgetTemplate")

const friendsWidgetInit = () => {
    //create new widget object
    const friendsWidget = widgetTemplate()

    // build up a dom string for the additional unique elements for this widget, such as input fields and buttons that will be placed under the nested widgetContainer

    let additionalElementDomString = `
        <input type="text" class="friendsWidget__text" placeholder="Search for a user">
        <button class="friendsWidget__btn widgetBtn">Save</button>
        `

    // initialize new widget and pass in the name of the widget and the addition elements dom string
    friendsWidget.init("friends", additionalElementDomString)

    // invoke the fill function

    // invoke the createFriendsListener

}
module.exports = friendsWidgetInit