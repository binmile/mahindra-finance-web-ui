/*****************Menu Dropdown Hover Effect Start***************/

$(document).ready(function () {
  $(".dropdown").hover(
    function () {
      $(this).addClass("show");
      $(this).find(".dropdown-menu").addClass("show");
    },
    function () {
      $(this).removeClass("show");
      $(this).find(".dropdown-menu").removeClass("show");
    }
  );
});

$("#mob_menu_download_click").click(function () {
  $("#mob_menu_download").toggleClass("show");
  $("#rotate_icon_download").toggleClass("smallRotate");
});

$("#mob_menu_profile_click").click(function () {
  $("#mob_menu_profile").toggleClass("show");
  $("#rotate_icon_profile").toggleClass("smallRotate");
});

$("#hamburgerIcon").click(function () {
  $(this).toggleClass("open");
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

/*****************FD Data show hide Start***************/
$("#homeShowBtnFD").click(function () {
  var dataShow = document.getElementById("homeShowBtnFD");
  var dataHide = document.getElementById("homeHideBtnFD");
  var dataPagination = document.getElementById("accordionFD");
  dataShow.style.display = "none";
  dataHide.style.display = "block";
  dataPagination.style.display = "block";
});
$("#homeHideBtnFD").click(function () {
  var dataShow = document.getElementById("homeShowBtnFD");
  var dataHide = document.getElementById("homeHideBtnFD");
  var dataPagination = document.getElementById("accordionFD");
  dataShow.style.display = "flex";
  dataHide.style.display = "none";
  dataPagination.style.display = "none";
});
/*****************FD Data show hide End***************/

/*****************Dashboard Toggle Switch Button Modal Start***************/
function updateKycModal(id) {
  var toggleSwitch = document.getElementById(id);
  var myModal = new bootstrap.Modal(document.getElementById("myKycModal"));
  if (toggleSwitch.checked) {
    myModal.show();
  } else {
    myModal.hide();
  }
}

/*****************Dashboard repayment-bank Modal end***************/

function repaymentContinueButtonEnable() {
  var account_number = document.getElementById("account_number").value;
  var re_enter_account_number = document.getElementById(
    "re_enter_account_number"
  ).value;
  var ifsc_code = document.getElementById("ifsc_code").value;
  var element = document.getElementById("continueButton");
  if (
    account_number !== "" &&
    ifsc_code !== "" &&
    re_enter_account_number !== ""
  ) {
    element.disabled = false;
  } else {
    element.disabled = true;
  }
}
/*********************renewal-form-start-************/
function renewalformContinueButtonEnable() {
  var nomineeValue = document.getElementById("nominee_value").value;
  var nomineeName = document.getElementById("name").value;
  var nomineeDOB = document.getElementById("nominee_DOB").value;
  var nomineeRelation = document.getElementById("nominee_relation").value;
  var allFieldsFilled = nomineeValue !== "add-new" || nomineeName !== "";
  var allFieldsFilled2 = nomineeDOB !== "" && nomineeRelation !== "";
  var continueButton = document.getElementById("continueButton");
  continueButton.disabled = !allFieldsFilled || !allFieldsFilled2;
}

function toggleSecondColumn(elementId, targetValue, nomineevalue) {
  var selectValue = $(nomineevalue).val();
  var element = $(elementId);
  if (selectValue === targetValue) {
    element.show();
  } else {
    element.hide();
  }
}
/*********************renewal-form-end-************/

/***************profile-page-validation-start-BMT-147*******************/

function validateMobileInputs(mobileId, newMobileId) {
  var mobileNumber = document.getElementById(mobileId).value;
  var newMobileNumber = document.getElementById(newMobileId).value;
  var continueButton = document.getElementById("continueButton");
  mobileNumber = mobileNumber.slice(0, 10);
  newMobileNumber = newMobileNumber.slice(0, 10);
  document.getElementById(mobileId).value = mobileNumber;
  document.getElementById(newMobileId).value = newMobileNumber;
  if (
    isValidMobileNumber(mobileNumber) &&
    isValidMobileNumber(newMobileNumber)
  ) {
    continueButton.disabled = false;
  } else {
    continueButton.disabled = true;
  }
}
function isValidMobileNumber(number) {
  return number.length === 10;
}
function validatePasswordInputs(passwordID, newPasswordID, reEnterPasswordID) {
  var passwordField = document.getElementById(passwordID);
  var newPasswordField = document.getElementById(newPasswordID);
  var reEnterPasswordField = document.getElementById(reEnterPasswordID);
  var continueButton = document.getElementById("continueButton");
  if (
    passwordField.value !== "" &&
    newPasswordField.value !== "" &&
    reEnterPasswordField.value !== ""
  ) {
    if (newPasswordField.value === reEnterPasswordField.value) {
      continueButton.disabled = false;
      newPasswordField.style.border = "1px solid #ccc";
      reEnterPasswordField.style.border = "1px solid #ccc";
    } else {
      continueButton.disabled = true;
      newPasswordField.style.border = "1px solid #ccc";
      reEnterPasswordField.style.border = "1px solid #ff0000";
    }
  } else {
    continueButton.disabled = true;
  }
}
function validateForgotPassword(newPasswordID, reEnterPasswordID) {
  var newPasswordField = document.getElementById(newPasswordID);
  var reEnterPasswordField = document.getElementById(reEnterPasswordID);
  var continueButton = document.getElementById("continueButton");
  if (newPasswordField.value !== "" && reEnterPasswordField.value !== "") {
    if (newPasswordField.value === reEnterPasswordField.value) {
      continueButton.disabled = false;
      newPasswordField.style.border = "1px solid #ccc";
      reEnterPasswordField.style.border = "1px solid #ccc";
    } else {
      continueButton.disabled = true;
      newPasswordField.style.border = "1px solid #ccc";
      reEnterPasswordField.style.border = "1px solid #ff0000";
    }
  } else {
    continueButton.disabled = true;
  }
}

function validateEmailInputs(emailID, newemailID) {
  var email_data, newEmail, continueButton;
  if (arguments.length === 1) {
    email_data = document.getElementById(emailID);
    continueButton = document.getElementById("continueButton");
  } else if (arguments.length === 2) {
    email_data = document.getElementById(emailID);
    newEmail = document.getElementById(newemailID);
    continueButton = document.getElementById("continueButton");
  } else {
    return;
  }

  var emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (
    email_data.value !== "" &&
    (!newEmail ||
      (newEmail.value !== "" && emailFormat.test(newEmail.value))) &&
    emailFormat.test(email_data.value)
  ) {
    continueButton.disabled = false;
    email_data.style.border = "1px solid #ccc";
    if (newEmail) {
      newEmail.style.border = "1px solid #ccc";
    }
  } else {
    continueButton.disabled = true;
    if (email_data.value !== "" && !emailFormat.test(email_data.value)) {
      email_data.style.border = "1px solid #ff0000";
    } else {
      email_data.style.border = "1px solid #ccc";
    }
    if (newEmail) {
      if (newEmail.value !== "" && !emailFormat.test(newEmail.value)) {
        newEmail.style.border = "1px solid #ff0000";
      } else {
        newEmail.style.border = "1px solid #ccc";
      }
    }
  }
}
function validatePanInputs(panNumberId) {
  var panNumberId_res = document.getElementById(panNumberId);
  continueButton = document.getElementById("continueButton");
  const panNumberValue = panNumberId_res.value.trim();
  const panNumberRegex = /^[A-Z]{5}\d{4}[A-Z]$/;
  const panNumberIsValid = panNumberRegex.test(panNumberValue);
  if (panNumberValue !== "" && panNumberIsValid) {
    continueButton.disabled = false;
  } else {
    continueButton.disabled = true;
  }
  return panNumberIsValid;
}
/******manage-bank-toggle-start */
function bank_toggle_bank(id) {
  var bank_select = document.getElementById(id);
  var continueButton = document.getElementById("continueButton");
  var bank_details_data = document.getElementById("bank_details");
  if (bank_select.value === "add-new-bank") {
    continueButton.disabled = false;
    bank_details_data.style.display = "none";
  } else if (bank_select.value === "bank_value") {
    continueButton.disabled = false;
    bank_details_data.style.display = "block";
  } else {
    continueButton.disabled = true;
    bank_details_data.style.display = "none";
  }
}
function bank_toggle_add(id, data){
  var bank_select = document.getElementById(id);
  var data_id = document.getElementById(data);
  if (bank_select.value === "ICICI_bank") {
    data_id.style.display="block"
  }
  else{
    data_id.style.display="none"
  }
}
/******manage-bank-toggle-end */

/******manage-nominee-toggle-start */
function bank_toggle_nominee(id) {
  var bank_select = document.getElementById(id);
  var continueButton = document.getElementById("continueButton_");
  var bank_details_data = document.getElementById("bank_details");

  if (bank_select.value === "add-new-nominee") {
    continueButton.disabled = false;
    bank_details_data.style.display = "none";
  } else if (bank_select.value === "nominee_data") {
    continueButton.disabled = false;
    bank_details_data.style.display = "block";
  } else {
    continueButton.disabled = true;
    bank_details_data.style.display = "none";
  }
}
function navigateToDetailsPage() {
  const continueButton_bank = document.getElementById("continueButton");
  const continueButton = document.getElementById("continueButton_");
  if (continueButton && !continueButton.disabled) {
    window.location.href = "renewal-form.html";
  } else if (continueButton_bank && !continueButton_bank.disabled) {
    window.location.href = "profile-add-new-bank-details.html";
  } else {
    alert("Please enable the button to proceed.");
  }
}
/******manage-nominee-toggle-end */

function togglePasswordVisibility(passwordId, closeEyesIconId, openEyesIconId) {
  var passwordInput = document.getElementById(passwordId);
  var closeEyesIcon = document.getElementById(closeEyesIconId);
  var openEyesIcon = document.getElementById(openEyesIconId);
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    closeEyesIcon.style.display = "none";
    openEyesIcon.style.display = "inline-block";
  } else {
    passwordInput.type = "password";
    closeEyesIcon.style.display = "inline-block";
    openEyesIcon.style.display = "none";
  }
}

/***************profile-page-validation-end*******************/
/*****************radio button BMT-265 start******************/
function radioButtonAction(id, element) {
  var checkbox = document.getElementById(id);
  var radioButton = document.getElementById(element);
  radioButton.style.border = checkbox.checked ? "1px solid black" : " ";
  checkbox.addEventListener("change", function () {
    radioButton.style.border = checkbox.checked ? "1px solid black" : " ";
  });
  var radioButton1 = document.getElementById("details_fixed_deposit1");
  var radioButton3 = document.getElementById("details_fixed_deposit3");
  var radioButton2 = document.getElementById("details_fixed_deposit2");
  radioButton1.style.border = "1px solid white";
  radioButton3.style.border = "1px solid white";
  radioButton2.style.border = "1px solid white";
}
/*****************radio button BMT-265 end******************/

/*****************terms and condition checkbbox BMT-265 ******************/
function checkboxTandC(id) {
  var radio = document.getElementById(id);
  var element = document.getElementById("continueButton");
  if (radio.checked) {
    element.disabled = false;
  } else {
    element.disabled = true;
  }
}

function enableButton() {
  document.getElementById("myButton").disabled = false;
}
/*****************additional-js-start ******************/

function showContentAdd(clickedBtn, yesBtn, noBtn, content_div) {
  var yesBtnId = document.getElementById(yesBtn);
  var noBtn = document.getElementById(noBtn);
  var otherContentDiv = document.getElementById(content_div);
  var otherContentDiv_second = document.getElementById("content_add_");

  yesBtnId.classList.remove("check_btn_add");
  noBtn.classList.remove("check_btn_add");

  clickedBtn.classList.add("check_btn_add");
  if (clickedBtn.id === "yesBtn") {
    otherContentDiv.style.display = "block";

  } else if (clickedBtn.id === "nomineeyes") {
    otherContentDiv.style.display = "block";
    otherContentDiv_second.style.display = "none";

  } else {
    otherContentDiv.style.display = "none";
    otherContentDiv_second.style.display = "block";
  }
}

/*****************additional-js-end ******************/
/******repayment-js-start------------------- */
$('.showSingle').click(function () {
  $('.customepayment').hide();
  $('.showSingle').removeClass('greenactive');
  $(this).addClass("greenactive")
  $('#div' + $(this).attr('target')).show();
});
/********repayment-js-end-here************** */
/*****************open sucess toast BMT-265 ******************/
function openSucessToast() {
  var element = document.getElementById("sucessToastMessage");
  element.classList.add("show");
  setTimeout(function () {
    element.classList.remove("show");
  }, 4000);
}
/*****************body toggle BMT-147 ******************/
function toggle_data_dashboard(onclickId, elementId) {
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
      var activeData = $(this).attr("data-tenure");
      $("#" + activeData).addClass("active");
      var result = $(this).val();
    } else {
      var activeData = $(this).attr("data-tenure");
      $("#" + activeData).removeClass("active");
    }
  });
});

