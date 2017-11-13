// Author: Sean Williams
//Purpose: Fill function that overwrites the default widget.fill()



const getUser = require("../auth/getActiveUser");
const newsWidget = require("./newsWidgetInit")


function fill(news) {
    const user = getUser()
    let domString = ""
    news.forEach(function (article) {
        if (article.userId === user.userId) {
            domString += `
            <div id=newsArticle_${article.id}>
                <p>${article.title}</p>
                <p>${article.synopsis}</p>
                <p>${article.url}</p>
                <button class='news__btn-delete'>Delete</button>
            </div>
            `
        } else {
            domString += `
            <div class="ownedByFriend">
                <p>${article.title}</p>
                <p>${article.synopsis}</p>
                <p>${article.url}</p>
            </div>`
        }

    })
    this.container.innerHTML = domString
}

module.exports = fill