const closeBtn = document.querySelector(".close-btn");
const carousel = document.getElementById("carousel");
const carouselSection = document.getElementById("carousel-section");
const body = document.getElementById("body");
let currentSlide;

/**
 * displaySlide()
 * display the slide according the right index 
 * */
function displaySlide(n) {
    const slides = document.querySelectorAll(".slide");
    currentSlide = n;

    slides.forEach(slide => {
        slide.style.display = "none";
        slide.setAttribute("aria-hidden", "true");
    });
    if (currentSlide > slides.length - 1) {
        currentSlide = 0;
    }
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    slides[currentSlide].style.display = "block";
    slides[currentSlide].setAttribute("aria-hidden", "false");
    body.classList.add("no-scroll");

    const videos = document.querySelectorAll("video");

    videos.forEach(video => {
        video.addEventListener("click", () => {
            video.play();
        });
    });  
}

/* event listener when the user press the keyboard */
window.addEventListener("keyup", (e) => {
    e.preventDefault();
    if(e.key === "ArrowRight"){
        nextSlide(1);
    }
    if(e.key === "ArrowLeft"){
        previousSlide(1);
    }
});

/**
 * previousSlide()
 * display the previous slide 
 * */
function previousSlide(n) {
    currentSlide -= n;
    displaySlide(currentSlide);
}

/**
 * nextSlide()
 * display the next slide 
 * */
function nextSlide(n) {
    currentSlide += n;
    displaySlide(currentSlide);
}


/**
 * displaySlideOnClick()
 * add eventlistener to every picture. When one picture is clicked, the carousel is opened at the right slide 
 * */
function displaySlideOnClick(pictureArray){
    pictureArray.forEach(picture => {
        picture.addEventListener("click", (e) => {
            const index = parseInt(picture.parentElement.id);
            carouselSection.style.display = "block";
            carousel.setAttribute("aria-hidden", "false");
            body.setAttribute("aria-hidden", "true");
            closeBtn.focus();
            displaySlide(index);
        });
    });
}

/**
 * closeCarousel():
 * close the carousel and apply the different aria attributes
 */
function closeCarousel(){
    carouselSection.style.display = "none";
    body.classList.remove("no-scroll");
    body.setAttribute("aria-hidden", "false");
    carousel.setAttribute("aria-hidden", "true");
}

closeBtn.addEventListener("click", () => {
    closeCarousel();
});