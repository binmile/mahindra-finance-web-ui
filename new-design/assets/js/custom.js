window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title:{
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

      function updateKycModal(id) {
        var toggleSwitch = document.getElementById(id);
        var myModal = new bootstrap.Modal(document.getElementById("myModal"));

        toggleSwitch.addEventListener("change", function() {
            if (toggleSwitch.checked) {
                myModal.show();
            } else {
                myModal.hide();
            }
        });
    }

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