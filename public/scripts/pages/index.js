
    async function getPhotographers() {
        // // Penser à remplacer par les données récupérées dans le json
        let data = await fetch('../public/data/photographers.json').then(response => {
            return response.json();
        }).then(data => {
            return data;
        }).catch(err => {
            console.log(err);
        });

        const photographersData = data.photographers;        
        // et bien retourner le tableau photographers seulement une fois
        return {photographersData};
    }


    async function displayData(data) {
        const photographersSection = document.querySelector(".photographer_section");

        const Photographers = data.map(photographer => new PhotographerFactory3(photographer, "photographer"));
        console.log(Photographers);
        Photographers.map(photographer => {
            const Template = new PhotographerCard(photographer);
            const photographerCard = Template.createPhotographerCard();
            photographersSection.appendChild(photographerCard);
        })

        // photographers.forEach(photographer => {
        //     // const photographerModel = photographerFactory(photographer);
        //     // const userCardDOM = photographerModel.getUserCardDOM();
        //     photographersSection.appendChild(userCardDOM);

        // });
    };

    async function init() {
        // Récupère les datas des photographes
        const {photographersData}  = await getPhotographers();
        displayData(photographersData);

        const profiles = document.querySelectorAll(".card");


    profiles.forEach(profile => {
        profile.addEventListener("click", (e) => {
            e.target.value
            const photographerName = e.target.parentElement.querySelector(".card__header").innerHTML;
            const route = photographerName.replace(/\s+/g, '-').toLowerCase()
            console.log(photographerName.replace(/\s+/g, '-').toLowerCase());
            window.location.replace("./photographer.html/"+route)
        })
    })    
    };
    
    init();


    