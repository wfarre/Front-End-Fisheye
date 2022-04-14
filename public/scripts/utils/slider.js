const closeBtn = document.querySelector(".close-btn");
const carousel = document.getElementById("carousel");
const carouselSection = document.getElementById("carousel-section");
const body = document.getElementById("body");
const main = document.getElementById("main");
const header = document.getElementById("header");
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

    playVideo();
}

/**
 * playVideo():
 * start the video when the user clicks on it.
 */
function playVideo() {
    const videos = document.querySelectorAll("video");

    videos.forEach(video => {
        video.addEventListener("click", () => {
            video.play();
        });
    });
}

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
function displaySlideOnClick(pictureArray) {
    pictureArray.forEach(picture => {
        picture.addEventListener("click", () => {
            const index = parseInt(picture.parentElement.id);

            carouselSection.style.display = "block";
            carousel.setAttribute("aria-hidden", "false");
            hideMainDom();

            closeBtn.focus();

            displaySlide(index);
        });
    });
}

/**
 * closeCarousel():
 * close the carousel and apply the different aria attributes
 */
function closeCarousel() {
    carouselSection.style.display = "none";
    carousel.setAttribute("aria-hidden", "true");
    body.classList.remove("no-scroll");
    displayMainDom();
}

closeBtn.addEventListener("click", () => {
    closeCarousel();
});