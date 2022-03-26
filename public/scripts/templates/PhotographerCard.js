class PhotographerCard{
    constructor(photographer){
        this._photographer = photographer
    }

    createPhotographerCard(){
        const $wrapper = document.createElement("div");
        $wrapper.classList.add("photographer-card-wrapper");

        const photographerCard = `
        <article role="article" id="${this._photographer.id}" aria-label="lien vers la page de Mimi Keel" class="card">
            <img src="${this._photographer.portrait}" alt="" class="pic-profile">
            <h2 aria-label="nom du phtographer" class="card__header">
                ${this._photographer.name}
            </h2>
            <h3 aria-label="ville du photographe" class="city">
                ${this._photographer.city}
            </h3>
            <p aria-label="tagline du photographe" class="tagline">
                ${this._photographer.tagline}
            </p>
            <span aria-label="tarif journarlier" class="price">
                ${this._photographer.price}€/jour
            </span>
        </article>`

        $wrapper.innerHTML = photographerCard;
        return ($wrapper);
    }

    loadDom() {
        const picture = this._photographer.portrait;

        document.getElementById("name").textContent = this._photographer.name;
        document.getElementById("city").textContent = this._photographer.city;
        document.getElementById("tagline").textContent = this._photographer.tagline;
        document.getElementById("profile-pic").setAttribute("src", picture); 
        document.getElementById("price").textContent = this._photographer.price+"€/jour";
    }
} 