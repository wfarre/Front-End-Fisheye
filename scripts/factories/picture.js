function displayPicture(data, photographer) {
    // data.map(pic => {
    //     if (pic.photographerId === id) {
    const { title, image, video,likes } = data;

   
        const movie = `../assets/pictures/${photographer}/${video}`

        const picture = `../assets/pictures/${photographer}/${image}`

    function loadPic() {
        // create my DOM element 
        const card = document.createElement("div");
        const imageWrapper = document.createElement("div");
        const cardHeader = document.createElement("div");
        const cardTitle = document.createElement("h2");
        const like = document.createElement("span");
        let mediaDisplay;
        if(image){
            const img = document.createElement("img");
            img.setAttribute("src", picture);
            mediaDisplay = img;
        } else if (video){
            const videoEl = document.createElement("video");
            const videoSource = document.createElement("source");
            videoEl.appendChild(videoSource);
            videoSource.setAttribute("src", movie);
            mediaDisplay = videoEl;
        }
        // add class to my DOM elements
        card.classList.add("card");
        imageWrapper.classList.add("image-wrapper");
        cardHeader.classList.add("card__header");
        cardTitle.classList.add("card__header__title");
        like.classList.add("like");

        card.appendChild(imageWrapper);
        card.appendChild(cardHeader);

        imageWrapper.appendChild(mediaDisplay);
        cardHeader.appendChild(cardTitle);
        cardHeader.appendChild(like);

   
        cardTitle.textContent = title;
        like.textContent = likes + "♡";

        return (card);
    }
    return {loadPic}
}