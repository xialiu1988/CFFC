'use strict';
var membershipName = ['Gold', 'Silver', 'Bronze'];
var membershipQuantity = [0,0,0];
var productName = [];
var productQuantity = [];
var counterDOM = document.getElementById('counter');
var counter = 0;

function getLocalStorageData(){
  var membershipData = JSON.parse(localStorage.getItem('membershipData'));
  var productData = JSON.parse(localStorage.getItem('productData'));
  updateChartArrays(membershipData, productData);
}

function updateChartArrays(membershipData, productData){
  if(membershipData !== null){
    for(var i=0; i<membershipData.length; i++){
      membershipQuantity[membershipName.indexOf(membershipData[i].name)]++;
    }
    counter = membershipData.length;
    drawMembershipChart();
  }
  if(productData !== null){
    for(var j=0; j<productData.length; j++){
      productName[j] = productData[j].product.name;
      productQuantity[j] = productData[j].quantity;
      counter += Number(productData[j].quantity);
    }
    drawProductChart();
  }
  counterDOM.innerHTML = counter;
}
function drawMembershipChart() {  
  var canvas = document.getElementById('membership-chart');
  var ctx = canvas.getContext('2d');

  var data = {
    labels: membershipName, // an array that stores the names of the membership types
    datasets: [{
      label: 'Total number of membership purchases',
      data: membershipQuantity, // an array that stores the number of memberships that were purchased
      backgroundColor: [
        'goldenrod',
        'silver',
        '#cd7f32'
      ],
      hoverBackgroundColor: []
    }]
  };
  var membershipChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stepSize: 1.0
          }
        }]
      }
    },
  }); 
}

function drawProductChart(){
  var canvas = document.getElementById('product-chart');
  var ctx = canvas.getContext('2d');

  var data = {
    labels: productName, // an array that stores the names of the membership types
    datasets: [{
      label: 'Total number of product purchases',
      data: productQuantity, // an array that stores the number of memberships that were purchased
      backgroundColor: [
        'blue','red','green','pink','brown','orange'
      ],
      hoverBackgroundColor: []
    }]
  };
  var productChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stepSize: 1.0
          }
        }]
      }
    },
  });
}



getLocalStorageData();
