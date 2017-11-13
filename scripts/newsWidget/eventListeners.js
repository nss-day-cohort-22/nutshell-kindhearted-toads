// Author: Sean Williams
//Purpose: Add event listeners for the news widget



const newsFactory = require("../factories/newsTableFactory")


const addEvents = function (newsWidget) {
    //Add Button
    document.querySelector(".newsWidget__btn-add").addEventListener("click", (e) => {
        if (true) {
            const newsContainer = document.querySelector(".newsContainer")
            const news = document.createElement("div")
            news.className = "news"

            news.innerHTML += "<input type='text' class='news__title--input' autofocus>"
            news.innerHTML += "<input type='text' class='news__synopsis--input'>"
            news.innerHTML += "<input type='url' class='news__url--input'>"
            news.innerHTML += "<button class='news__btn-save'>Save Article</button>"
            newsContainer.insertAdjacentElement("afterbegin", news);
            // set the focus on the input box
            news.childNodes[0].focus()
        }
    })


    newsWidget.container.addEventListener("click", function (e) {
        if (e.target.className === "news__btn-save") {

            const newNews = {
                "title": document.querySelector(".news__title--input").value,
                "synopsis": document.querySelector(".news__synopsis--input").value,
                "url": document.querySelector(".news__url--input").value
            }
            debugger
            newsFactory(newNews).save()
            newsWidget.populate()
            //editing = false;
        } else if (e.target.className === "news__btn-delete") {
            newsWidget.delete("news", e.target.parentNode.id.split("_")[1])
            newsWidget.populate()
        }
    })
}


module.exports = addEvents;