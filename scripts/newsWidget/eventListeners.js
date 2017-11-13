// Author: Sean Williams
//Purpose: Add event listeners for the news widget



const addEvents = function (newsWidget) {
    //Add Button
    const newsAddButton = document.querySelector(".newsWidget__btn-add");
    newsAddButton.addEventListener("click", (e) => {
        if (domIsClean()) {
            const newsContainer = document.querySelector(".newsContainer");
            const news = document.createElement("div");
            news.className = "news";

            news.innerHTML += "<input type='text' class='news__title--input' autofocus>";
            news.innerHTML += "<input type='text' class='news__synopsis--input'"
            news.innerHTML += "<input type='url' class='news__url--input'"
            news.innerHTML += "<button class='news__btn-save'>Save Article</button>"
            newsContainer.appendChild(news);
            autoScroll(newsWidget.containerName);
            // set the focus on the input box
            news.childNodes[0].focus();
        }
    })
}


module.exports = addEvents;