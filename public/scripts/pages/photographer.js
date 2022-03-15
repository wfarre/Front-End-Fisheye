//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographers() {
    // // Penser à remplacer par les données récupérées dans le json
    let data = await fetch('../public/data/photographers.json').then(response => {
        return response.json();
    }).then(data => {
        return data;
    }).catch(err => {
        console.log(err);
    });
    const photographers = data.photographers;
    const media = data.media;

    // et bien retourner le tableau photographers seulement une fois
    return {
        photographers,
        media
    };
}



let photoName = "Mimi Keel";
let totalLikes = 0;
let selectedByDate = [];
let selectedByLikes = [];
let selectedByName = [];


let pictures = document.querySelectorAll(".card");








async function displayData(photographers, name, mediasData) {
    // const photographersSection = document.querySelector(".photographer_section");
    // console.log(mediasData);

    photographers.map(photographer => {
        const pictureContainer = document.querySelector(".container--picture");
        const carouselContent = document.querySelector(".carousel__content");

        if (photographer.name === name) {
            const profileModel = new PhotographerFactory3(photographer, "photographer");
            console.log(profileModel._name);
            const Template = new PhotographerCard(profileModel);
            Template.loadDom();

            // console.log(mediasData);
            const photographerOwnMedias = mediasData.filter((media) => {
                if (media.photographerId === profileModel._id) {
                    return media;
                }
            })

            console.log(photographerOwnMedias);

            let index = 0;

            const medias = photographerOwnMedias.map(media => {
                const PhotoModel = new PhotographerFactory3(({
                    "media": media,
                    "photographerName": profileModel._name
                }), "media");
                const PhotoTemplate = new PhotographyCard(PhotoModel);
                const card = PhotoTemplate.createPhotographyCard();
                const slide = PhotoTemplate.createSlide();
                pictureContainer.appendChild(card);
                card.setAttribute("id", index);
                carouselContent.appendChild(slide);
                index++;

            });

            console.log(medias[0]);





            // const allDataArray = mediaArray.map(media => {
            //     const photographerName = {photographerName : profileModel._name}
            //     return media.push(photographerName);
            // })



            // console.log(allDataArray);

            // console.log(medias);

            // const allInfos = profileModel._name.concat(medias);
            // console.log(allInfos);


            // medias.forEach(info => {
            //     console.log(info);

            //     const Template = new PhotographyCard(info);
            //     // console.log(Template);
            // })
            // profileModel.loadDom();

            // let index = 0;

            // mediasData.map((pic) => {
            //     if (pic.photographerId === photographer.id) {
            //         // const photographerName = profileModel._name;
            //         // const photographerNameObject = {photographerName: photographerName}
            //         // console.log("Photogapher");
            //         // console.log(photographerNameObject);
            //         // const allData = pic.concat(photographerNameObject);
            //         // console.log(allData); 

            //         const media = new PhotographerFactory3(pic, "media");
            //         console.log(media);
            //         const Template = new PhotographyCard(media);

            //         const card = Template.createPhotographyCard();
            //         const slide = Template.createSlide();
            //         // const load = displayPicture(pic, photographer.name);
            //         // const card = load.loadPic();
            //         // const slide = load.loadSlide();
            //         pictureContainer.appendChild(card);
            //         card.setAttribute("id", index);
            //         carouselContent.appendChild(slide);
            //         index++;
            //     }
            // });
        }
    });
};


async function init(callback) {
    // Récupère les datas des photographes
    const {
        photographers
    } = await getPhotographers();
    const {
        media
    } = await getPhotographers();

    /* if user changes the filter, it will remove the cards from the previous selection */
    const cards = document.querySelectorAll(".card");
    slides = document.querySelectorAll(".slide");
    cards.forEach(card => {
        card.remove();
    });
    slides.forEach(slide => {
        slide.remove();
    });

    let mediaArray = media;

    callback(media);

    displayData(photographers, photoName, mediaArray);

    pictures = document.querySelectorAll(".card > .image-wrapper");
    slides = document.querySelectorAll(".slides");

    const likeCounters = document.querySelectorAll(".like-counter");
    likeCounters.forEach(likeCounter => {
        likeCounter = parseInt(likeCounter.innerHTML);
        totalLikes += likeCounter;
    });
    console.log(totalLikes);

    const totalLikeDOM = document.querySelector(".like-quantity");
    totalLikeDOM.innerHTML = totalLikes;

    const likes = document.querySelectorAll(".likes");
    likes.forEach(like => {
        console.log(like);
        like.addEventListener("click", () => {
            console.log("hello");
            let picLikeCounter = parseInt(like.querySelector(".like-counter").innerHTML) + 1
            totalLikes += 1;
            like.querySelector(".like-counter").innerHTML = picLikeCounter;
            totalLikeDOM.innerHTML = totalLikes;

        });
    })




    pictures.forEach(picture => {
        picture.addEventListener("click", (e) => {
            console.log(e);
            console.log(e.target.textContent);
            const index = parseInt(picture.parentElement.id);
            console.log(index);
            carousel.style.display = "block";
            displaySlide(index);
        });
    });


};





init(organizeByLikes);

/* changefilter() will update the order of the pictures depending on the chosen filter */

const changeFilter = () => {
    const checkedFilter = document.querySelector(".checked").id;

    switch (checkedFilter) {
        case "popularity":
            init(organizeByLikes);
            break;
        case "date":
            init(organizeByDate);
            break;
        case "title":
            init(organizeByTitles);
            break;

        default:
            checkedFilter
            break;
    }

}