const main = document.getElementById("main");
const header = document.getElementById("header");

/**
 * hides the main section when the user opens a modal (contact or carousel).
 */
function hideMainDom() {
    main.setAttribute("aria-hidden", "true");
    main.classList.add("hidden");
    header.setAttribute("aria-hidden", "true");
    header.classList.add("hidden");
}

/**
 * diplays the main section when the user closes a modal (contact or carousel).
 */
function displayMainDom() {
    main.setAttribute("aria-hidden", "false");
    main.classList.remove("hidden");
    header.setAttribute("aria-hidden", "false");
    header.classList.remove("hidden");
}


export {displayMainDom, hideMainDom};