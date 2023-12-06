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
function showMoreData() {
    var dataShow = document.getElementById("moreListData");
    var hideShow = document.getElementById("hideMoreBtn");
    var showShow = document.getElementById("showMoreBtn");
    dataShow.style.display = "block";
    showShow.style.display = "none";
    hideShow.style.display = "flex";
}

function hideMoreData() {
    var dataShow = document.getElementById("moreListData");
    var hideShow = document.getElementById("hideMoreBtn");
    var showShow = document.getElementById("showMoreBtn");
    dataShow.style.display = "none";
    showShow.style.display = "flex";
    hideShow.style.display = "none";
}
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

function radioButtonAction1(id) {
    var checkbox = document.getElementById(id);
    var autoRenewalText = document.getElementById("details_fixed_deposit1");
    checkbox.addEventListener("change", function () {
    autoRenewalText.style.border = checkbox.checked ? "2px solid black" : "";
    });
    var autoRenewalText2 = document.getElementById("details_fixed_deposit2");
    var autoRenewalText3 = document.getElementById("details_fixed_deposit3");
    autoRenewalText2.style.border ="2px solid white";
    autoRenewalText3.style.border ="2px solid white";
    
    
}
radioButtonAction1("radio1");

function radioButtonAction2(id) {
    var checkbox = document.getElementById(id);
    var autoRenewalText = document.getElementById("details_fixed_deposit2");
    if( checkbox.checked){
        autoRenewalText.style.border = "2px solid black"
    }else{
        autoRenewalText.style.border = "2px solid white"
    }
    // autoRenewalText.style.border = ? "2px solid black" : "2px solid white";
    checkbox.addEventListener("change", function () {
    autoRenewalText.style.border = checkbox.checked ? "2px solid black" : "2px solid white";
    });
    var autoRenewalText1 = document.getElementById("details_fixed_deposit1");
    var autoRenewalText3 = document.getElementById("details_fixed_deposit3");
    autoRenewalText1.style.border ="2px solid white";
    autoRenewalText3.style.border ="2px solid white";
    
}
radioButtonAction2("radio2");


function radioButtonAction3(id) {
    var checkbox = document.getElementById(id);
    var autoRenewalText = document.getElementById("details_fixed_deposit3");
    checkbox.addEventListener("change", function () {
    autoRenewalText.style.border = checkbox.checked ? "2px solid black" : "2px solid white";
    });
    var autoRenewalText1 = document.getElementById("details_fixed_deposit1");
    var autoRenewalText2 = document.getElementById("details_fixed_deposit2");
    autoRenewalText1.style.border ="2px solid white";
    autoRenewalText2.style.border ="2px solid white";
    
}
radioButtonAction3("radio3");
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
    if(checkedValue == ele1){
        $('#'+ele1).addClass('active');
        $('#'+ele2).removeClass('active');
    } else {
        $('#'+ele1).removeClass('active');
        $('#'+ele2).addClass('active');
    }
}

