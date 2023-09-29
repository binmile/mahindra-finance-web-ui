const divContainer = document.querySelector('#main')
let isClicked = false;
var radioValue = '';

function myFun(event) {
    if (isClicked) {
        divContainer.style.diplay = 'none';
        isClicked = true;
    } else {
        isClicked = false;
        divContainer.style.display = 'block';
        myFunction(event);
    }
}

$("#tenureEements :input").click(function () {
    $("#tenureEements :input").each(function () {
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

$("#tenureEement :input").click(function () {
    $("#tenureEement :input").each(function () {
        if ($(this).is(":checked")) {
            var activeData = $(this).attr('data-tenures');
            $('#' + activeData).addClass('active');
            var result = $(this).val();
        } else {
            var activeData = $(this).attr('data-tenures');
            $('#' + activeData).removeClass('active');
        }
    });
});

$("#accountholder_invester :input").click(function () {
    $("#accountholder_invester :input").each(function () {
        if ($(this).is(":checked")) {
            var activeData = $(this).attr('data-tenures');
            $('#' + activeData).addClass('active');

            var result = $(this).val();

        } else {
            var activeData = $(this).attr('data-tenures');
            $('#' + activeData).removeClass('active');
        }
    });
});

$("#join_accountholder_invester :input").click(function () {
    $("#join_accountholder_invester :input").each(function () {
        if ($(this).is(":checked")) {
            var activeData = $(this).attr('data-tenures');
            $('#' + activeData).addClass('active');

            var result = $(this).val();

        } else {
            var activeData = $(this).attr('data-tenures');
            $('#' + activeData).removeClass('active');
        }
    });
});

$(".nominee_invester :input").click(function () {
    $(".nominee_invester :input").each(function () {
        if ($(this).is(":checked")) {
            var activeData = $(this).attr('data-tenures');
            $('#' + activeData).addClass('active');

            var result = $(this).val();

        } else {
            var activeData = $(this).attr('data-tenures');
            $('#' + activeData).removeClass('active');
        }
    });
});

function checkBox_renewal() {
    var ischecked = document.getElementById("reviewFlexCheckDefault");
    var element = document.getElementById("reviewContinueButton");
    if (ischecked) {
        element.classList.remove("disabled");
        element.classList.add("continueButtonEnable");
    } else {
        element.classList.add("disabled");
        element.classList.remove("continueButtonEnable");
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

//  for naviagtion from fd page to addtional page
function redirectPage() {
    if (document.getElementById('invstment')) {
        if (document.getElementById('invstment').style.display == 'none') {
            document.getElementById('invstment').style.display = 'block';
            document.getElementById('additionalDetailParent').style.display = 'none';
        } else {
            document.getElementById('invstment').style.display = 'none';
            document.getElementById('additionalDetailParent').style.display = 'block';



        }
    }
}

/* 27 sept 2023 new-update investement-new-features-added */

function show1() {
    document.getElementById('div1').style.display = 'block';
    document.getElementById('nomineedropdownid').style.display = 'block';


}
/* 27 sept 2023 new-update investement-new-features-added */

function show2() {
    document.getElementById('div1').style.display = 'none';
    document.getElementById('nomineedropdownid').style.display = 'none';

}

function accountshow1() {
    document.getElementById('holder1').style.display = 'block';
    document.getElementById('addnewdrop').style.display = 'block';


}

function accountshow2() {
    document.getElementById('holder1').style.display = 'none';
    document.getElementById('addnewdrop').style.display = 'none';

}

//  add comma on amount field
function formatAmount(input) {
    let value = input.value.replace(/,/g, '');
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    input.value = value;
}

//* 28 sept 2023 new-updatead joint scroll-to-top added*/

function validate_continue() {
    var amount = parseInt(document.getElementById("amountNo").value.replace(/,/g, ''));
    if (amount < 10000 || amount > 20000000 || amount === "") {
        document.getElementById("error_account_number").style.color = "red";
        document.getElementById("amountNo").style.border = "1px solid red";
    } else if (!/^\d+$/.test(amount)) {
        document.getElementById("error_account_number").style.color = "red";
        document.getElementById("amountNo").style.border = "1px solid red";
    } else {
        document.getElementById("error_account_number").style.color = "black";
        document.getElementById("amountNo").style.border = "";
        redirectPage();
        scrollToTop();
        document.getElementById("reviewContinueButton").addEventListener("click", function () {
            scrollToTop();
        });

    }
}

function scrollToTop() {
    const content = document.querySelector(".investmentParent");
    if (content) {
        content.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }
}
window.addEventListener("load", scrollToTop);


// validation on addtional page on Generate otp button
function generateOtp() {
    var mobileNumber = document.getElementById("mobile").value;
    var panNumber = document.getElementById("PAN").value;

    var mobilePattern = /^(?:(?:(?:\+|00)91)|0)?[6-9]\d{9}$/;
    var panPattern = /^[A-Z]{5}\d{4}[A-Z]$/;

    const err_mobileNo = document.getElementById('error-message');
    const err_PANnumber = document.getElementById('error-message_pan');

    if (mobileNumber === "") {
        document.getElementById("mobile").style.border = "1px solid red";
        err_mobileNo.textContent = "Please enter a mobile number.";
    } else
        if (!mobilePattern.test(mobileNumber)) {
            document.getElementById("mobile").style.border = "1px solid red";
            err_mobileNo.textContent = "Invalid mobile number.";
        } else {
            document.getElementById("mobile").style.border = "";
            err_mobileNo.textContent = "";
        }

    if (panNumber === "") {
        document.getElementById("PAN").style.border = "1px solid red";
        err_PANnumber.textContent = "Please enter a pan number.";
    } else
        if (!panPattern.test(panNumber)) {
            document.getElementById("PAN").style.border = "1px solid red";
            err_PANnumber.textContent = "Invalid pan number.";
        } else {
            document.getElementById("PAN").style.border = "";
            err_PANnumber.textContent = "";
        }
}
//backRedirect

function backClick() {
    if (document.getElementById('invstment')) {
        if (document.getElementById('invstment').style.display == 'block') {
            document.getElementById('invstment').style.display = 'none';
            document.getElementById('additionalDetailParent').style.display = 'block';
        } else {
            document.getElementById('invstment').style.display = 'block';
            document.getElementById('additionalDetailParent').style.display = 'none';
        }
    }

}

/* 27 sept 2023 new-updatead joint account holder if yes then*/

document.addEventListener("DOMContentLoaded", function () {
    const accountNew = document.getElementById("accountNew");
    const mobileInput = document.getElementById("mobile");
    const panInput = document.getElementById("PAN");
    var container = document.querySelector(".Continue_button_container_investment");
    // Add an event listener to the select dropdown
    accountNew.addEventListener("change", function () {
        const selectedOption = accountNew.value;
        if (selectedOption === "Sudhir Rana") {
            // Fill the input fields with hardcoded data
            mobileInput.value = "6789097856";
            panInput.value = "ABCDE1234F";

            container.style.display = "none";


        } else {
            // Clear the input fields
            mobileInput.value = "";
            panInput.value = "";
            container.style.display = "block";
        }
    });
});



// validation on addtional page on kyc button
function KYC_registery() {
    var nomineeName = document.getElementById("nomineeName").value;
    var nominee_DOB = document.getElementById("nominee_DOB").value;
    var nomenieeRelation = document.getElementById("nomenieeRelation").value;
    const err_nomineeName = document.getElementById('error-message_nomenieeName');
    const err_nominee_DOB = document.getElementById('error-message_nomenieeDOB');
    const err_nomenieeRelation = document.getElementById('error-message_nomenieeRelation');
    const namePattern = /^[A-Za-z\s]+$/;
    if (nomineeName === "") {
        document.getElementById("nomineeName").style.border = "1px solid red";
        err_nomineeName.textContent = "Please enter a nominee name.";

    } else
        if (!namePattern.test(nomineeName)) {
            document.getElementById("nomineeName").style.border = "1px solid red";
            err_nomineeName.textContent = "Please enter a valid name.";

        } else {
            document.getElementById("nomineeName").style.border = "";
            err_nomineeName.textContent = "";

        }

    if (nominee_DOB === "") {
        document.getElementById("nominee_DOB").style.border = "1px solid red";
        err_nominee_DOB.textContent = "Please enter a nominee dob.";

    } else {
        document.getElementById("nominee_DOB").style.border = "";
        err_nominee_DOB.textContent = "";

    }
    if (nomenieeRelation === "") {
        document.getElementById("nomenieeRelation").style.border = "1px solid red";
        err_nomenieeRelation.textContent = "Please select a nominee relation."
    } else {
        document.getElementById("nomenieeRelation").style.border = "";
        err_nomenieeRelation.textContent = ""

    }
}

//  for show calender onClick
const inputDate = document.getElementById("inputId");
inputDate.addEventListener("focus", function (evt) {
    if (this.getAttribute("type") === "date") {
        this.showPicker();
    }
});