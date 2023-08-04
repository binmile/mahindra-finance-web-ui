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

function validateMobileNumber(mobileNumber) {
    const mobileNumberRegex = /^(?:(?:(?:\+|00)91)|0)?[6-9]\d{9}$/;
    return mobileNumberRegex.test(mobileNumber);
}

function validatePanNumber(panNumber) {
    const panNumberRegex = /^[A-Z]{5}\d{4}[A-Z]$/;
    return panNumberRegex.test(panNumber);
}

function validate_form() {
    var mobileNumberInput = document.getElementById("mobileNumberInput").value.trim();
    var panNumberInput = document.getElementById("panNumberInput").value.trim();
    console.log(mobileNumberInput, "mobileNumberInput");

    const mobileNumberIsValid = validateMobileNumber(mobileNumberInput);
    const panNumberIsValid = validatePanNumber(panNumberInput);

    if (mobileNumberInput === "") {
        document.getElementById("error_mobile_number_empty").style.display = "block";
        document.getElementById("error_mobile_number_not_valid").style.display = "none";
        document.getElementById("mobileNumberInput").style.border = "1px solid red";
        document.getElementById("mobileNumberInput").style.background = "#FFFAFB";
    } else if (!mobileNumberIsValid) {
        document.getElementById("error_mobile_number_not_valid").style.display = "block";
        document.getElementById("error_mobile_number_empty").style.display = "none";
        document.getElementById("mobileNumberInput").style.border = "1px solid red";
        document.getElementById("mobileNumberInput").style.background = "#FFFAFB";

    } else {
        document.getElementById("error_mobile_number_not_valid").style.display = "none";
        document.getElementById("error_mobile_number_empty").style.display = "none";
        document.getElementById("mobileNumberInput").style.border = "";
        document.getElementById("mobileNumberInput").style.background = "";

    }


    if (panNumberInput === "") {
        document.getElementById("error_pan_number_empty").style.display = "block";
        document.getElementById("error_pan_number_not_valid").style.display = "none";
        document.getElementById("panNumberInput").style.border = "1px solid red";
        document.getElementById("panNumberInput").style.background = "#FFFAFB";

    } else if (!panNumberIsValid) {
        document.getElementById("error_pan_number_not_valid").style.display = "block";
        document.getElementById("error_pan_number_empty").style.display = "none";
        document.getElementById("panNumberInput").style.border = "1px solid red";
        document.getElementById("panNumberInput").style.background = "#FFFAFB";

    } else {
        document.getElementById("error_pan_number_not_valid").style.display = "none";
        document.getElementById("error_pan_number_empty").style.display = "none";
        document.getElementById("panNumberInput").style.border = "";
        document.getElementById("panNumberInput").style.background = "";
    }
    if (mobileNumberIsValid && panNumberIsValid) {
        $(document).ready(function() {
            $('#submitButton').click(function() {
                $('#exampleModal').modal('show');

            });
        });
    }

}

function checkBox() {
    var ischecked = document.getElementById("flexCheckDefault").checked;
    var element = document.getElementById("submitButton");
    if (ischecked) {
        element.classList.remove("disabled");
        element.removeAttribute("disabled");
    } else {
        element.classList.add("disabled");
        element.setAttribute("disabled", "disabled");
    }
}