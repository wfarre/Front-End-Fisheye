/**
 * removeDanger() : 
 * if element valid, remove error  
 * */
function removeDanger(input) {
    const formDataToTarget = input.parentElement;
    const errorMessage = formDataToTarget.querySelector(".error__message");

    formDataToTarget.classList.remove("error");
    formDataToTarget.classList.add("valid");
    errorMessage.setAttribute("aria-hidden", "true");

    input.setAttribute("aria-invalid", "false");
}

/**
 * displayDanger() : 
 * if element not valid, display error  
 * */
function displayDanger(input) {
    const formDataToTarget = input.parentElement;
    const errorMessage = formDataToTarget.querySelector(".error__message");

    formDataToTarget.classList.add("error");
    formDataToTarget.classList.remove("valid");
    errorMessage.setAttribute("aria-hidden", "false");
    input.setAttribute("aria-invalid", "true");
}


export {removeDanger, displayDanger};