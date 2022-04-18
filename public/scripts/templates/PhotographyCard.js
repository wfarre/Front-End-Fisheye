export default class PhotographyCard {
    constructor(photography) {
        this._photography = photography
    }

    createPhotographyCard() {
        const media = this._photography.media;

        const photographyCard = document.createElement("article");
        photographyCard.classList.add("card");

        let mediaToDisplay;

        if (media === this._photography.image) {
            mediaToDisplay = `
                <img src="${media}" alt="${this._photography.likes} likes"/>`;
        }

        if (media === this._photography.video) {
            mediaToDisplay = `
                <video preload="metadata" mute>
                    <source  src="${media}" title="${this._photography.likes} likes" type="video/mp4">
                </video>`;
        }

        photographyCard.innerHTML = `
            <a href="#" class="image-wrapper" aria-label="${this._photography.title} , vu plein écran">
                ${mediaToDisplay}
            </a>
            <div class="card__header" id="${this._photography.id}">
                <h2 class="card__header__title" lang="en">
                    ${this._photography.title}
                </h2>
                <button type="button" checked="false" class="likes btn--likes" >
                    <span class="like-counter">
                        ${this._photography.likes}
                    </span>
                    <i class="fas fa-heart like-logo like-logo-unchecked" aria-hidden="true" aria-label="likes">
                    </i>
                </button>
            </div>`;


        return (photographyCard);
    }


    createSlide() {
        const media = this._photography.media;

        const slide = document.createElement("div");
        slide.classList.add("slide");
        slide.setAttribute("aria-hidden", "true");

        let mediaDiv;

        if (media === this._photography.image) {
            const photoWrapper = `
                <img src="${media}" alt="${this._photography.likes} likes" />`;

            mediaDiv = photoWrapper;
        }

        if (media === this._photography.video) {
            const videoWrapper = `
                <video preload="metadata" mute id="player" playsinline controls data-poster="${media}" title="${this._photography.likes} likes">
                    <source src="${media}" type="video/mp4" />
                </video>`;

            mediaDiv = videoWrapper;
        }

        slide.innerHTML = `
            <div class="image-wrapper">
                <div>
                    ${mediaDiv}
                </div>
            </div>
            <div class="card__header">
                <h2 class="card__header__title" lang="en">
                    ${this._photography.title}
                </h2>
            </div>`;

        return (slide);
    }
}