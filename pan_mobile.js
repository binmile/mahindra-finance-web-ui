$(document).ready(function() {
    $('#submitButton').click(function() {
        $('#exampleModal').modal('show');

    });
});

$(document).ready(function() {
    $('#sub_otp').click(function() {
        $('#exampleModal2').modal('show');
    });
});


document.addEventListener("DOMContentLoaded", function() {

    const timerElement = document.getElementById("timer");

    const resultElement = document.getElementById("resend_otp");
    const otpMsgElement = document.querySelector(".otp_msg"); // Add the period to select by class name

    function startTimer(duration, display) {
        let timer = duration;
        let minutes, seconds;

        let interval = setInterval(function() {

            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);


            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;


            display.textContent = minutes + ":" + seconds;


            timer--;


            if (timer < 0) {
                clearInterval(interval);
                showHTMLText();
                hideOTPMsg();
                showResendButton();
            }
        }, 1000);
    }

    function showHTMLText() {
        resultElement.style.display = "block";
    }

    function hideOTPMsg() {
        otpMsgElement.style.display = "none";
    }

    function showResendButton() {
        resultElement.style.display = "block";
        otpMsgElement.style.display = "none";
    }

    const resendButton = document.getElementById("resend_otp");
    const otp_msg_res = document.querySelector(".otp_msg"); // Add the period to select by class name

    resendButton.addEventListener("click", function() {
        resendButton.style.display = "none";
        otp_msg_res.style.display = "flex";
        startTimer(59, timerElement);
    });
    startTimer(59, timerElement);
});

const mobileNumberInput = document.getElementById('mobileNumberInput');
const panNumberInput = document.getElementById('panNumberInput');
const submitButton = document.getElementById('submitButton');
const checkbox = document.getElementById('flexCheckDefault');

const validationMessage_mob = document.getElementById('validationMessage_mob');
const validationMessage_pan = document.getElementById('validationMessage_pan');


// Flags to indicate whether each input field is being edited or not
let isMobileNumberEditing = false;
let isPanNumberEditing = false;

// Add 'input' event listeners to the input fields
mobileNumberInput.addEventListener('input', () => {
    isMobileNumberEditing = true;
    validateInputs();
});

panNumberInput.addEventListener('input', () => {
    isPanNumberEditing = true;
    validateInputs();

});

// Function to validate the mobile number and enable/disable the submit button
function validateMobileNumber() {
    const mobileNumberValue = mobileNumberInput.value.trim();
    const mobileNumberRegex = /^\d{10}$/;
    const mobileNumberIsValid = mobileNumberRegex.test(mobileNumberValue);

    if (mobileNumberIsValid) {
        validationMessage_mob.textContent = "";
        validationMessage_mob.style.color = "";
        mobileNumberInput.classList.remove("error-border"); // Remove the error class

    } else {
        validationMessage_mob.textContent = "Please enter a 10 digit mobile number.";
        validationMessage_mob.style.color = "red";
        mobileNumberInput.classList.add("error-border"); // Remove the error class

    }

    return mobileNumberIsValid;
}

// Function to validate the PAN number and enable/disable the submit button
function validatePanNumber() {
    const panNumberValue = panNumberInput.value.trim();
    const panNumberRegex = /^[A-Z]{5}\d{4}[A-Z]$/;
    const panNumberIsValid = panNumberRegex.test(panNumberValue);

    if (panNumberIsValid) {
        validationMessage_pan.textContent = "";
        validationMessage_pan.style.color = "";
        panNumberInput.classList.remove("error-border"); // Add the error class to the PAN input
    } else {
        validationMessage_pan.textContent = "Please enter a valid PAN.";
        validationMessage_pan.style.color = "red";
        panNumberInput.classList.add("error-border"); // Add the error class to the PAN input
    }

    return panNumberIsValid;
}

checkbox.addEventListener('change', () => {
    validateInputs();
});

// Function to validate both inputs and enable/disable the submit button
function validateInputs() {
    const mobileNumberIsValid = isMobileNumberEditing ? validateMobileNumber() : false;
    const panNumberIsValid = isPanNumberEditing ? validatePanNumber() : false;
    const isCheckboxChecked = checkbox.checked;

    // Enable or disable the submit button based on both inputs' validity
    submitButton.disabled = !(mobileNumberIsValid && panNumberIsValid && isCheckboxChecked);


}