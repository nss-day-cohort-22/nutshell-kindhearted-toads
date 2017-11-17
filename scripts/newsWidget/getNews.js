// Author: Sean Williams
//Purpose: Get all news objects from the database


const getActiveUser = require("../auth/getActiveUser");


const getNews = function (friends,database) {
    const user = getActiveUser()

    let db = database
    let news = db.news
    let filteredNews = news
        .filter(t => t.userId === user.userId || friends.includes(t.userId))
        .sort((f, s) => s.timeStamp - f.timeStamp);

    return filteredNews

}

module.exports = getNews;