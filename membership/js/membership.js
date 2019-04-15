//the unknown labels are for ids that i dont know what the exact names are gonna be yet

var membershipLevelGold = document.getElementById('membershipLevelGold');
var membershipLevelSilver = document.getElementById('membershipLevelSilver');
var membershipLevelBronze = document.getElementById('membershipLevelBronze');
var membershipLevel = [membershipLevelGold, membershipLevelSilver, membershipLevelBronze];

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
  var oldCartData = JSON.parse(localStorage.getItem('cartData')) || [];
  oldCartData.push(allTierCart[allTierCart.length-1]);
  var stringifyCartData = JSON.stringify(oldCartData);
  localStorage.setItem('cartData', stringifyCartData);
}

function generateTier(){
  new Tier('Gold', 55, 'img/gold.png');
  new Tier('Silver', 40, 'img/silver.png');
  new Tier('Bronze', 25, 'img/bronze.png');
}

function displayTier(){
  for(var i =0; i < allTier.length; i++){
    var placeholderNameDOM = document.createElement('h1');
    var placeholderImageDOM = document.createElement('img');
    var placeholderPriceDOM = document.createElement('p');
    var placeholderButtonDOM = document.createElement('button');
    placeholderNameDOM.textContent = allTier[i].name;
    membershipLevel[i].appendChild(placeholderNameDOM);
    placeholderImageDOM.src = allTier[i].filepath;
    membershipLevel[i].appendChild(placeholderImageDOM);
    placeholderPriceDOM.textContent = '$' + allTier[i].price;
    membershipLevel[i].appendChild(placeholderPriceDOM);
    placeholderButtonDOM.innerHTML = 'ADD TO CART';
    membershipLevel[i].appendChild(placeholderButtonDOM);
  }
}

function handleGoldDOM(){
  allTierCart.push(allTier[0]);
  saveToLocalStorage(); //update local storage with the updated amount of memebership in the cart
}

function handleSilverDOM(){
  allTierCart.push(allTier[1]);
  saveToLocalStorage(); //update local storage with the updated amount of memebership in the cart
}
function handleBronzeDOM(){
  allTierCart.push(allTier[2]);
  saveToLocalStorage(); //update local storage with the updated amount of memebership in the cart
}
generateTier();
displayTier();
membershipLevel[0].lastChild.addEventListener('click', handleGoldDOM); // for the gold button event listener
membershipLevel[1].lastChild.addEventListener('click', handleSilverDOM);// for the silver button event listener
membershipLevel[2].lastChild.addEventListener('click', handleBronzeDOM); // for the bronze button event listener

