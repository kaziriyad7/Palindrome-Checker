const textInput = document.querySelector(".inputs input");
let checkBtn = document.querySelector(".inputs button");
let infoText = document.querySelector('.info-txt')
let filterInput;

checkBtn.addEventListener('click', () => {

    let reverseInput = filterInput.split("").reverse().join("");
    infoText.style.display = "block";
    if (filterInput != reverseInput) {
        return (infoText.innerHTML = `No, <span>'${textInput.value}'</span> isn't a palindrome!`);
    }
    infoText.innerHTML = `Yes, <span>'${textInput.value}'</span> is a palindrome!`;
});


textInput.addEventListener("keyup", () => {
    filterInput = textInput.value.toLowerCase().replace(/[^A-Z0-9]/gi, "");
    if (filterInput) {
        return checkBtn.classList.add("active");
    }
    infoText.style.display = "none";
    checkBtn.classList.remove("active");
});