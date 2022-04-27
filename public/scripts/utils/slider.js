import { hideMainDom, displayMainDom } from "./domManager.js";
const closeBtn = document.querySelector(".close-btn");
const carouselSection = document.getElementById("carousel-section");
// const carousel = document.getElementById("carousel");
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

    // const slideTitle = slides[currentSlide].querySelector(".card__header__title").innerHTML;
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
export default function displaySlideOnClick(pictureArray) {
    pictureArray.forEach(picture => {
        picture.addEventListener("click", () => {
            const index = parseInt(picture.parentElement.id);

            carouselSection.style.display = "block";
            carouselSection.setAttribute("aria-hidden", "false");
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
    carouselSection.setAttribute("aria-hidden", "true");
    body.classList.remove("no-scroll");
    displayMainDom();
}

closeBtn.addEventListener("click", () => {
    closeCarousel();
});


const prev = document.getElementById("prev");
const next = document.getElementById("next");

prev.addEventListener("click", () => {
    previousSlide(1);
});

next.addEventListener("click", () => {
    nextSlide(1);
})

export {previousSlide, nextSlide, closeCarousel};
