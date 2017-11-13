// newsTableFactory - Chris Miller
// returns new object for newsTable

const getDatabase = require("../database")
const setDatabase = require("../datasetter")
const getActiveUser = require("../auth/getActiveUser")

const newsFactory = newsObject => {
    
    let db = getDatabase()
    
    let idValue = 0
    
    if (db.news.length > 0) {
        idValue = db.news[db.news.length - 1].id
    }

    return Object.create(null, {
        "id" : {value: ++idValue, enumerable: true, writable: true},
        "timeStamp" : {value: Date.now(), enumerable: true, writable: true},
        "userId" : {value: getActiveUser().userId, enumerable: true, writable: true},
        "title" : {value: newsObject.title, enumerable: true, writable: true},
        "synopsis" : {value: newsObject.synopsis, enumerable: true, writable: true},
        "url" : {value: newsObject.url, enumerable: true, writable: true},
        "save": {value: function () {
            db.news.push({
                "id": this.id,
                "timeStamp": this.timeStamp,
                "userId": this.userId,
                "title": this.title,
                "synopsis": this.synopsis,
                "url": this.url
            })
            setDatabase(db.news, "news")
            return this
        }}
    })

}

module.exports = newsFactory