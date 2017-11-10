const makeWidget = require("./widgetTemplate")

const testWidget = makeWidget()

console.log("testWidget: ", testWidget)


testWidget.init("news")


module.exports = null