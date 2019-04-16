'use strict';

var mainEl=document.getElementById('cartData');
var cart;
var membership=[];
function loadCart() {
  var rawData=JSON.parse(localStorage.getItem('productData'))|| [];
  var rawMember=JSON.parse(localStorage.getItem('membershipData'));
  cart = new Cart(rawData);
  membership=rawMember;
  console.log(membership);

}
function renderCart(){
  loadCart();
  clearCart();
  showCart();
}


function clearCart(){

}

function showCart(){

  //productData
  for(var i=0;i<cart.cartItems.length;i++){
    var trEl=document.createElement('tr');
    var thEl=document.createElement('th');
    thEl.textContent=cart.cartItems[i].product.name;
    trEl.appendChild(thEl);
    var imgtdEl=document.createElement('td');
    var imgEl=document.createElement('img');
    imgEl.src=cart.cartItems[i].product.src;
    imgtdEl.appendChild(imgEl);
    trEl.appendChild(imgtdEl);
    var tdEl=document.createElement('td');
    tdEl.textContent=cart.cartItems[i].quantity;
    trEl.appendChild(tdEl);
    var totalPrice;
    totalPrice=parseFloat(cart.cartItems[i].product.price.replace('$',''))*cart.cartItems[i].quantity;
    var tddEl=document.createElement('td');
    tddEl.textContent='$'+totalPrice;
    trEl.appendChild(tddEl);
    mainEl.appendChild(trEl);
  }

  //membershipData

  let goldCount=0;
  let silverCount=0;
  let bronzeCount=0;

console.log(membership[4].name);
  for(var j=0;j<membership.length;j++){
    if(membership[j].name==='Gold'){
      goldCount++;
    }
    if(membership[j].name==='Silver'){
      silverCount++;
    }
    if(membership[j].name==='Bronze'){
      bronzeCount++;
    }
  }

  if(goldCount>0){
    const trrEl=document.createElement('tr');
    var thhEl=document.createElement('th');
    thhEl.textContent='GoldMemberShip';
    trrEl.appendChild(thhEl);

    let imgtdEl=document.createElement('td');
    let imgEl=document.createElement('img');
    imgEl.src='../membership/img/gold-member.png';
    imgtdEl.appendChild(imgEl);
    trrEl.appendChild(imgtdEl);
    var dEl=document.createElement('td');
    dEl.textContent=goldCount;
    trrEl.appendChild(dEl);
    var ddEl=document.createElement('td');
    ddEl.textContent='$'+55*goldCount;
    trrEl.appendChild(ddEl);
    mainEl.appendChild(trrEl);
  }
  if(silverCount>0){
    const trrEl=document.createElement('tr');
    let thhEl=document.createElement('th');
    thhEl.textContent='silverMemberShip';
    trrEl.appendChild(thhEl);

    let imgtdEl=document.createElement('td');
    let imgEl=document.createElement('img');
    imgEl.src='../membership/img/silver-membership.png';
    imgtdEl.appendChild(imgEl);
    trrEl.appendChild(imgtdEl);
    let dEl=document.createElement('td');
    dEl.textContent=silverCount;
    trrEl.appendChild(dEl);
    let ddEl=document.createElement('td');
    ddEl.textContent='$'+40*silverCount;
    trrEl.appendChild(ddEl);
    mainEl.appendChild(trrEl);
  }

  if(bronzeCount>0){
    const trrEl=document.createElement('tr');
    let thhEl=document.createElement('th');
    thhEl.textContent='BronzeMemberShip';
    trrEl.appendChild(thhEl);

    let imgtdEl=document.createElement('td');
    let imgEl=document.createElement('img');
    imgEl.src='../membership/img/bronze-member.png';
    imgtdEl.appendChild(imgEl);
    trrEl.appendChild(imgtdEl);

    let dEl=document.createElement('td');
    dEl.textContent=bronzeCount;
    trrEl.appendChild(dEl);
    let ddEl=document.createElement('td');
    ddEl.textContent='$'+25*bronzeCount;
    trrEl.appendChild(ddEl);
    mainEl.appendChild(trrEl);
  }

}




renderCart();
