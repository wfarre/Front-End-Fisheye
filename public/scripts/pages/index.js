
async function getPhotographers() {
    // // Penser à remplacer par les données récupérées dans le json
    let data = await fetch('../public/data/photographers.json' || '../data/photographers.js').then(response => {
        return response.json();
    }).then(data => {
        return data;
    }).catch(err => {
        console.log(err);
    });

    const photographersData = data.photographers;
    // et bien retourner le tableau photographers seulement une fois
    return {
        photographersData
    };
}



/**
 * displayData():
 * @param {*} data
 * display the data of the photographers 
 */
async function displayData(data) {
    const photographersSection = document.querySelector(".photographer_section");

    const Photographers = data.map(photographer => new PhotographerFactory3(photographer, "photographer"));
    Photographers.map(photographer => {
        const Template = new PhotographerCard(photographer);
        const photographerCard = Template.createPhotographerCard();
        photographersSection.appendChild(photographerCard);
    })
};

/** init():
 * triggers the function displayData() to display the photographers' data
 */
async function init() {
    // Récupère les datas des photographes
    const {
        photographersData
    } = await getPhotographers();
    displayData(photographersData);
};


init();


