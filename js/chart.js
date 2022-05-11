// setting
const ctxBar = document.getElementById('myChart-bar').getContext('2d');
const ctxDonut = document.getElementById('myChart-donut').getContext('2d');

const labelsBar = elementsForLabels(9);
// const labelsDonut = elementsForLabels(0);
const labelsDonut = 0;

const dataBar = {
    labels: labelsBar,
    datasets: [{
      label: '일간 리포트',
      backgroundColor: 'rgb(56, 201, 118)',
      borderColor: 'rgb(56, 201, 118)',
      // data: [20000, 100000],
      data: [
        {x:1, y:60000},
        {x:2, y:100000},
        {x:3, y:80000},
        {x:4, y:70000},
        {x:5, y:50000},
        {x:6, y:20000},
        {x:7, y:40000},
        {x:8, y:30000},
        {x:9, y:90000},
      ],
    }]
  };

const configBar = {
    type: 'bar',
    data: dataBar,
    options: {
      elements: {
        point: {
          borderWidth: 1
        }
      },
      scales: {
          x: {
            
          },
          y: {
              beginAtZero: true,
              
          }
      }
    }
  };

  const myChartBar = new Chart(ctxBar, configBar);

  const dataDonut = {
    labels: labelsDonut,
    datasets: [{
      label: '6월 지출 패턴',
      backgroundColor: [
        'rgb(56, 201, 118)',
        'rgb(51, 111, 222)',
        'rgb(56, 201, 555)'
      ],
      data: [1,2,3,4,5,6]
    }]
  };

  const configDonut = {
    type: 'doughnut',
    data: dataDonut,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: '6월 지출 패턴'
        }
      },
      // scales: {
      //     x: {
            
      //     },
      //     y: {
      //         beginAtZero: true,
              
      //     }
      // }
    }
  };

const myChartDonut = new Chart(ctxDonut, configDonut);

function elementsForLabels (num) {
  let result = [];
  let temp = '';
  for(let i=1; i<=num; i++) {
    if(i<10) {
      temp = '0' + i;
    } else {
      temp += i; 
    }
    result.push(temp);
  }
  return result;
}
