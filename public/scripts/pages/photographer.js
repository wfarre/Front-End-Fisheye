/**
 * 
 * getPhotographers():
 * fetch the data from the API (here the JSON file)
 * and return an array with the photographer's data and his/her pictures' data
 */
async function getPhotographers() {
    // // Penser à remplacer par les données récupérées dans le json
    let data = await fetch('../data/photographers.json').then(response => {
        return response.json();
    }).then(data => {
        return data;
    }).catch(err => {
        console.log(err);
    });

    // get the id of the photographer to display the right information 
    const photographerId = parseInt(window.location.search.slice(4));

    const photographers = data.photographers;
    const allMediaData = data.media;

    // get only the data related to the right photographer
    const photographerData = photographers.filter((photographer) => {
        if (photographerId === photographer.id) {
            return photographer;
        }
    });

    const mediaData = allMediaData.filter(media => {
        if (photographerId === media.photographerId) {
            return media;
        }
    });

    // et bien retourner le tableau photographers seulement une fois
    return {
        photographerData,
        mediaData
    };
}

let pictureDataArray = [];
let photographerInfo;

/**
 * displayPhotographerData():
 * the function displays the photographer's data in the DOM
//  */
async function displayPhotographerData(photographer) {
    const photographerHeader = document.getElementById("photographer-header");

    const profileModel = new PhotographerFactory3(photographer, "photographer");
    const Template = new PhotographerCard(profileModel);
    const photoProfile = Template.loadDom();

    photographerHeader.appendChild(photoProfile);
}

/**
 * displayPhotographyData():
 * the function displays the photographer's photography in the DOM
//  */
async function displayPhotographyData(photographer, mediaData) {
    let index = 0;

    const profileModel = new PhotographerFactory3(photographer, "photographer");

    /* we display each picture in the DOM */
    mediaData.map(media => {
        displayPicture(media, profileModel._name, index);
        index++;
    });

    /* Displaty the right slide when we open the slider */
    let pictures = document.querySelectorAll(".card > .image-wrapper");

    /* Display the slider at the right picture */
    displaySlideOnClick(pictures);

    /* We update the number of likes for each pictures but also the total number in the footer*/
    checkMyLikes();
    getMyTotalLikes();
}

/**
 * init():
 * initialize the DOM by getting the data
 **/
async function init(organizingFunction) {
    // Récupère les datas des photographes
    const {
        photographerData,
        mediaData
    } = await getPhotographers();

    pictureDataArray = mediaData.map(pictureInfo => {
        return pictureInfo;
    });

    photographerInfo = photographerData[0];

    organizingFunction(pictureDataArray);

    // displayData(photographerInfo, pictureDataArray);
    displayPhotographerData(photographerInfo);
    displayPhotographyData(photographerInfo, pictureDataArray);
};

init(organizeByLikes);


function displayPicture(media, photographer, index) {

    const pictureContainer = document.querySelector(".container--picture");
    const carouselContent = document.querySelector(".carousel__content");

    /* use the photographer's name for the media's path */
    const PhotoModel = new PhotographerFactory3(({
        "media": media,
        "photographerName": photographer
    }), "media");

    const PhotoTemplate = new PhotographyCard(PhotoModel);
    const card = PhotoTemplate.createPhotographyCard();
    const slide = PhotoTemplate.createSlide();

    // give an index as an id to every card to be able to display the carousel at the right slide 
    card.setAttribute("id", index);

    pictureContainer.appendChild(card);
    carouselContent.appendChild(slide);
}