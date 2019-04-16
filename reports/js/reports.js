var membershipName = [];
var membershipQuantity = [];
var productName = [];
var prodcutQuantity = [];

getLocalStorageData(){
  var membershipData = JSON.parse(localStorage.getItem('membershipData')) || [];
  var productData = JSON.parse(localStorage.getItem('productData')) || [];
  updateChartArrays(membershipData, productData);
}

updateChartArrays(membershipData, productData){
  for(var i = 0; i< membershipData.length; i++){
    membershipName.push(membershipData.productName);
    membershipQuantity.push(membershipData.numberOfPurchases);
  }
  
}