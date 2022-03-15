function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}


function validateForm(event) {
    event.preventDefault();
    /* validate the contact form when user submit the contact form */
    const inputs = document.querySelectorAll(".contact-form__input");

    inputs.forEach(input => {
        const formDataToTarget = input.parentElement;
        console.log(formDataToTarget);


        if(checkIfInputIsValid(input, input.getAttribute("data-type"))){
            console.log("great!");
            removeDanger(formDataToTarget);
        } else{
            displayDanger(formDataToTarget);
        };
    })
}

function checkIfInputIsValid(element, type) {
    /* check every input */
    const value = element.value;
    console.log(value);


    switch (type) {
        case "name":
            return checkIfNameIsValid(value);
            break;
            case "email":
            return checkIfEmailIsValid(value);
            break;
            case "message":
            return checkIfMessageIsValid(value);
            break;
        default: type
            break;
    }
}

function checkIfNameIsValid(input){
    if(input.length > 2){
        return true;
    } else {
        return false;
    }
}

function checkIfEmailIsValid(input){
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (input.match(pattern)) {
        return true;
    } else {
        return false;
    }
}

function checkIfMessageIsValid(input){
    if(input.length >= 200){
        return true;
    } else {
        return false;
    }
}

/* removeDanger() : if element valid, remove error  */
function removeDanger(formData) {
    formData.setAttribute("data-error-display", false);
  }
  
  /* displayDanger() : if element not valid, display error  */
  function displayDanger(formData) {
    formData.setAttribute("data-error-display", true);
  }