const options = document.querySelectorAll(".option");
const dropdownBtn = document.querySelector(".dropdown-menu__button");
const dropdown = document.querySelector(".selector");

/* add event listener to the button for the filter. When clicked, it displays the the dropdown menu */
dropdownBtn.addEventListener("click", () => {
    dropdownBtn.setAttribute("aria-haspopup", false);
    dropdownBtn.setAttribute("aria-expanded", true);
    dropdown.style.display = "flex";
    dropdownBtn.style.display = "none";
})

/* when one of the filter is selected, the menu is closed and only the selected option is displayed in the button */
options.forEach(option => {
    option.addEventListener("click", () => {
        console.log(option.innerHTML);
        dropdownBtn.innerHTML = option.innerHTML;
        dropdownBtn.setAttribute("aria-haspopup", true);
        dropdownBtn.setAttribute("aria-expanded", false);
        dropdown.style.display = "none";
        dropdownBtn.style.display = "block";

        options.forEach(option => {
            option.classList.remove("checked");
        })
        option.classList.add("checked");
    })
})