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

function handleClick() {
    const flexSwitchCheckDefault = document.getElementById('flexSwitchCheckDefault');
    const sapNumberInput = document.getElementById('sapNumberInput');

    if (flexSwitchCheckDefault.checked) {
        sapNumberInput.style.display = 'none';
    } else {
        sapNumberInput.style.display = 'block';
    }
}

$(document).ready(function() {
    $('.box_div').on('input', function() {
        const currentIndex = $('.box_div').index(this);

        if ($(this).val().trim() !== '') {
            if (currentIndex < $('.box_div').length - 1) {
                $('.box_div').eq(currentIndex + 1).focus();
            }
        } else {
            if (currentIndex > 0) {
                $('.box_div').eq(currentIndex - 1).focus();
            }
        }
    });
});


$(document).ready(function() {
    $('.box_div_error').on('input', function() {

        const currentIndex = $('.box_div_error').index(this);


        if ($(this).val().trim() !== '') {
            if (currentIndex < $('.box_div_error').length - 1) {
                $('.box_div_error').eq(currentIndex + 1).focus();
            }
        } else {
            if (currentIndex > 0) {
                $('.box_div_error').eq(currentIndex - 1).focus();
            }
        }
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

mobileNumberInput.addEventListener('input', () => {
    isMobileNumberEditing = true;
    validateInputs();
});

panNumberInput.addEventListener('input', () => {
    isPanNumberEditing = true;
    validateInputs();

});

mobileNumberInput.addEventListener('input', () => {
    validateMobileNumber();
});

function validateMobileNumber() {
    const mobileNumberValue = mobileNumberInput.value.trim();
    const mobileNumberRegex = /^(?:(?:(?:\+|00)91)|0)?[6-9]\d{9}$/;
    const mobileNumberIsValid = mobileNumberRegex.test(mobileNumberValue);

    if (mobileNumberIsValid) {
        validationMessage_mob.textContent = "";
        validationMessage_mob.style.color = "";
        mobileNumberInput.classList.remove("error-border"); // Remove the error class
        document.getElementById("mobileNumberInput").style.border = "";
        document.getElementById("mobileNumberInput").style.backgroundColor = "#F4F7FA";
    } else {
        validationMessage_mob.textContent = "Please enter a 10 digit mobile number.";
        validationMessage_mob.style.color = "red";
        mobileNumberInput.classList.add("error-border"); // Remove the error class
        document.getElementById("mobileNumberInput").style.border = "1px solid red";
        document.getElementById("mobileNumberInput").style.backgroundColor = "#FFFAFB";

    }

    return mobileNumberIsValid;
}


function validatePanNumber() {
    const panNumberValue = panNumberInput.value.trim();
    const panNumberRegex = /^[A-Z]{5}\d{4}[A-Z]$/;
    const panNumberIsValid = panNumberRegex.test(panNumberValue);

    if (panNumberIsValid) {
        validationMessage_pan.textContent = "";
        validationMessage_pan.style.color = "";
        panNumberInput.classList.remove("error-border"); // Add the error class to the PAN input
        document.getElementById("panNumberInput").style.border = "";
        document.getElementById("panNumberInput").style.backgroundColor = "#F4F7FA";
    } else {
        validationMessage_pan.textContent = "Please enter a valid PAN.";
        validationMessage_pan.style.color = "red";
        panNumberInput.classList.add("error-border"); // Add the error class to the PAN input
        document.getElementById("panNumberInput").style.border = "1px solid red";
        document.getElementById("panNumberInput").style.backgroundColor = "#FFFAFB";


    }

    return panNumberIsValid;
}

checkbox.addEventListener('change', () => {
    validateInputs();
});

function validateInputs() {
    const mobileNumberIsValid = isMobileNumberEditing ? validateMobileNumber() : false;
    const panNumberIsValid = isPanNumberEditing ? validatePanNumber() : false;
    const isCheckboxChecked = checkbox.checked;
    submitButton.disabled = !(mobileNumberIsValid && panNumberIsValid && isCheckboxChecked);


}