$("#quickActionElements1 :input").click(function () {
  $("#quickActionElements1 :input").each(function () {
    if ($(this).is(":checked")) {
      var activeData = $(this).attr("data-tenure");
      $("#" + activeData).addClass("active");
      var result = $(this).val();
    } else {
      var activeData = $(this).attr("data-tenure");
      $("#" + activeData).removeClass("active");
    }
  });
});

$("#quickActionElements2 :input").click(function () {
  $("#quickActionElements2 :input").each(function () {
    if ($(this).is(":checked")) {
      var activeData = $(this).attr("data-tenure");
      $("#" + activeData).addClass("active");
      var result = $(this).val();
    } else {
      var activeData = $(this).attr("data-tenure");
      $("#" + activeData).removeClass("active");
    }
  });
});
/*****************Quick Action Box Select End***************/

function handleClickRadio(ele1, ele2) {
  var checkedValue = document.querySelector(
    'input[name="preclosure-flow"]:checked'
  ).value;
  if (checkedValue == ele1) {
    $("#" + ele1).addClass("active");
    $("#" + ele2).removeClass("active");
  } else {
    $("#" + ele1).removeClass("active");
    $("#" + ele2).addClass("active");
  }
}

/*************************OTP Modal Start******************************/

function handleClickModal(modalId) {
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

document.addEventListener("DOMContentLoaded", function () {
  const timerElement = document.getElementById("timer");
  const resultElement = document.getElementById("resend_otp");
  function startTimer(duration, display) {
    let timer = duration;
    let minutes, seconds;
    let interval = setInterval(function () {
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
  resultElement.addEventListener("click", function () {
    resultElement.classList.add("disabled");
    resultElement.disabled = true;
    startTimer(59, timerElement);
  });
  startTimer(59, timerElement);
});

/*************************OTP Timer End******************************/

function selectRadio(event, className) {
  const target = event.target;
  const radioContainer = target.closest("." + className);
  if (radioContainer) {
    const radioInput = radioContainer.querySelector('input[type="radio"]');
    if (radioInput) {
      radioInput.click();
    }
  }
}

/*****************quick-actions BMT-147 ******************/
function toggleButton(activate) {
  var button = document.getElementById("actionButton");

  if (activate) {
    button.classList.add("active");
    button.removeAttribute("disabled");
  } else {
    button.classList.remove("active");
    button.setAttribute("disabled", "disabled");
  }
}

function handleClickShowQuickAction() {
  var showBox = document.getElementById("quick_action_container");
  var overlay = document.getElementById("overlay");
  showBox.classList.add("show");
  overlay.classList.add("show");
}

function handleClickHideQuickAction() {
  var showBox = document.getElementById("quick_action_container");
  var overlay = document.getElementById("overlay");
  showBox.classList.remove("show");
  overlay.classList.remove("show");
}

/*****************quick-actions BMT-147 ******************/

function validateAmount(id, error_id, limitAmount) {
  var account_number = document.getElementById(id).value;
  if (account_number < limitAmount) {
    document.getElementById(id).style.border = "1px solid #E31837";
    document.getElementById(error_id).style.color = "#E31837";
  } else {
    document.getElementById(id).style.border = "1px solid #ced4da";
    document.getElementById(error_id).style.color = "#6B7280";
  }
}
