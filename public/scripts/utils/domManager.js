const main = document.getElementById("main");
const header = document.getElementById("header");

function hideMainDom() {
    main.setAttribute("aria-hidden", "true");
    main.classList.add("hidden");
    header.setAttribute("aria-hidden", "true");
    header.classList.add("hidden");
}

function displayMainDom() {
    main.setAttribute("aria-hidden", "false");
    main.classList.remove("hidden");
    header.setAttribute("aria-hidden", "false");
    header.classList.remove("hidden");
}

