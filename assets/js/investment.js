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

