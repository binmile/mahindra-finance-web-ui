$(document).ready(function() {
    $('#sub_otp').click(function() {
        $('#exampleModal2').modal('show');
    });
});
$(document).ready(function() {
    $('#closeModalBtn').click(function() {
        $('#exampleModal').modal('hide');
    });
});
$(document).ready(function() {
    $('#closeModalBtn2').click(function() {
        $('#exampleModal2').modal('hide');
    });
});


$(document).ready(function() {
    let prevIndex = -1;
    $('.box_div').on('keyup', function(e) {
        const currentIndex = $('.box_div').index(this);
        const inputLength = $(this).val().trim().length;
        if (e.key === 'Backspace' || (e.keyCode >= 48 && e.keyCode <= 57)) {
            if (inputLength > 0) {
                if (currentIndex < $('.box_div').length - 1) {
                    $('.box_div').eq(currentIndex + 1).focus();
                    prevIndex = currentIndex + 1;
                }
            } else {
                if (currentIndex > 0) {
                    $('.box_div').eq(currentIndex - 1).focus();
                    prevIndex = currentIndex - 1;
                }
            }
        }
    });

    $('.box_div').on('click', function() {
        const currentIndex = $('.box_div').index(this);
        prevIndex = currentIndex;
    });
});


$(document).ready(function() {
    let prevIndex = -1;
    $('.box_div_error').on('keyup', function(e) {
        const currentIndex = $('.box_div_error').index(this);
        const inputLength = $(this).val().trim().length;
        if (e.key === 'Backspace' || (e.keyCode >= 48 && e.keyCode <= 57)) {
            if (inputLength > 0) {
                if (currentIndex < $('.box_div_error').length - 1) {
                    $('.box_div_error').eq(currentIndex + 1).focus();
                    prevIndex = currentIndex + 1;
                }
            } else {
                if (currentIndex > 0) {
                    $('.box_div_error').eq(currentIndex - 1).focus();
                    prevIndex = currentIndex - 1;
                }
            }
        }
    });

    $('.box_div_error').on('click', function() {
        const currentIndex = $('.box_div_error').index(this);
        prevIndex = currentIndex;
    });
});
document.addEventListener("DOMContentLoaded", function() {

    const timerElement = document.getElementById("timer");

    const resultElement = document.getElementById("resend_otp");
    const otpMsgElement = document.querySelector(".otp_msg");

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

let isMobileNumberEditing = false;
let isPanNumberEditing = false;

mobileNumberInput.addEventListener('focus', () => {
    isMobileNumberEditing = true;
    clearErrorMessage(validationMessage_mob);
});

panNumberInput.addEventListener('focus', () => {
    isPanNumberEditing = true;
    clearErrorMessage(validationMessage_pan);
});


mobileNumberInput.addEventListener('blur', () => {
    isMobileNumberEditing = false;
    validateMobileNumber();
    validateInputs();
});

panNumberInput.addEventListener('blur', () => {
    isPanNumberEditing = false;
    validatePanNumber();
    validateInputs();
});

function validateMobileNumber() {
    const mobileNumberValue = mobileNumberInput.value.trim();
    const mobileNumberRegex = /^(?:(?:(?:\+|00)91)|0)?[6-9]\d{9}$/;
    const mobileNumberIsValid = mobileNumberRegex.test(mobileNumberValue);

    if (mobileNumberIsValid) {
        validationMessage_mob.textContent = "";
        mobileNumberInput.classList.remove("error-border");
    } else {
        validationMessage_mob.textContent = "Please enter a 10-digit mobile number.";
        mobileNumberInput.classList.add("error-border");
    }

    return mobileNumberIsValid;
}

function validatePanNumber() {
    const panNumberValue = panNumberInput.value.trim();
    const panNumberRegex = /^[A-Z]{5}\d{4}[A-Z]$/;
    const panNumberIsValid = panNumberRegex.test(panNumberValue);

    if (panNumberIsValid) {
        validationMessage_pan.textContent = "";
        panNumberInput.classList.remove("error-border");
    } else {
        validationMessage_pan.textContent = "Please enter a valid PAN.";
        panNumberInput.classList.add("error-border");
    }

    return panNumberIsValid;
}

function clearErrorMessage(validationMessage) {
    validationMessage.textContent = "";
    if (validationMessage === validationMessage_mob) {
        mobileNumberInput.classList.remove("error-border");
    } else if (validationMessage === validationMessage_pan) {
        panNumberInput.classList.remove("error-border");
    }
}

checkbox.addEventListener('change', () => {
    validateInputs();
});

function validateInputs() {
    const mobileNumberIsValid = validateMobileNumber();
    const panNumberIsValid = validatePanNumber();
    const isCheckboxChecked = checkbox.checked;
    submitButton.disabled = !(mobileNumberIsValid && panNumberIsValid && isCheckboxChecked);

    $(document).ready(function() {
        $('#submitButton').click(function() {
            $('#exampleModal').modal('show');

        });
    });

}