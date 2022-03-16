const textInput = document.querySelector(".inputs input");
let checkBtn = document.querySelector(".inputs button");
let filterInput;

checkBtn.addEventListener('click', () => {
    console.log(filterInput);
});


textInput.addEventListener("keyup", () => {
    filterInput = textInput.value.replace(/[^A-Z0-9]/ig,"");
    if (filterInput) {
        return checkBtn.classList.add("active");
    }
    checkBtn.classList.remove("active");
});