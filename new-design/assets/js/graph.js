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