// newsTableFactory - Chris Miller
// returns new object for newsTable

const idGenerator = require("./idGenerator")

newsIdGenerator = idGenerator()

const newsTableFactory = newsInfoObject => {
    Object.create(null, {
        "id" : {value: newsIdGenerator.next.value(), enumerable: true, writable: true},
        "timeStamp" : {value: Date.now(), enumerable: true, writable: true},
        "userID" : {value: newsInfoObject.userID, enumerable: true, writable: true},
        "title" : {value: newsInfoObject.title, enumerable: true, writable: true},
        "synopsis" : {value: newsInfoObject.synopsis, enumerable: true, writable: true},
        "url" : {value: newsInfoObject.url, enumerable: true, writable: true}
    })
}

module.exports = newsTableFactory