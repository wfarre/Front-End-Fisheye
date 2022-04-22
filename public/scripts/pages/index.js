import PhotographerFactory from '../scripts/factories/Photographer.js';
import PhotographerCard from '../scripts/templates/PhotographerCard.js';

/**
 * get the data of the photographers from json file
 * @returns the (usable) data of the photographers
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

    const photographers = data.photographers.map(photographer => new PhotographerFactory(photographer, "json"));
    // const photographersData = data.photographers;
    // et bien retourner le tableau photographers seulement une fois
    return {
        photographers
    };
}



/**
 * displayData():
 * display the data of the photographers 
 */
async function displayPhotographerData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.map(photographer => {
        const Template = new PhotographerCard(photographer);
        const photographerCard = Template.createPhotographerCard();
        photographersSection.appendChild(photographerCard);
    })
}

/** 
 * init():
 * triggers the function displayData() to display the photographers' data
 */
async function init() {
    // Récupère les datas des photographes
    const {
        photographers
    } = await getPhotographers();

    displayPhotographerData(photographers);
}

init()