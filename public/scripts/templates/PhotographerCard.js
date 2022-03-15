class PhotographerCard{
    constructor(photographer){
        this._photographer = photographer
    }

    
    createPhotographerCard(){
        const picture = this._photographer.portrait;

        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const h3 = document.createElement( 'h3' );
        const p = document.createElement( 'p');
        const span = document.createElement( 'span');

        const info = document.createElement("div");
        const imageWrapper = document.createElement("div");



        h2.textContent = this._photographer.name;
        h3.textContent = this._photographer.city;
        p.textContent = this._photographer.tagline;
        span.textContent = this._photographer.price+"€/jour";
        img.setAttribute("src", picture);

        // info.appendChild(h2);
        // info.appendChild(h3);
        // info.appendChild(p);
        // imageWrapper.appendChild(img);
        // article.appendChild(info);
        // article.appendChild(imageWrapper);
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(span);

        // give class to each elements 
        article.classList.add("card");
        img.classList.add("pic-profile");
        h2.classList.add("card__header");
        h3.classList.add("city");
        p.classList.add("tagline");
        span.classList.add("price");

        return (article);
    }

    loadDom() {
        const picture = this._photographer.portrait;

        document.getElementById("name").textContent = this._photographer.name;
        document.getElementById("city").textContent = this._photographer.city;
        document.getElementById("tagline").textContent = this._photographer.tagline;
        document.getElementById("profile-pic").setAttribute("src", picture); 
        document.getElementById("price").textContent = this._photographer.price+"€/jour";

        // const pictureContainer = document.querySelector(".container--picture");

        // data.map(function(id){

        // })
    }
} 