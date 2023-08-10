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


function toggleDropdownannual2() {
    var dropdownOptions = document.getElementById("dropdown-options-annual2");
    var dropdownIcon = document.getElementById("dropdown-icon-annual2");

    dropdownOptions.style.display = "block";
    dropdownIcon.style.transform = "rotate(180deg)";
}

function selectOptionAnnual2(option) {
    const selectedOptionText = option.textContent.trim();
    const selectedOptionIcon = option.querySelector(".icon").classList.value;
    const dropdownInput = document.querySelector(".drop-input-annual2");
    const dropdownIcon = document.getElementById("dropdown-icon-annual2");
    const dropdownOptions = document.getElementById("dropdown-options-annual2");

    dropdownInput.value = selectedOptionText;
    dropdownInput.setAttribute("data-icon", selectedOptionIcon);

    dropdownIcon.classList.remove("fa-chevron-up");
    dropdownIcon.classList.add("fa-chevron-down");
    dropdownOptions.style.display = "none";
    dropdownIcon.style.transform = "rotate(0deg)";
}

const optionsannual2 = document.querySelectorAll(".custom-dropdown-annual2 option");
optionsannual2.forEach(option => {
    option.addEventListener("click", function() {
        selectOptionAnnual2(this);
    });
});

function AddNewAddressFieldClose() {
    document.getElementById("AddNewAddressDropDown").style.display = "none";
}

function AddNewAddressFieldOpen() {
    document.getElementById("AddNewAddressDropDown").style.display = "block";
    var selectedvalue = $("#selectNewAddress").val();
    if (selectedvalue === "DigiLocker"){
        $(".drivingLicense").css({"display": "none"});
        $(".voterId").css({"display": "none"});
        $(".enterPassport").css({"display": "none"});
    }
}

function AddNewAddressFunctionality() {
    var selectedvalue = $("#selectNewAddress").val();
    if (selectedvalue === "DigiLocker"){
        $(".drivingLicense").css({"display": "none"});
        $(".voterId").css({"display": "none"});
        $(".enterPassport").css({"display": "none"});
    }
    if (selectedvalue === "Driving License"){
        $(".drivingLicense").css({"display": "block"});
        $(".voterId").css({"display": "none"});
        $(".enterPassport").css({"display": "none"});
    }
    if (selectedvalue === "Voter ID"){
        $(".drivingLicense").css({"display": "none"});
        $(".voterId").css({"display": "block"});
        $(".enterPassport").css({"display": "none"});
    }
    if (selectedvalue === "Passport Number"){
        $(".drivingLicense").css({"display": "none"});
        $(".voterId").css({"display": "none"});
        $(".enterPassport").css({"display": "block"});
    }
}

function afterAdhaarVerficationActionMobile() {
    $(".afterAdharVarificationMobile").css({"display": "block"});
    $(".beforeAdharVarificationMobile").css({"display": "none"});
    $(".custom-button-data").removeClass("disabled");
}

function afterAdhaarVerficationActionDesktop() {
    $(".afterAdharVarificationDesktop").css({"display": "block"});
    $(".beforeAdharVarificationDesktop").css({"display": "none"});
    $(".custom-button-data").removeClass("disabled");
}