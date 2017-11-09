const makeWidget = require("./widgetTemplate")

const testWidget = makeWidget()

console.log("testWidget: ", testWidget)


testWidget.init("news")

console.log("testWidgetInit: ", testWidget)

module.exports = null