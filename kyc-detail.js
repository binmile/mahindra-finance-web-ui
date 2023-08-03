function toggleDropdown() {
    var dropdownOptions = document.getElementById("dropdown-options");
    var dropdownIcon = document.getElementById("dropdown-icon-occupation");

    dropdownOptions.style.display = "block";
    dropdownIcon.style.transform = "rotate(180deg)";
}

function selectOption(option) {
    const selectedOptionText = option.textContent.trim();
    const selectedOptionIcon = option.querySelector(".icon").classList.value;
    const dropdownInput = document.querySelector(".dropdown-input");
    const dropdownIcon = document.getElementById("dropdown-icon-occupation");
    const dropdownOptions = document.getElementById("dropdown-options");

    dropdownInput.value = selectedOptionText;
    dropdownInput.setAttribute("data-icon", selectedOptionIcon);

    dropdownIcon.classList.remove("fa-chevron-up");
    dropdownIcon.classList.add("fa-chevron-down");
    dropdownOptions.style.display = "none";
    dropdownIcon.style.transform = "rotate(0deg)";
}

const options = document.querySelectorAll(".custom-dropdown option");
options.forEach(option => {
    option.addEventListener("click", function() {
        selectOption(this);
    });
});