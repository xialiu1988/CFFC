'use strict';
var membershipLevelGold = document.getElementById('membershipLevelGold');
var membershipLevelSilver = document.getElementById('membershipLevelSilver');
var membershipLevelBronze = document.getElementById('membershipLevelBronze');
var membershipLevel = [membershipLevelGold, membershipLevelSilver, membershipLevelBronze];
var perkListGold = ['Free renewal for one year', 'No cover charge at our partner venues', '15% off any merchandise', 'Annual gold member gift'];
var perkListSilver = ['Only $25 for first renewal', '$5 cover charge at our partner venues', '10% off any merchandise', 'Annual silver member gift'];
var perkListBronze = ['Only $25 for first renewal', '$10 cover charge at our partner venues', '5% off any merchandise', 'Annual bronze member gift'];
var perkList=[perkListGold, perkListSilver, perkListBronze];
var allTierCart =[]; //the array to handle the amount of membership a user puts in thier cart
var allTier = []; //the array to handle the default amount of membership options

var Tier = function(name, price, filepath){
  this.name = name;
  this.price = price;
  this.filepath = filepath;
  this.numOfPurchase = 0;
  allTier.push(this);
};


function saveToLocalStorage (){
  var oldCartData = JSON.parse(localStorage.getItem('membershipData')) || [];
  oldCartData.push(allTierCart[allTierCart.length-1]);
  var stringifyCartData = JSON.stringify(oldCartData);
  localStorage.setItem('membershipData', stringifyCartData);
}

function generateTier(){
  new Tier('Gold', 55, 'img/gold-member.png');
  new Tier('Silver', 40, 'img/silver-membership.png');
  new Tier('Bronze', 25, 'img/bronze-member.png');
}
//get data from localstorage
var total=0;
function checklocal(){
  console.log('i got in here');
  var rawData=JSON.parse(localStorage.getItem('productData'));
  var rawMember=JSON.parse(localStorage.getItem('membershipData'));
  if(rawData&&rawMember){
    for(var l=0;l<rawData.length;l++){
      total+=Number(rawData[l].quantity);
    }
    var main=document.getElementById('membershipCounter');
    main.innerHTML=total+Number(rawMember.length);
  }
  else if(rawData===null&&rawMember!==null){
    var main2=document.getElementById('membershipCounter');
    main2.innerHTML=Number(rawMember.length);
  }
  else if(rawData!==null&&rawMember===null){
    var main3=document.getElementById('membershipCounter');
    for(var ll=0;ll<rawData.length;ll++){
      total+=Number(rawData[ll].quantity);
    }
    main3.innerHTML=total;
  }
  else{
    var mainEl=document.getElementById('membershipCounter');
    mainEl.innerHTML= total;
  }
}
checklocal();
function displayTier(){
  for(var i =0; i < allTier.length; i++){
    var placeholderNameDOM = document.createElement('h2');
    var placeholderImageDOM = document.createElement('img');
    var placeholderPriceDOM = document.createElement('p');
    var placeholderButtonDOM = document.createElement('button');
    var placeholderHeaderDOM = document.createElement('h3');
    var placeholderListDom = document.createElement('ul');
    placeholderNameDOM.textContent = allTier[i].name;
    membershipLevel[i].appendChild(placeholderNameDOM);
    placeholderImageDOM.src = allTier[i].filepath;
    membershipLevel[i].appendChild(placeholderImageDOM);
    placeholderPriceDOM.textContent = '$' + allTier[i].price;
    membershipLevel[i].appendChild(placeholderPriceDOM);
    placeholderButtonDOM.innerHTML = 'ADD TO CART';
    placeholderButtonDOM.id = 'button'+i;
    membershipLevel[i].appendChild(placeholderButtonDOM);
    placeholderHeaderDOM.innerHTML = 'Perks:';
    membershipLevel[i].appendChild(placeholderHeaderDOM);
    for (var j = 0;j < perkListGold.length; j++) {
      var listDomItems = document.createElement('li');
      listDomItems.textContent = perkList[i][j];
      placeholderListDom.appendChild(listDomItems);
      membershipLevel[i].appendChild(placeholderListDom);
    }
  }
}
generateTier();
displayTier();
function handleGoldDOM(){
  allTierCart.push(allTier[0]);
  saveToLocalStorage(); //update local storage with the updated amount of memebership in the cart
  var num2 =0;
  var rawData=JSON.parse(localStorage.getItem('productData'));
  var rawMember=JSON.parse(localStorage.getItem('membershipData'));
  if(rawData&&rawMember){
    for(var w=0;w<rawData.length;w++){
      num2+=Number(rawData[w].quantity);
    }
    var main=document.getElementById('membershipCounter');
    main.innerHTML='';
    main.innerHTML=num2+rawMember.length;
  }
  else{
    var mainE=document.getElementById('membershipCounter');
    mainE.innerHTML='';
    mainE.innerHTML=rawMember.length;
  }
}

function handleSilverDOM(){
  allTierCart.push(allTier[1]);
  saveToLocalStorage(); //update local storage with the updated amount of memebership in the cart
  var num2=0;
  var rawData=JSON.parse(localStorage.getItem('productData'));
  var rawMember=JSON.parse(localStorage.getItem('membershipData'));
  if(rawData&&rawMember){
    for(var w=0;w<rawData.length;w++){
      num2+=Number(rawData[w].quantity);
    }
    var main=document.getElementById('membershipCounter');
    main.innerHTML='';
    main.innerHTML=num2+rawMember.length;
  }
  else{
    var mainE=document.getElementById('membershipCounter');
    mainE.innerHTML='';
    mainE.innerHTML=rawMember.length;
  }
}
function handleBronzeDOM(){
  allTierCart.push(allTier[2]);
  saveToLocalStorage(); //update local storage with the updated amount of memebership in the cart
  var num2=0;
  var rawData=JSON.parse(localStorage.getItem('productData'));
  var rawMember=JSON.parse(localStorage.getItem('membershipData'));
  if(rawData&&rawMember){
    for(var w=0;w<rawData.length;w++){
      num2+=Number(rawData[w].quantity);
    }
    var main=document.getElementById('membershipCounter');
    main.innerHTML='';
    main.innerHTML=num2+rawMember.length;
  }
  else{
    var mainE=document.getElementById('membershipCounter');
    mainE.innerHTML='';
    mainE.innerHTML=rawMember.length;
  }
}

document.getElementById('button0').addEventListener('click', handleGoldDOM); // for the gold button event listener
document.getElementById('button1').addEventListener('click', handleSilverDOM); // for the silver button event listener
document.getElementById('button2').addEventListener('click', handleBronzeDOM); // for the bronze button event listener



