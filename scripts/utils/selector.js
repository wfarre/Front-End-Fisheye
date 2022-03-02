const options = document.querySelectorAll(".option");

options.forEach(option => {
    option.addEventListener("click", ()=>{
        options.forEach(option => {
            console.log("hello");
            option.classList.remove("checked");
        })
        option.classList.add("checked");
    })
})