'use strict';

var counterDOM = document.getElementById('counter');
var counter = 0;

function showCart(){
  var membershipData = JSON.parse(localStorage.getItem('membershipData'));
  var productData = JSON.parse(localStorage.getItem('productData'));
  counter = membershipData.length;
  for(var i=0; i<productData.length; i++){
    counter+= Number(productData[i].quantity);
  }
  counterDOM.innerHTML = counter;
}

showCart();
