
export default class PhotographerCard {
    constructor(photographer) {
        this._photographer = photographer
    }

    createPhotographerCard() {
        const $wrapper = document.createElement("a");
        $wrapper.classList.add("photographer-card-wrapper");
        $wrapper.setAttribute("href", "./photographer.html?id=" + this._photographer.id)

        const photographerCard = `
            <article role="article" id="${this._photographer.id}" aria-label="lien vers la page de ${this._photographer.name}" class="card">
                    <img src="${this._photographer.portrait}" alt="" class="pic-profile">
                    <h2 class="card__header">
                        ${this._photographer.name}
                    </h2>
                <h3 class="city">
                    ${this._photographer.city}
                </h3>
                <p class="tagline">
                    ${this._photographer.tagline}
                </p>
                <span class="price">
                    ${this._photographer.price}€/jour
                </span>
            </article>`

        $wrapper.innerHTML = photographerCard;
        return ($wrapper);
    }

    loadDom() {
        const picture = this._photographer.portrait;

        const $wrapper = document.createElement("div");
        $wrapper.classList.add("photographer-profile");

        document.getElementById("price").textContent = this._photographer.price + "€/jour";
        document.getElementById("contact-photographer-name").innerHTML = this._photographer.name;

        const photographerProfile = `
            <div class="photographer-info">

                <div class="photographer-info__name">
                    <h1 id="name" class="info-text info-text--name">${this._photographer.name}</h1>
                </div>

                <div class="photographer-info__city">
                    <h2 id="city" class="info-text info-text--city">${this._photographer.city}</h2>
                </div>

                <div class="photographer-info__tagline">
                    <p id="tagline" class="info-text info-text--tagline">${this._photographer.tagline}</p>
                </div>

            </div>

            <div class="button-wrapper">
                <button id="contact-me-btn" class="contact_button" onclick="window._displayModal.displayModal()"
                aria-label="Contactez moi">Contactez-moi</button>
            </div>

            <div class="image-wrapper">
                <img id="profile-pic" src="${picture}" alt="">
            </div>`;

        $wrapper.innerHTML = photographerProfile;

        return ($wrapper);
    }
}