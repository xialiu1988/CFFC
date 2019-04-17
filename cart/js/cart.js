'use strict';

var mainEl=document.getElementById('cartData');
var cartItems=[];
var cart;
var membership=[];
function loadCart() {
  var rawData=JSON.parse(localStorage.getItem('productData'))|| [];
  var rawMember=JSON.parse(localStorage.getItem('membershipData'));
  console.log(Object.entries(rawData)[0][1]);

  for(let t=0;t<Object.values(rawData).length;t++){
    new CartItem(Object.values(rawData)[t].product,Object.values(rawData)[t].quantity);
   }
  cart = new Cart(cartItems);

  membership=rawMember;
  console.log(membership);

}
function renderCart(){
  loadCart();
  clearCart();
  showCart();
}


function clearCart(){
  //mainEl.innerHTML='';
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
    let input=document.createElement('input');
    input.min='1';
    input.type='number';
    input.name='quantity';
    input.id='quantity'+cart.cartItems[i].product.name;
    input.value=cart.cartItems[i].quantity;
    tdEl.appendChild(input);

    //tdEl.textContent=cart.cartItems[i].quantity;
    let btn=document.createElement('button');
    btn.id=cart.cartItems[i].product.name;
    btn.type='submit';
    btn.textContent='Update';
    btn.addEventListener('click',updateQty);
    tdEl.appendChild(btn);
    trEl.appendChild(tdEl);
    //add update button for quantity , after user hit button will update the current totalprice with the updated quantity
    var totalPrice;
    totalPrice=parseFloat(cart.cartItems[i].product.price.replace('$',''))*cart.cartItems[i].quantity;
    var tddEl=document.createElement('td');
    tddEl.id='total'+cart.cartItems[i].product.name;
    tddEl.textContent='$'+totalPrice;
    trEl.appendChild(tddEl);
    mainEl.appendChild(trEl);
  }

  //membershipData

  let goldCount=0;
  let silverCount=0;
  let bronzeCount=0;


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

    let input=document.createElement('input');
    input.min='1';
    input.type='number';
    input.name='quantity';
    input.value=goldCount;
    dEl.appendChild(input);
    // dEl.textContent=goldCount;
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

    let input=document.createElement('input');
    input.min='1';
    input.type='number';
    input.name='quantity';
    input.value=silverCount;
    dEl.appendChild(input);
    //dEl.textContent=silverCount;
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

    let input=document.createElement('input');
    input.min='1';
    input.type='number';
    input.name='quantity';
    input.value=bronzeCount;
    dEl.appendChild(input);

    // dEl.textContent=bronzeCount;
    trrEl.appendChild(dEl);
    let ddEl=document.createElement('td');
    ddEl.textContent='$'+25*bronzeCount;
    trrEl.appendChild(ddEl);
    mainEl.appendChild(trrEl);
  }

}
function updateQty(e){
  e.preventDefault();
  let names=[];
  for(let i=0;i<cart.cartItems.length;i++){
    names.push(cart.cartItems[i].product.name);
  }
  let idx=names.indexOf(e.target.id);
  let newQty=document.getElementById('quantity'+e.target.id).value;
  let newPrice=parseFloat(cart.cartItems[idx].product.price.replace('$',''))*newQty;
  let item=document.getElementById('total'+e.target.id);
  item.innerHTML='';
  item.innerHTML='$'+newPrice;

  // update localstorage
  cartItems[idx].quantity=newQty;
  console.log(cartItems[idx].quantity);
  var cartInfo=JSON.stringify(cartItems);
  localStorage.setItem('productData',cartInfo);
  window.location.reload();
}


renderCart();
