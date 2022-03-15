class PhotographerFactory3{
    constructor(data, type){
        if(type === "media"){
            return new Photography(data);
        }
        if(type === "photographer"){
            return new Photographer(data);
        }
    }
}







// function photographerFactory2(data){
//     const {name, portrait, city, price, tagline, id} = data;

//     const picture = `assets/photographers/${portrait}`;

//     function loadDom() {
//         document.getElementById("name").textContent = name;
//         document.getElementById("city").textContent = city;
//         document.getElementById("tagline").textContent = tagline;
//         document.getElementById("profile-pic").setAttribute("src", picture); 
//         document.getElementById("price").textContent = price+"€/jour";

//         // const pictureContainer = document.querySelector(".container--picture");

//         // data.map(function(id){

//         // })
//     }
//     return {id, name, loadDom};
// }

// function photographerFactory(data) {

//     const { name, portrait, city, price, tagline } = data;

//     const picture = `assets/photographers/${portrait}`;

//     function getUserCardDOM() {
//         // create elements of card 
//         const article = document.createElement( 'article' );
//         const img = document.createElement( 'img' );
//         const h2 = document.createElement( 'h2' );
//         const h3 = document.createElement( 'h3' );
//         const p = document.createElement( 'p');
//         const span = document.createElement( 'span');

//         const info = document.createElement("div");
//         const imageWrapper = document.createElement("div");



//         h2.textContent = name;
//         h3.textContent = city;
//         p.textContent = tagline;
//         span.textContent = price+"€/jour";
//         img.setAttribute("src", picture);

//         // info.appendChild(h2);
//         // info.appendChild(h3);
//         // info.appendChild(p);
//         // imageWrapper.appendChild(img);
//         // article.appendChild(info);
//         // article.appendChild(imageWrapper);
//         article.appendChild(img);
//         article.appendChild(h2);
//         article.appendChild(h3);
//         article.appendChild(p);
//         article.appendChild(span);

//         // give class to each elements 
//         article.classList.add("card");
//         img.classList.add("pic-profile");
//         h2.classList.add("card__header");
//         h3.classList.add("city");
//         p.classList.add("tagline");
//         span.classList.add("price");

//         return (article);
//     }
//     return { name, picture, getUserCardDOM }
// }