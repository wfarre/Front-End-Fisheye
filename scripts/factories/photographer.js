function photographerFactory(data) {
    const { name, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        // create elements of card 
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);

        // give class to each elements 
        article.classList.add("card");
        img.classList.add("pic-profile");
        h2.classList.add("card__header");

        return (article);
    }
    return { name, picture, getUserCardDOM }
}