//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographers() {
    // // Penser à remplacer par les données récupérées dans le json
    let data = await fetch('../data/photographers.json').then(response => {
        return response.json();
    }).then(data => {
        return data;
    }).catch(err => {
        console.log(err);
    });
    const photographers = data.photographers;
    const media = data.media;
    
    // console.log("hi");
    // console.log(photographers);
    // et bien retourner le tableau photographers seulement une fois
    return {photographers, media};
}

let photoName = "Mimi Keel";

async function displayData(photographers, name, media) {
    // const photographersSection = document.querySelector(".photographer_section");

    photographers.map(photographer => {
        const pictureContainer = document.querySelector(".container--picture")

        if(photographer.name === name){
            console.log("prout");
            console.log(photographer);
            const profileModel = photographerFactory2(photographer)
            profileModel.loadDom();

            // return photographer.id, photographer.name;
            media.map(pic => {
                if(pic.photographerId === photographer.id){
                    const load = displayPicture(pic, photographer.name);
                    const card = load.loadPic();
                    pictureContainer.appendChild(card);
                }
            })
            
        }
    });

    // photographers.forEach((photographer) => {
    //     const photographerModel = photographerFactory(photographer);
    //     const userCardDOM = photographerModel.getUserCardDOM();
    //     photographersSection.appendChild(userCardDOM);
    // });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    const { media } = await getPhotographers();
    displayData(photographers, photoName, media);
    // console.log(photographer.id);
};

init();

