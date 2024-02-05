const ctx = document.getElementById('myChart').getContext('2d');
// const DISPLAY = true;
// const BORDER = true;
// const CHART_AREA = true;
// const TICKS = true;
/***********************tooltip Start*******************************/
const getOrCreateTooltip = (chart) => {
  let tooltipEl = chart.canvas.parentNode.querySelector('div');

  if (!tooltipEl) {
    tooltipEl = document.createElement('div');
    tooltipEl.style.background = 'rgba(255, 255, 255, 1)';
    tooltipEl.style.borderRadius = '6px';
    tooltipEl.style.color = '#6B7280';
    tooltipEl.style.opacity = 1;
    tooltipEl.style.pointerEvents = 'none';
    tooltipEl.style.position = 'absolute';
    tooltipEl.style.transform = 'translate(-50%, -66px)';
    tooltipEl.style.transition = 'all .1s ease';
    tooltipEl.style.border = '1.28px solid #F9F9F9';
    tooltipEl.style.boxShadow = '0px 1px 2px 0px #0000000F, 0px 1px 3px 0px #0000001A';

    const table = document.createElement('table');
    table.style.margin = '0px';

    tooltipEl.appendChild(table);
    chart.canvas.parentNode.appendChild(tooltipEl);
  }

  return tooltipEl;
};

const externalTooltipHandler = (context) => {
  const {chart, tooltip} = context;
  const tooltipEl = getOrCreateTooltip(chart);
  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = 0;
    return;
  }

  if (tooltip.body) {
    const titleLines = tooltip.title || [];
    const bodyLines = tooltip.body.map(b => b.lines);

    const tableHead = document.createElement('thead');

    titleLines.forEach(title => {
      const tr = document.createElement('tr');
      tr.style.borderWidth = 0;

      const th = document.createElement('th');
      th.style.borderWidth = 0;
      th.style.fontSize = '14px';
      th.style.fontWeight = '400';

      const text = document.createTextNode(title);

      th.appendChild(text);
      tr.appendChild(th);
      tableHead.appendChild(tr);
    });

    const tableBody = document.createElement('tbody');
    bodyLines.forEach((body, i) => {
      const colors = tooltip.labelColors[i];

      const span = document.createElement('span');
      span.style.background = colors.backgroundColor;
      span.style.borderColor = colors.borderColor;
      span.style.borderWidth = '2px';
      span.style.marginRight = '10px';
      span.style.height = '10px';
      span.style.width = '10px';
      span.style.display = 'inline-block';

      const tr = document.createElement('tr');
      tr.style.backgroundColor = 'inherit';
      tr.style.borderWidth = 0;
      tr.style.display = 'flex';
      tr.style.justifyContent = 'center';
      tr.style.color = '#242424';
      tr.style.fontSize = '14px';
      tr.style.fontWeight = '500';

      const td = document.createElement('td');
      const td2 = document.createElement('td');
      td.style.borderWidth = 0;
      td2.style.borderWidth = 0;

      const text = document.createTextNode(body);
      const rupeeSymbol = document.createTextNode("₹");
      const k = document.createTextNode("K");

      td.appendChild(text);
      td2.appendChild(rupeeSymbol);
      td.appendChild(k);
      tr.appendChild(td2);
      tr.appendChild(td);
      tableBody.appendChild(tr);
    });

    const tableRoot = tooltipEl.querySelector('table');

    while (tableRoot.firstChild) {
      tableRoot.firstChild.remove();
    }

    tableRoot.appendChild(tableHead);
    tableRoot.appendChild(tableBody);
  }

  const {offsetLeft: positionX, offsetTop: positionY} = chart.canvas;

  tooltipEl.style.opacity = 1;
  tooltipEl.style.left = positionX + tooltip.caretX + 'px';
  tooltipEl.style.top = positionY + tooltip.caretY + 'px';
  tooltipEl.style.font = tooltip.options.bodyFont.string;
  tooltipEl.style.padding = tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';
};
/***********************tooltip End*******************************/

const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [['At', 'investment'],'', 'Today', '', ['On', 'maturity']],
        datasets: [{
            data: [100000, 200000, 170000, 140000, 220000],
            pointRadius: 3,
            backgroundColor: (context) => {
              const bgColor = [
                'rgba(0, 255, 26, 0.6)',
                'rgba(0, 255, 26, 0.2)',
                'rgba(0, 255, 26, 0)'
              ];
              if(!context.chart.chartArea){
                return;
              }
              const {ctx, data, chartArea:{top, bottom}} = context.chart;
              const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
              const colorTranches = 1 / (bgColor.length - 1);
              for (let i = 0; i < bgColor.length; i++){
                gradientBg.addColorStop(0 + i * colorTranches, bgColor[i])
              }
              return gradientBg;
            },
            borderColor: [
                'rgba(34, 197, 94, 1)',
                'rgba(34, 197, 94, 1)',
                'rgba(34, 197, 94, 1)'
            ],
            borderWidth: 3,
            fill: true
        }]
    },
    options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Growth chart',
            align: 'start',
            padding: {
                bottom: 18
            },
            font: {
                size: 16,
                weight: 'bold'
            },
            color: '#231F20'
          },
          legend: false,
          tooltip: {
            enabled: false,
            external: externalTooltipHandler
          }
        },
        tension: 0.4,
        scales: {
             x: {
                  grid:{
                        color: '#ADADAD',
                    },
                    border: {
                        dash: [2,4],
                    },
                },
              y: {
                beginAtZero: true,
                border: {
                  display: false
                },
                grid: {
                  color: function(context) {
                    if (context.tick.value == 0) {
                      return '#ADADAD' ;
                    }
                    return '';
                  },
                },
                ticks: {
                    stepSize: 150000,
                    callback: function(value, index, ticks) {
                        return '₹ ' + value;
                    }
                }
              }
        }
    }
});
