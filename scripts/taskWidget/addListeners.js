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

            taskContainer.appendChild(div({"className": "task"},
                input({"type": "checkbox", "className": "task__checkbox"}),
                span({"className": "task__desc"}, `${txt}`)));
            // create new element
        }
    }

    if (e.target.className === "task__input") {
        let txt = e.target.value;
        let parent = e.target.parentNode;
        let replaceSpan = span({"className": "task__desc"},txt);
        parent.replaceChild(replaceSpan,e.target);
    }
});

document.addEventListener("click", function(e){
    
    if (e.target.className === "task__desc") {
        let txt = e.target.innerHTML;
        console.log(e.target);
        let parent = e.target.parentNode;
        console.log(txt);
        const inputDiv = document.createElement("div");
        inputDiv.className = "task";
        const checkBox = input({"type":"checkbox", "className": "task__checkbox"});
        const inputBox = document.createElement("input");
        inputBox.value = txt;
        inputBox.className = "task__input";
        inputDiv.appendChild(checkBox);
        inputDiv.appendChild(inputBox);

        parent.replaceChild(inputBox,e.target);

    }
});

module.exports = null;