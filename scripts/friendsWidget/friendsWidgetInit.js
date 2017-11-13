const widgetTemplate = require("../widgetTemplate")
const getFriends = require("./getFriends");
const displayFriends = require("./displayFriends");
const addFriendsListeners = require("./addFriendsListeners");

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
    const friends = getFriends();
    displayFriends(friends);
    

    friendsWidget.refresh = refreshFriends;
    
    addFriendsListeners(friendsWidget);

    //friendsWidget enhancements
    // taskWidget enhancements
    // taskWidget.widgetContainer = "tasksWidget";
    // taskWidget.user = getUser();
    // taskWidget.getLatest = getTasks;
    // taskWidget.latest = taskWidget.getLatest();
    // taskWidget.populate = generateTasks;
    // taskWidget.refresh = refreshWidget;
    // taskWidget.containerName = "tasksContainer";
    // taskWidget.addEvents = addEvents;
    // taskWidget.addEvents(taskWidget);

}
module.exports = friendsWidgetInit