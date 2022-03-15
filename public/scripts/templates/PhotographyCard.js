class PhotographyCard {
    constructor(photography) {
        this._photography = photography
    }

    createPhotographyCard() {
        const media = this._photography.media;

        // create my DOM element 
        const card = document.createElement("div");
        const imageWrapper = document.createElement("div");
        const cardHeader = document.createElement("div");
        const cardTitle = document.createElement("h2");
        const like = document.createElement("p");
        let mediaDisplay;

        if (media === this._photography.image){
            const img = document.createElement("img");
            img.setAttribute("src", media);
            mediaDisplay = img;
        }

        if (media === this._photography.video) {
            const videoEl = document.createElement("video");
            const videoSource = document.createElement("source");
            videoEl.appendChild(videoSource);
            videoSource.setAttribute("src", media);
            mediaDisplay = videoEl;
        }

        // add class to my DOM elements
        card.classList.add("card");
        imageWrapper.classList.add("image-wrapper");
        cardHeader.classList.add("card__header");
        cardTitle.classList.add("card__header__title");
        like.classList.add("likes");

        card.appendChild(imageWrapper);
        card.appendChild(cardHeader);

        imageWrapper.appendChild(mediaDisplay);
        cardHeader.appendChild(cardTitle);
        cardHeader.appendChild(like);


        cardTitle.textContent = this._photography.title;
        like.innerHTML = '<span class="like-counter">' + this._photography.likes + '</span><i class="fas fa-heart like-logo"></i>';

        return (card);
    }


    createSlide(){
        const media = this._photography.media;
        console.log("the media");
        console.log(media === this._photography.video);
        
        const slide = document.createElement("div");
        const imageWrapper = document.createElement("div");
        const cardHeader = document.createElement("div");
        const cardTitle = document.createElement("h2");
        let mediaDisplay;
        if (media === this._photography.image) {
            const img = document.createElement("img");
            img.setAttribute("src", media);
            mediaDisplay = img;
        } 
        if (media === this._photography.video) {
            const videoWrapper = document.createElement("video");
            const videoSource = document.createElement("source");
            videoWrapper.appendChild(videoSource);
            videoSource.setAttribute("src", media);
            mediaDisplay = videoWrapper;
        }
        // add class to my DOM elements
        slide.classList.add("slide");
        imageWrapper.classList.add("image-wrapper");
        cardHeader.classList.add("card__header");
        cardTitle.classList.add("card__header__title");

        slide.appendChild(imageWrapper);
        slide.appendChild(cardHeader);

        imageWrapper.appendChild(mediaDisplay);
        cardHeader.appendChild(cardTitle);

        cardTitle.textContent = this._photography.title;

        return (slide);
    }
}