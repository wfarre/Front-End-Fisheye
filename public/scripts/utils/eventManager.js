import {nextSlide, previousSlide} from './slider.js';
import {closeModal} from './form.js';
import {closeCarousel} from './slider.js';

// it triggers closeModal when escape is pressed 
document.addEventListener("keydown", event => {
    const pressedKey = event.key;
    console.log(pressedKey);

    if (pressedKey === "Escape") {
        closeModal();
        closeCarousel();
    }
});


/* event listener when the user press the keyboard */
window.addEventListener("keyup", (e) => {
    e.preventDefault();
    console.log(e.key);
    
    if (e.key === "ArrowRight") {
        nextSlide(1);
    }
    if (e.key === "ArrowLeft") {
        previousSlide(1);
    }
});
