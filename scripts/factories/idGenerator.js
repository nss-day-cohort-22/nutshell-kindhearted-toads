// idGenerator - Chris Miller
// Creates a generator function to generate unique ids for database tables

const idGenerator = function* (startsFrom = 0) {
    let id = 0 + startsFrom

    while (true) {
        yield id
        id++
    }
}

module.exports = idGenerator
