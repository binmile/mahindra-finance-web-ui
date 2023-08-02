function toggleDropdown() {
    var dropdownOptions = document.getElementById("dropdown-options");
    var dropdownIcon = document.getElementById("dropdown-icon");

    if (dropdownOptions.style.display === "none") {
        dropdownOptions.style.display = "block";
        dropdownIcon.classList.remove("fa-chevron-down");
        dropdownIcon.classList.add("fa-chevron-up");
    } else {
        dropdownOptions.style.display = "none";
        dropdownIcon.classList.remove("fa-chevron-up");
        dropdownIcon.classList.add("fa-chevron-down");
    }
}

// Function to handle selecting an option
function selectOption(option) {
    var selectedOptionText = option.textContent.trim();
    var selectedOptionIcon = option.querySelector(".icon").classList.value;
    var dropdownInput = document.querySelector(".dropdown-input");
    var dropdownIcon = document.getElementById("dropdown-icon");
    var dropdownOptions = document.getElementById("dropdown-options");

    dropdownInput.value = selectedOptionText;
    dropdownInput.setAttribute("data-icon", selectedOptionIcon);

    dropdownIcon.classList.remove("fa-chevron-up");
    dropdownIcon.classList.add("fa-chevron-down");
    dropdownOptions.style.display = "none"; // Close the dropdown options
}

// Attach click event listeners to the options
var options = document.querySelectorAll(".custom-dropdown option");
options.forEach(option => {
    option.addEventListener("click", function() {
        selectOption(this);
    });
});

// Event listener for the input field to toggle dropdown options visibility
var dropdownInput = document.querySelector(".dropdown-input");
dropdownInput.addEventListener("click", function() {
    toggleDropdown();
});