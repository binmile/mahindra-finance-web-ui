function toggleDropdownOccupation() {
    var dropdownOptions = document.getElementById("dropdown-options-occupation");
    var dropdownIcon = document.getElementById("dropdown-icon-occupation");

    dropdownOptions.style.display = "block";
    dropdownIcon.style.transform = "rotate(180deg)";
}

function selectOption(option) {
    const selectedOptionText = option.textContent.trim();
    const selectedOptionIcon = option.querySelector(".icon").classList.value;
    const dropdownInput = document.querySelector(".drop-input-occupation");
    const dropdownIcon = document.getElementById("dropdown-icon-occupation");
    const dropdownOptions = document.getElementById("dropdown-options-occupation");

    dropdownInput.value = selectedOptionText;
    dropdownInput.setAttribute("data-icon", selectedOptionIcon);

    dropdownIcon.classList.remove("fa-chevron-up");
    dropdownIcon.classList.add("fa-chevron-down");
    dropdownOptions.style.display = "none";
    dropdownIcon.style.transform = "rotate(0deg)";
}

const options = document.querySelectorAll(".custom-dropdown-occupation option");
options.forEach(option => {
    option.addEventListener("click", function() {
        selectOption(this);
    });
});





function toggleDropdownannual() {
    var dropdownOptions = document.getElementById("dropdown-options-annual");
    var dropdownIcon = document.getElementById("dropdown-icon-annual");

    dropdownOptions.style.display = "block";
    dropdownIcon.style.transform = "rotate(180deg)";
}

function selectOptionAnnual(option) {
    const selectedOptionText = option.textContent.trim();
    const selectedOptionIcon = option.querySelector(".icon").classList.value;
    const dropdownInput = document.querySelector(".drop-input-annual");
    const dropdownIcon = document.getElementById("dropdown-icon-annual");
    const dropdownOptions = document.getElementById("dropdown-options-annual");

    dropdownInput.value = selectedOptionText;
    dropdownInput.setAttribute("data-icon", selectedOptionIcon);

    dropdownIcon.classList.remove("fa-chevron-up");
    dropdownIcon.classList.add("fa-chevron-down");
    dropdownOptions.style.display = "none";
    dropdownIcon.style.transform = "rotate(0deg)";
}

const optionsannual = document.querySelectorAll(".custom-dropdown-annual option");
optionsannual.forEach(option => {
    option.addEventListener("click", function() {
        selectOptionAnnual(this);
    });
});