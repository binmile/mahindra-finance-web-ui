/*****************Graph Start***************/
window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "Growth chart"
        },
        axisY: {
            title: "",
            valueFormatString: "#0,,.",
            suffix: "k",
            prefix: "₹"
        },
        data: [{
            type: "splineArea",
            color: "rgba(34, 197, 94, 1)",
            markerSize: 5,
            xValueFormatString: "YYYY",
            yValueFormatString: "₹#,##0.##",
            dataPoints: [
                { x: new Date(2000, 0), y: 55000 },
                { x: new Date(2001, 0), y: 70000 },
                { x: new Date(2002, 0), y: 73605 }
            ]
        }]
    });
    chart.render();
}
/*****************Graph End***************/
/*****************Menu Dropdown Hover Effect Start***************/
$(document).ready(function () {
    $('.dropdown').hover(function () {
        $(this).addClass('show');
        $(this).find('.dropdown-menu').addClass('show');
    }, function () {
        $(this).removeClass('show');
        $(this).find('.dropdown-menu').removeClass('show');
    });
});
/*****************Menu Dropdown Hover Effect End***************/

/*****************Dashboard Data show hide Start***************/
$("#homeShowBtn").click(function () {
    var dataShow = document.getElementById("homeShowBtn");
    var dataHide = document.getElementById("homeHideBtn");
    var dataPagination = document.getElementById("customPagination");
    dataShow.style.display = "none";
    dataHide.style.display = "flex";
    dataPagination.style.display = "flex";
});
$("#homeHideBtn").click(function () {
    var dataShow = document.getElementById("homeShowBtn");
    var dataHide = document.getElementById("homeHideBtn");
    var dataPagination = document.getElementById("customPagination");
    dataShow.style.display = "flex";
    dataHide.style.display = "none";
    dataPagination.style.display = "none";
});
/*****************Dashboard Data show hide End***************/

/*****************Dashboard Toggle Switch Button Modal Start***************/
function updateKycModal(id) {
    var toggleSwitch = document.getElementById(id);
    var myModal = new bootstrap.Modal(document.getElementById("myModal"));
    toggleSwitch.addEventListener("change", function () {
        if (toggleSwitch.checked) {
            myModal.show();

        } else {
            myModal.hide();
        }
    });
}

/*****************Dashboard repayment-bank Modal Start***************/
function repaymentSubmitModal() {
    var myModal = new bootstrap.Modal(document.getElementById("myModal"));
    myModal.show();
}
/*****************Dashboard repayment-bank Modal end***************/

function repaymentContinueButtonEnable() {
    var account_number = document.getElementById("account_number").value;
    var re_enter_account_number = document.getElementById("re_enter_account_number").value;
    var ifsc_code = document.getElementById("ifsc_code").value;
    var element = document.getElementById("continueButton");
    if (account_number !== '' &&  ifsc_code !== '' && re_enter_account_number !== '') {
        element.disabled = false
    } else {
        element.disabled = true
    }

}

/*****************radio button BMT-265 start******************/
function radioButtonAction(id,element) {
    var checkbox = document.getElementById(id);
    var radioButton = document.getElementById(element);
    radioButton.style.border = checkbox.checked ? "1px solid black" : " ";
    checkbox.addEventListener("change", function () {
        radioButton.style.border = checkbox.checked ? "1px solid black" : " ";
    });
    var radioButton1 = document.getElementById("details_fixed_deposit1");
    var radioButton3 = document.getElementById("details_fixed_deposit3");
    var radioButton2 = document.getElementById("details_fixed_deposit2");
    radioButton1.style.border ="1px solid white";
    radioButton3.style.border ="1px solid white";
    radioButton2.style.border ="1px solid white";
}
/*****************radio button BMT-265 end******************/

