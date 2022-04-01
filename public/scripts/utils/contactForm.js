const contactModalSection = document.getElementById("contact-modal-section");
const modal = document.getElementById("contact_modal");
const main = document.getElementById("main");
const closeContactBtn = document.getElementById("close-modal-btn");


function displayModal() {
    main.setAttribute("aria-hidden", true);
    modal.setAttribute("aria-hiddent", false);
    contactModalSection.style.display = "flex";
    closeContactBtn.focus();
    console.log(closeBtn);
}

function closeModal() {
    modal.setAttribute("aria-hidden", true);
    main.setAttribute("aria-hiddent", false);
    contactModalSection.style.display = "none";
}

const inputs = document.querySelectorAll(".contact-form__input");



/* add event listener to our different inputs */
inputs.forEach(input => {
    const formDataToTarget = input.parentElement;

    input.addEventListener("input", () => {
        if (formDataToTarget.classList.contains("error") || formDataToTarget.classList.contains("valid")) {
            if (checkIfInputIsValid(input, input.getAttribute("data-type"))) {
                removeDanger(formDataToTarget);
            } else {
                displayDanger(formDataToTarget);
            }
        }
    });

    input.addEventListener("blur", () => {
        if (checkIfInputIsValid(input, input.getAttribute("data-type"))) {
            removeDanger(formDataToTarget);
        } else {
            displayDanger(formDataToTarget);
        }
    });
})


/**
 * validateForm() 
 * validate the form when the form is submitted 
 * */
function validateForm(event) {
    event.preventDefault();
    /* validate the contact form when user submit the contact form */

    inputs.forEach(input => {
        const formDataToTarget = input.parentElement;
        console.log(formDataToTarget);


        if (checkIfInputIsValid(input, input.getAttribute("data-type"))) {
            removeDanger(formDataToTarget);

            const myEmailObject = {
                "name": inputs[0].value,
                "familyName": inputs[1].value,
                "email": inputs[2].value,
                "message": inputs[3].value
            }
            const message = new Email(myEmailObject);
            /* log the submitted email */
            console.log(message);
        } else {
            displayDanger(formDataToTarget);
        };
    })
}

/**
 * checkIfEmailIsValid()
 * check if input is valid according to his type 
 * */
function checkIfInputIsValid(element, type) {
    /* check every input */
    const value = element.value;

    switch (type) {
        case "name":
            return checkIfNameIsValid(value);
        case "email":
            return checkIfEmailIsValid(value);
        case "message":
            return checkIfMessageIsValid(value);
        default:
            type
            break;
    }
}

/**
 * checkIfNameIsValid(input)
 * check if the input as a name is valid or not 
 * */
function checkIfNameIsValid(input) {
    if (input.length > 2) {
        return true;
    } else {
        return false;
    }
}

/**
 * checkIfEmailIsValid(input)
 * check if the input as an email is valid or not 
 * */
function checkIfEmailIsValid(input) {
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (input.match(pattern)) {
        return true;
    } else {
        return false;
    }
}

/**
 * checkIfMessageIsValid(input)
 * check if the input as a message is valid or not
 *  */
function checkIfMessageIsValid(input) {
    if (input.length >= 200) {
        return true;
    } else {
        return false;
    }
}



/**
 * removeDanger() : 
 * if element valid, remove error  
 * */
function removeDanger(formData) {
    // formData.setAttribute("data-error-display", false);
    formData.classList.remove("error");
    formData.classList.add("valid");
}

/**
 * displayDanger() : 
 * if element not valid, display error  
 * */
function displayDanger(formData) {
    formData.classList.add("error");
    formData.classList.remove("valid");


    // formData.setAttribute("data-error-display", true);
}


// closeModal when escape is pressed 
document.addEventListener("keydown", event => {
    const pressedKey = event.key;

    if (pressedKey === "Escape") {
        closeModal();
        closeCarousel();
    }
})