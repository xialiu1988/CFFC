//the unknown labels are for ids that i dont know what the exact names are gonna be yet

var selectPlatinumDOM = document.getElementById('unknown');
var selectGoldDOM = document.getElementById('unknown');
var selectSilverDOM = document.getElementById('unknown');
var allTier = [];

var Tier = function(name, price, filepath){
  this.name = name;
  this.price = price;
  this.filepath = filepath;
  this.numOfPurchase = 0;
  allTier.push(this);
};

function saveToLocalStorage (Tier){
  localStorage.setItem('cartData', JSON.stringify(Tier));
}

function generateTier(){
  new Tier('Platinum', 55, 'img/platinum.jpg');
  new Tier('Gold', 40, 'img/gold.jpg');
  new Tier('Silver', 25, 'img/silver.jpg');
}

function displayTier(){
  var membershipDivDOM = document.getElementById('membership-level');
  for(var i =0; i < allTier.length; i++){
    var platinumNameDOM = document.createElement('h1');
    platinumNameDOM.textContent = allTier[0].name;

  }
}

function handlePlatinumDOM(){
  saveToLocalStorage(allTier[0]);
}
function handleGoldDOM(){
  saveToLocalStorage(allTier[1]);
}
function handleSilverDOM(){
  saveToLocalStorage(allTier[2]);
}

selectPlatinumDOM.addEventListener('submit', handlePlatinumDOM);
selectGoldDOM.addEventListener('submit', handleGoldDOM);
selectSilverDOM.addEventListener('submit', handleSilverDOM);

