const divContainer = document.querySelector('#main')
let isClicked = false;

function myFun(event){

    if(isClicked){
        divContainer.style.diplay = 'none';
       isClicked = true;
    }
    else{
        isClicked = false;
        divContainer.style.display = 'block';
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



function redirectPage() {
    if (document.getElementById('invstment')) {

        if (document.getElementById('invstment').style.display == 'none') {
            document.getElementById('invstment').style.display = 'block';
            document.getElementById('additionalDetailParent').style.display = 'none';
        }
        else {
            document.getElementById('invstment').style.display = 'none';
            document.getElementById('additionalDetailParent').style.display = 'block';
        }
    }
}


function show1(){
    document.getElementById('div1').style.display ='none';
  }
  function show2(){
    document.getElementById('div1').style.display = 'block';
  }






  function validate_account() {
    var amount = document.getElementById("amount").value;
    // var re_enter_account_number = document.getElementById("re_enter_account_number").value;
    // var ifsc_code = document.getElementById("ifsc_code").value;
    if (amount < 10000 || amount === "") {
        document.getElementById("error_account_number").style.display = "block";
        document.getElementById("account_number").style.border = "1px solid red";
    } else {
        document.getElementById("error_account_number").style.display = "none";
        document.getElementById("account_number").style.border = "";
    }
    // if (re_enter_account_number !== account_number || re_enter_account_number === "") {
    //     document.getElementById("error_re_enter_account_number").style.display = "block";
    //     document.getElementById("re_enter_account_number").style.border = "1px solid red";
    // } else {
    //     document.getElementById("error_re_enter_account_number").style.display = "none";
    //     document.getElementById("re_enter_account_number").style.border = "";
    // }
    // if (ifsc_code === "") {
    //     document.getElementById("error_ifsc_code").style.display = "block";
    //     document.getElementById("ifsc_code").style.border = "1px solid red";
    // } else {
    //     document.getElementById("error_ifsc_code").style.display = "none";
    //     document.getElementById("ifsc_code").style.border = "";
    // }
}