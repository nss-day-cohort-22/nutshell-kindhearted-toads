const {makeWidget, defaultWidget} = require("../widgetTemplate")
const getFriends = require("./getFriends");
const displayFriends = require("./displayFriends");
const addFriendsListeners = require("./addFriendsListeners");
const refreshWidget = require("../refreshWidget");


const friendsWidget = makeWidget()

friendsWidget.init = function() {
    //create new widget object

    // build up a dom string for the additional unique elements for this widget, such as input fields and buttons that will be placed under the nested widgetContainer

    let additionalElementDomString = `
        <input type="text" class="friendsWidget__text" placeholder="Search for a user">
        <button class="friendsWidget__btn widgetBtn">Save</button>
        `

    // initialize new widget and pass in the name of the widget and the addition elements dom string
    defaultWidget.init("friends", additionalElementDomString)

    friendsWidget.getLatest = getFriends;
    friendsWidget.latest = friendsWidget.getLatest();
    friendsWidget.populate = function(){
        displayFriends(this.getLatest())
    }
    friendsWidget.refresh = refreshWidget;
    friendsWidget.addEvents = addFriendsListeners;
    
    friendsWidget.addEvents(friendsWidget);
    friendsWidget.populate();
}

module.exports = friendsWidget