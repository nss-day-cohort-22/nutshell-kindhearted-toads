// Author: Sean Williams
//Purpose: Get all news objects from the database


const database = require("../database");
const getActiveUser = require("../auth/getActiveUser");
const getFriends = require("../auth/getActiveUser");

const getNews = function () {
    const user = getActiveUser()
    const friends = getFriends()

    let db = database()
    let news = db.news
    let filteredNews = news
        .filter(t => t.userId === user.userId || friends.includes(t.userID))
        .sort((f, s) => s.timeStamp - f.timeStamp);

    return filteredNews

}

module.exports = getNews;