/*****************body toggle BMT-147 ******************/
 function toggle_data_dashboard(onclickId,elementId) {
    let checkbox = document.getElementById(onclickId);
    let autoRenewalText = document.getElementById(elementId);
    autoRenewalText.style.color = checkbox.checked ? "#17823E" : "#6B7280";
    checkbox.addEventListener("change", function () {
        autoRenewalText.style.color = checkbox.checked ? "#17823E" : "#6B7280";
    });
}
/*****************body End ******************/


/*****************Dashboard Toggle Switch Button Modal End***************/

/*****************Quick Action Box Select Start***************/
$("#quickActionElements :input").click(function () {
    $("#quickActionElements :input").each(function () {
        if ($(this).is(":checked")) {
            var activeData = $(this).attr('data-tenure');
            $('#' + activeData).addClass('active');
            var result = $(this).val();
        } else {
            var activeData = $(this).attr('data-tenure');
            $('#' + activeData).removeClass('active');
        }
    });
});
/*****************Quick Action Box Select End***************/

function handleClickRadio(ele1, ele2) {
    var checkedValue = document.querySelector('input[name="preclosure-flow"]:checked').value;
    if (checkedValue == ele1) {
        $('#' + ele1).addClass('active');
        $('#' + ele2).removeClass('active');
    } else {
        $('#' + ele1).removeClass('active');
        $('#' + ele2).addClass('active');
    }
}

/*************************OTP Modal Start******************************/

function handleClickModal(modalId){
    var myModal = new bootstrap.Modal(document.getElementById(modalId));
    myModal.show();
}

const inputs = document.getElementById("inputs");
inputs.addEventListener("input", function (e) {
    const target = e.target;
    const val = target.value;
    if (isNaN(val)) {
        target.value = "";
        return;
    }
    if (val != "") {
        const next = target.nextElementSibling;
        if (next) {
            next.focus();
        }
    }
});
inputs.addEventListener("keyup", function (e) {
    const target = e.target;
    const key = e.key.toLowerCase();
    if (key == "backspace" || key == "delete") {
        target.value = "";
        const prev = target.previousElementSibling;
        if (prev) {
            prev.focus();
        }
        return;
    }
});

/*************************OTP Modal End******************************/

/*************************OTP Timer Start******************************/

document.addEventListener("DOMContentLoaded", function() {
    const timerElement = document.getElementById("timer");
    const resultElement = document.getElementById("resend_otp");
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
                showResendButton();
            }
        }, 1000);
    }

    function showResendButton() {
        resultElement.classList.remove("disabled");
        resultElement.disabled = false;
    }
    resultElement.addEventListener("click", function() {
        resultElement.classList.add("disabled");
        resultElement.disabled = true;
        startTimer(59, timerElement);
    });
    startTimer(59, timerElement);
});

/*************************OTP Timer End******************************/

 function selectRadio(event, className) {
    const target = event.target;
    const radioContainer = target.closest('.'+className);
    if (radioContainer) {
      const radioInput = radioContainer.querySelector('input[type="radio"]');
      if (radioInput) {
        radioInput.click();
      }
    }
  }


  /*****************quick-actions BMT-147 ******************/
function toggleButton(activate) {
    var button = document.getElementById('actionButton');

    if (activate) {
        button.classList.add('active');
        button.removeAttribute('disabled');
    } else {
        button.classList.remove('active');
        button.setAttribute('disabled', 'disabled');
    }
}


function toggleWrapper() {
    var wrapper = document.getElementById('cardContainer_mobile_view_');
    wrapper.classList.toggle('show');
}

document.addEventListener('click', function (event) {
    var wrapper = document.getElementById('cardContainer_mobile_view_');
    if (!wrapper.contains(event.target) && !document.getElementById('quick_actions_button_').contains(event.target)) {
        wrapper.classList.remove('show');
    }
});
function toggleClose() {
    var wrapper = document.getElementById('cardContainer_mobile_view_');
    wrapper.classList.remove('show');
}

/*****************quick-actions BMT-147 ******************/