document.querySelector(".tasksWidget").addEventListener("keyup",(e)=>{
    if (e.target.className === "task__name"){
        if (e.keyCode == 13) {
            // get properties
            const txt = e.target.value;
            // remove element
            const taskContainer = document.querySelector(".article");
            taskContainer.removeChild(e.target);
            taskContainer.appendChild(
                span({className: "task__name"},txt)             
            );
            // create new element 
        }
    }
});

module.exports = null;