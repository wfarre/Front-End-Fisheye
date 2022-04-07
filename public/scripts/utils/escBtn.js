// it triggers closeModal when escape is pressed 
document.addEventListener("keydown", event => {
    const pressedKey = event.key;

    if (pressedKey === "Escape") {
        closeModal();
        closeCarousel();
    }
});