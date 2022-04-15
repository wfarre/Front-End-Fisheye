const contactModalSection = document.getElementById("contact-modal-section");
const modal = document.getElementById("contact_modal");
const closeContactBtn = document.getElementById("close-modal-btn-wrapper");

/**
 * displayModal():
 * display the contact form modal
 **/
function displayModal() {
    modal.setAttribute("aria-hidden", "false");
    hideMainDom();
    contactModalSection.style.display = "flex";
    closeContactBtn.focus();
}


/**
 * closeModal():
 * close the contact form modal
 **/
function closeModal() {
    modal.setAttribute("aria-hidden", true);
    displayMainDom();
    contactModalSection.style.display = "none";
}

/**
 * validateForm() 
 * validate the form when the form is submitted 
 * */
function validateForm(event) {
    event.preventDefault();

    let errorArray = [];

    /* validate the contact form when user submit the contact form */
    inputs.forEach(input => {

        if (checkIfInputIsValid(input, input.getAttribute("data-type"))) {
            removeDanger(input);
        } else {
            displayDanger(input);
            errorArray.push("error");
        }
    })

    if (errorArray.length === 0) {
        const myEmailObject = {
            "name": inputs[0].value,
            "familyName": inputs[1].value,
            "email": inputs[2].value,
            "message": inputs[3].value
        }
        const message = new Email(myEmailObject);
        console.log(message);
        resetContactForm();
    }
}

function resetContactForm() {
    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";
    const formDataArray = document.querySelectorAll(".form-data");
    formDataArray.forEach(formData => {
        formData.classList.remove("valid");
    })
    closeModal();
}

const inputs = document.querySelectorAll(".contact-form__input");


/* add event listener to our different inputs */
inputs.forEach(input => {
    const formDataToTarget = input.parentElement;

    input.addEventListener("input", () => {
        if (formDataToTarget.classList.contains("error") || formDataToTarget.classList.contains("valid")) {
            if (checkIfInputIsValid(input, input.getAttribute("data-type"))) {
                removeDanger(input);
            } else {
                displayDanger(input);
            }
        }
    });

    input.addEventListener("blur", () => {
        if (checkIfInputIsValid(input, input.getAttribute("data-type"))) {
            removeDanger(input);
        } else {
            displayDanger(input);
        }
    });
});



//////////////////////////////////////////////////////////////////////////////////////

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



