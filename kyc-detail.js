function toggleDropdown() {
    var dropdownOptions = document.getElementById("dropdown-options");
    var dropdownIcon = document.getElementById("dropdown-icon-occupation");

    if (dropdownOptions.style.display === "none") {
        dropdownOptions.style.display = "block";
        dropdownIcon.classList.remove("fa-chevron-down");
        dropdownIcon.classList.add("fa-chevron-up");
        dropdownIcon.style.transform = "rotate(180deg)";
    } else {
        dropdownOptions.style.display = "none";
        dropdownIcon.classList.remove("fa-chevron-up");
        dropdownIcon.classList.add("fa-chevron-down");
        dropdownIcon.style.transform = "rotate(0deg)";
    }
}

// Function to handle selecting an option
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
    dropdownOptions.style.display = "none"; // Close the dropdown options
    dropdownIcon.style.transform = "rotate(0deg)";
}

// Attach click event listeners to the options
const options = document.querySelectorAll(".custom-dropdown option");
options.forEach(option => {
    option.addEventListener("click", function() {
        selectOption(this);
    });
});