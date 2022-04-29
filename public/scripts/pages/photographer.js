import {organizeByLikes as organizeByLikes} from '../utils/filterManager.js';
import PhotographerFactory from '../factories/Photographer.js';
import PhotographerCard from '../templates/PhotographerCard.js';
import PhotographyCard from '../templates/PhotographyCard.js';
import displaySlideOnClick from '../utils/slider.js';
import {checkMyLikes, getMyTotalLikes} from '../utils/likeManager.js';
import MediaFactory from '../factories/Media.js';



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

    const photographerData = data.photographers.find((photographer)=>{
        if(photographerId === photographer.id){
            return photographer
        }
    })

    const photographer = new PhotographerFactory(photographerData, "json");

    const medias = data.media.filter(media => {
        if (photographerId === media.photographerId) {
            return media;
        }
    });

    const mediaData= medias.map(media => new MediaFactory({ "media": media, "photographerName": photographer._name }, "json"))

    // et bien retourner le tableau photographers seulement une fois
    return {
        photographer,
        mediaData
    };
}

export let pictureDataArray = [];
export let photographerInfo;

/**
 * displayPhotographerData():
 * the function displays the photographer's data in the DOM
//  */
async function displayPhotographerData(photographer) {

    const photographerHeader = document.getElementById("photographer-header");
    const Template = new PhotographerCard(photographer);
    const photographerProfile = Template.loadDom();

    photographerHeader.appendChild(photographerProfile);
}

/**
 * displayPhotographyData():
 * the function displays the photographer's photography in the DOM
//  */
export async function displayPhotographyData(mediaData) {
    let index = 0;

    /* we display each picture in the DOM */
    mediaData.map(media => {
        displayPicture(media, index);
        index++;
    });

    /* Displaty the right slide when we open the slider */
    let pictures = document.querySelectorAll(".card > .image-wrapper");

    /* Display the slider at the right picture */
    displaySlideOnClick(pictures);

    /* We update the number of likes for each pictures but also the total number in the footer*/
    checkMyLikes(pictureDataArray);
    getMyTotalLikes(pictureDataArray);
}

/**
 * init():
 * initialize the DOM by getting the data
 **/
async function init() {
    // Récupère les datas des photographes
    const {
        photographer,
        mediaData
    } = await getPhotographers();

    pictureDataArray = mediaData.map(pictureInfo => {
        return pictureInfo;
    });

    organizeByLikes(pictureDataArray);
    displayPhotographerData(photographer);
    displayPhotographyData(pictureDataArray);
}

init()

/**
 * 
 * the function displays a photography and a slide in the DOM,
 * and add them an index to access right slide when the user clicks on the picture.
 * 
 */
function displayPicture(media, index) {

    const pictureContainer = document.querySelector(".container--picture");
    const carouselContent = document.querySelector(".carousel__content");

    const PhotoTemplate = new PhotographyCard(media);
    const card = PhotoTemplate.createPhotographyCard();
    const slide = PhotoTemplate.createSlide();

    // give an index as an id to every card to be able to display the carousel at the right slide 
    card.setAttribute("id", index);

    pictureContainer.appendChild(card);
    carouselContent.appendChild(slide);
}


window.onscroll = makeAppearBtn;

const backToTopBtn = document.querySelector(".aside");

function makeAppearBtn(){
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none"
    }
}