const divContainer = document.querySelector('#main')
let isClicked = false;

function myFun(event){

    if(isClicked){
        divContainer.style.diplay = 'none';
       isClicked = true;
    }
    else{
        divContainer.style.display = 'block';
       isClicked = false;
       myFunction(event);

    }
}





function myFunction(e) {
    if (document.querySelector('#tenure_button button.active') !== null) {
        document.querySelector('#tenure_button button.active').classList.remove('active');
    }
    e.target.className = "active";
}

function myMaturityButton(e) {
    if (document.querySelector('#interest_Button button.active') !== null) {
        document.querySelector('#interest_Button button.active').classList.remove('active');
        document.querySelector('#interest_Button button span').classList.remove('active');
    }
    e.target.className = "active";
    document.querySelector('#interest_Button button span.active').classList.remove('active');
    event.preventDefault();
}

$('.button_label').click(function () {
    $('input:not(:checked)').parent().removeClass("checked");
    $('input:checked').parent().addClass("checked");
});



$(document).ready(function() {
    $('#submitButton').click(function() {
        window.location.href = "AdditionalDetails.html";
    });
});

const mobileNumberInput = document.getElementById('amount');
const monthNumberInput = document.getElementById('month')
const submitButton = document.getElementById('submitButton');
const checkbox = document.getElementById('flexCheckDefault');


const validationMessage = document.getElementById('validationMessage');
const validationMessage_month = document.getElementById('validationMessage_month');


// Flags to indicate whether each input field is being edited or not
let isAmountEditing = false;
let isMonthEditing = false;


// Add 'input' event listeners to the input fields
mobileNumberInput.addEventListener('input', () => {
    isAmountEditing = true;
    validateInputs();
});

monthNumberInput.addEventListener('input', () => {
    isMonthEditing = true;
    validateInputs();
});


checkbox.addEventListener('change', () => {
    validateInputs();
});


// Function to validate the mobile number and enable/disable the submit button
function validateAmountNumber() {
    const AmmountNumberValue = mobileNumberInput.value.trim();
    const mobileNumberRegex = /^([1-9][0-9]{0,2}|1000)$/; 
    const amountNumberIsValid = mobileNumberRegex.test(AmmountNumberValue);

    if (amountNumberIsValid) {
        validationMessage.textContent = "";
        validationMessage.style.color = "";
        mobileNumberInput.classList.remove("error-border"); // Remove the error class

    } else {
        validationMessage.textContent = "Min. deposit of ₹ 10,000 and max deposit of ₹ 2 crores.";
        validationMessage.style.color = "red";
        mobileNumberInput.classList.add("error-border"); // Remove the error class
    }

    return amountNumberIsValid;
}


function validateMonthNumber() {
    const AmmountNumberValue = monthNumberInput.value.trim();
    const mobileNumberRegex = /^(0?[1-9]|1[012])$/; 
    const monthNumberIsValid = mobileNumberRegex.test(AmmountNumberValue);

    if (monthNumberIsValid) {
        validationMessage_month.textContent = "";
        validationMessage_month.style.color = "";
        monthNumberInput.classList.remove("error-border"); // Remove the error class

    } else {
        validationMessage_month.textContent = "Min. 12 months and max. 60 months.";
        validationMessage_month.style.color = "red";
        monthNumberInput.classList.add("error-border"); // Remove the error class
    }

    return monthNumberIsValid;
}





// Function to validate both inputs and enable/disable the submit button
function validateInputs() {
    const mobileNumberIsValid = isAmountEditing ? validateAmountNumber() : false;
    const monthIsValid = isMonthEditing ? validateMonthNumber() : false;
    const isCheckboxChecked = checkbox.checked;

    // const panNumberIsValid = isPanNumberEditing ? validatePanNumber() : false;
    // const isCheckboxChecked = checkbox.checked;

    // Enable or disable the submit button based on both inputs' validity
    submitButton.disabled = !(mobileNumberIsValid && monthIsValid && isCheckboxChecked);


}