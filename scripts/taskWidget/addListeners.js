const {a, button, div, h1, header, p, span, article, input} = require("../domHelpers");

// element
const task = document.querySelector(".taskWidget");

document.addEventListener("keyup", (e)=> {
    if (e.target.className === "taskWidget__input"){
        if (e.keyCode === 13) {
            console.log("yo!");
            // get properties
            const txt = e.target.value;
            e.target.value = "";
            // remove element
            const taskContainer = document.querySelector(".taskContainer");
            //taskContainer.removeChild(e.target);

            taskContainer.appendChild(
                div({className: "task__desc", "id": "5"},txt)
            );
            // create new element
        }
    }
});

document.addEventListener("click", function(e){
    if (e.target.className === "task__desc") {
        let child = e.target;
        let i = 0;
        debugger;
        while((child === child.previousSibling) !== null) {
            i++
        }
        
        console.log(i);
    }
});

module.exports = null;