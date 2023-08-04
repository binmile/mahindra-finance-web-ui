const divContainer = document.querySelector('#main')
let isClicked = false;
var radioValue = '';

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


$("#tenureEements :input").click(function () {
    $("#tenureEements :input").each(function () {
        if ($(this).is(":checked")) {
            var activeData = $(this).attr('data-tenure');
            $('#' + activeData).addClass('active');
            var result = $(this).val();
            handleValue(result);
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
    document.getElementById('div1').style.display ='block';
  }
  function show2(){
    document.getElementById('div1').style.display = 'none';
  } 


  function accountshow1(){
    document.getElementById('holder1').style.display ='block';
  }
  function accountshow2(){
    document.getElementById('holder1').style.display = 'none';
  }


  function validate_account() {
    var amount = parseInt(document.getElementById("amountNo").value);
    // var tenureValue = document.querySelector('input[name="tenure"]:checked').value;
    // var interestEementValue = document.querySelector('input[name="interest"]:checked').value;
    
    if (amount < 10000 || amount > 50000000 || amount ==="") {
        document.getElementById("error_account_number").style.color = "red";
        document.getElementById("amountNo").style.border = "1px solid red";
    } 
    else {
        document.getElementById("error_account_number").style.color = "black";
        document.getElementById("amountNo").style.border = "";
        redirectPage();
    }
    

}

function handleValue(value){
    console.log("receid value is :" , value);
    return value;
}




const inputDate = document.getElementById("inputId");

inputDate.addEventListener("focus",function (evt) {
  if (this.getAttribute("type")==="date") {
    this.showPicker();
  }
});