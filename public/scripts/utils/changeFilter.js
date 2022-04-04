/**
 * organizeByLikes() 
 * organize the picture according to the number of likes 
 * */
const organizeByLikes = (media) => {
    const mediaArray = media.sort((a, b) => b.likes - a.likes);
}

/**
 * organizeByTitles() 
 * organize the picture according to their title 
 * */
const organizeByTitles = (media) => {

    const mediaArray = media.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
        }
        return 0;
    });
}

/** 
 * organizeByLikes() 
 * organize the picture according to their date 
 **/
const organizeByDate = (media) => {
    const mediaArray = media.sort((a, b) => new Date(b.date) - new Date(a.date));
}


/**
 *  changefilter() 
 * will update the order of the pictures depending on the chosen filter 
 * */
const filterSelector = document.getElementById("filter");
filterSelector.addEventListener("click", () => {
    changeFilter();
})

/**
 * changeFilter():
 * First, it removes all the cards and slides from the DOM.
 * Then, it orders the array with all the picture data according to the filter.
 * To finish, it displays the data.
 * */
const changeFilter = () => {
    /* if user changes the filter, it will remove the cards from the previous selection */
    removeAllCardsAllSlides();

    const checkedFilter = document.querySelector(".checked").id;
    
    switch (checkedFilter) {
        case "popularity":
            organizeByLikes(pictureDataArray);
            displayData(photographerInfo, pictureDataArray);
            break;
        case "date":
            organizeByDate(pictureDataArray);
            displayData(photographerInfo, pictureDataArray);
            break;
        case "title":
            organizeByTitles(pictureDataArray);
            displayData(photographerInfo, pictureDataArray);
            break;
        default:
            checkedFilter
            break;
    }

}

/**
 * 
 * removeAllCardsAllSlides():
 * remove all the cards and slides from the DOM  
 * */
function removeAllCardsAllSlides() {
    const cards = document.querySelectorAll(".card");
    let slides = document.querySelectorAll(".slide");
    const photographerHeader = document.querySelector(".photographer-profile");

    photographerHeader.remove();
    
    cards.forEach(card => {
        card.remove();
    });
    slides.forEach(slide => {
        slide.remove();
    });
}