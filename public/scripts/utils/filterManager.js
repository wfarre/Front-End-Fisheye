import { pictureDataArray} from "../pages/photographer.js";
import { displayPhotographyData } from "../pages/photographer.js";

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
            displayPhotographyData(pictureDataArray);
            break;
        case "date":
            organizeByDate(pictureDataArray);
            displayPhotographyData(pictureDataArray);
            break;
        case "title":
            organizeByTitles(pictureDataArray);
            displayPhotographyData(pictureDataArray);
            break;
        default:
            checkedFilter
            break;
    }
}


const options = document.querySelectorAll(".option");
const dropdownBtn = document.querySelector(".dropdown-menu__button");
const dropdown = document.querySelector(".selector");

/* add event listener to the button for the filter. When clicked, it displays the the dropdown menu */
dropdownBtn.addEventListener("click", () => {
    dropdownBtn.setAttribute("aria-haspopup", false);
    dropdownBtn.setAttribute("aria-expanded", true);
    dropdown.style.display = "flex";
    dropdownBtn.style.display = "none";
})



/* when one of the filter is selected, the menu is closed and only the selected option is displayed in the button */
options.forEach(option => {
    option.addEventListener("click", () => {
        dropdownBtn.innerHTML = option.innerHTML;
        dropdownBtn.setAttribute("aria-haspopup", true);
        dropdownBtn.setAttribute("aria-expanded", false);
        dropdown.style.display = "none";
        dropdownBtn.style.display = "flex";

        options.forEach(option => {
            option.classList.remove("checked");
        })
        option.classList.add("checked");
    })
})


//////////////////////////////////////////////////////////////////////////

/**
 * 
 * removeAllCardsAllSlides():
 * remove all the cards and slides from the DOM  
 * */
function removeAllCardsAllSlides() {
    const cards = document.querySelectorAll(".card");
    let slides = document.querySelectorAll(".slide");

    cards.forEach(card => {
        card.remove();
    });
    slides.forEach(slide => {
        slide.remove();
    });
}

/**
 * organizeByLikes() 
 * organize the picture according to the number of likes 
 * */
const organizeByLikes = (media) => {
     media.sort((a, b) => b.likes - a.likes);
}

/**
 * organizeByTitles() 
 * organize the picture according to their title 
 * */
const organizeByTitles = (media) => {
    media.sort((a, b) => {
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
     media.sort((a, b) => new Date(b.date) - new Date(a.date));
}


/**
 *  changefilter() 
 * will update the order of the pictures depending on the chosen filter 
 * */
const filterSelector = document.getElementById("filter");
filterSelector.addEventListener("click", () => {
    changeFilter();
})


export {organizeByLikes}