const closeBtn = document.querySelector(".close-btn");
const carousel = document.querySelector(".carousel");


closeBtn.addEventListener("click", () => {
    carousel.style.display = "none";
})

let currentSlide;

function displaySlide(n) {
    const slides = document.querySelectorAll(".slide");
    currentSlide = n;

    slides.forEach(slide => {
        slide.style.display = "none";
    });
    if (currentSlide > slides.length - 1) {
        currentSlide = 0;
    }
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    slides[currentSlide].style.display = "block";

    const videos = document.querySelectorAll("video");

    videos.forEach(video => {
        video.addEventListener("click", () => {
            console.log("hello");
            video.play();
        })
    })

  
}

window.addEventListener("keyup", (e) => {
    console.log(e.key);
    e.preventDefault();
    if(e.key === "ArrowRight"){
        nextSlide(1);
    }
    if(e.key === "ArrowLeft"){
        previousSlide(1);
    }
});


function previousSlide(n) {
    currentSlide -= n;
    displaySlide(currentSlide);
}

function nextSlide(n) {
    currentSlide += n;
    displaySlide(currentSlide);
}