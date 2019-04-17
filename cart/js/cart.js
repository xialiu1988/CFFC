'use strict';

var mainEl=document.getElementById('cartData');
var cartItems=[];
var cart;
var membership=[];
function loadCart() {
  var rawData=JSON.parse(localStorage.getItem('productData'))|| [];
  var rawMember=JSON.parse(localStorage.getItem('membershipData'));
  for(let t=0;t<Object.values(rawData).length;t++){
    new CartItem(Object.values(rawData)[t].product,Object.values(rawData)[t].quantity);
  }
  cart = new Cart(cartItems);
  membership=rawMember;
}
function renderCart(){
  loadCart();
  clearCart();
  showCart();
  caculateTotalPrice();
}


function clearCart(){
  //mainEl.innerHTML='';
}


var cartTotal=0;
var goldCount=0;
var silverCount=0;
var bronzeCount=0;
//displace the cart table
function showCart(){
  //productData
  for(var i=0;i<cart.cartItems.length;i++){
    var trEl=document.createElement('tr');
    var thEl=document.createElement('th');
    thEl.textContent=cart.cartItems[i].product.displayName;
    //console.log(cart.cartItems[i].product.displayName);
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
    cartTotal+=totalPrice;
    console.log(cartTotal);
    trEl.appendChild(tddEl);

    var rmvEl=document.createElement('td');

    var newlink=document.createElement('a');
    newlink.setAttribute('href','');
    newlink.setAttribute('style','color: red;');
    newlink.id='rmv'+cart.cartItems[i].product.name;
    newlink.innerHTML='X';
    newlink.addEventListener('click',removeItem);
    rmvEl.appendChild(newlink);

    trEl.appendChild(rmvEl);
    mainEl.appendChild(trEl);
  }

  //membershipData
  for(var j=0;j<membership.length;j++){
    console.log('this is membership data'+ membership[j]);
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
    thhEl.textContent='Gold Membership';
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
    input.id='gCount';
    input.name='quantity';
    input.value=goldCount;
    dEl.appendChild(input);
    //dEl.textContent=goldCount;

    let btn=document.createElement('button');
    btn.id='goldbtn';
    btn.type='submit';
    btn.textContent='Update';
    btn.addEventListener('click',updateMSQty);
    dEl.appendChild(btn);

    trrEl.appendChild(dEl);
    var ddEl=document.createElement('td');
    ddEl.id='goldTotal';
    ddEl.textContent='$'+55*goldCount;
    cartTotal+=55*goldCount;
    trrEl.appendChild(ddEl);

    // code to add the remove link on the cart page for the membership products
    let rmvMemEl=document.createElement('td');
    let newMemlink=document.createElement('a');
    newMemlink.setAttribute('href','');
    newMemlink.setAttribute('style','color: red;');
    newMemlink.id='rmvGold';
    newMemlink.innerHTML='X';
    newMemlink.addEventListener('click',removeMemItem); 
    rmvMemEl.appendChild(newMemlink);
    trrEl.appendChild(rmvMemEl);

    mainEl.appendChild(trrEl);
  }
  if(silverCount>0){
    const trrEl=document.createElement('tr');
    let thhEl=document.createElement('th');
    thhEl.textContent='Silver Membership';
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
    input.id='sCount';
    input.name='quantity';
    input.value=silverCount;
    dEl.appendChild(input);
    //dEl.textContent=silverCount;

    //append update button for silver membership quantity
    let btn=document.createElement('button');
    btn.id='silverbtn';
    btn.type='submit';
    btn.textContent='Update';
    btn.addEventListener('click',updateMSQty);
    dEl.appendChild(btn);

    trrEl.appendChild(dEl);
    let ddEl=document.createElement('td');
    ddEl.id='silverTotal';
    ddEl.textContent='$'+40*silverCount;
    cartTotal+=40*silverCount;
    trrEl.appendChild(ddEl);

    // code to add the remove link on the cart page for the membership products
    let rmvMemEl=document.createElement('td');
    let newMemlink=document.createElement('a');
    newMemlink.setAttribute('href','');
    newMemlink.setAttribute('style','color: red;');
    newMemlink.id='rmvSilver';
    newMemlink.innerHTML='X';
    newMemlink.addEventListener('click',removeMemItem);
    rmvMemEl.appendChild(newMemlink);
    trrEl.appendChild(rmvMemEl);
    mainEl.appendChild(trrEl);
  }

  if(bronzeCount>0){
    const trrEl=document.createElement('tr');
    let thhEl=document.createElement('th');
    thhEl.textContent='Bronze Membership';
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
    input.id='bCount';
    input.name='quantity';
    input.value=bronzeCount;
    dEl.appendChild(input);

    // dEl.textContent=bronzeCount;
    let btn=document.createElement('button');
    btn.id='bronzebtn';
    btn.type='submit';
    btn.textContent='Update';
    btn.addEventListener('click',updateMSQty);
    dEl.appendChild(btn);

    trrEl.appendChild(dEl);
    let ddEl=document.createElement('td');
    ddEl.id='BronzeTotal';
    ddEl.textContent='$'+25*bronzeCount;
    cartTotal+=25*bronzeCount;
    trrEl.appendChild(ddEl);

    // code to add the remove link on the cart page for the membership products
    let rmvMemEl=document.createElement('td');
    let newMemlink=document.createElement('a');
    newMemlink.setAttribute('href','');
    newMemlink.setAttribute('style','color: red;');
    newMemlink.id='rmvBronze';
    newMemlink.innerHTML='X';
    newMemlink.addEventListener('click',removeMemItem);
    rmvMemEl.appendChild(newMemlink);
    trrEl.appendChild(rmvMemEl);
    mainEl.appendChild(trrEl);
  }
}

//calculate total price for the whole cart times
function caculateTotalPrice(){
  const tfootEl = document.getElementById('tlPrice');
  const thEl = document.createElement('th');
  const tdEl = document.createElement('td');
  const thElAtt = document.createAttribute('colspan');
  thElAtt.value = '3';
  thEl.setAttributeNode(thElAtt);
  thEl.textContent = 'Total:';
  tfootEl.appendChild(thEl);

  tdEl.textContent = `$ ${cartTotal}`;
  tfootEl.appendChild(tdEl);
}

//remove membership item
function removeMemItem(e){
  e.preventDefault();
  var temp = 0;
  if(e.target.id === 'rmvGold'){
    for(var i=0; i<membership.length; i++){
      if(membership[i-temp].name === 'Gold'){
        membership.splice(i-temp, 1);
        temp++;
      }
    }
  }else if(e.target.id === 'rmvSilver'){
    for(var j=0; j<membership.length; j++){
      if(membership[j-temp].name === 'Silver'){
        membership.splice(j-temp, 1);
        temp++;
      }
    }
  }else if(e.target.id === 'rmvBronze'){
    for(var k=0; k<membership.length; k++){
      if(membership[k-temp].name === 'Bronze'){
        membership.splice(k-temp, 1);
        temp++;
      }
    }
  }
  // update localstorage
  var membershipInfo=JSON.stringify(membership);
  localStorage.setItem('membershipData',membershipInfo);
  //reload page
  window.location.reload();
}

//remove cart Item
function removeItem(e){
  e.preventDefault();
  console.log(e.target.id);
  let newid=e.target.id.slice(3);
  console.log(newid);

  let names=[];
  for(let i=0;i<cart.cartItems.length;i++){
    names.push(cart.cartItems[i].product.name);
  }
  let idx=names.indexOf(newid);
  cart.cartItems.splice(idx,1);
  // update localstorage
  var cartInfo=JSON.stringify(cartItems);
  localStorage.setItem('productData',cartInfo);
  //reload page
  window.location.reload();
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


//update quantity for memberships
function updateMSQty(e){
  e.preventDefault();
  console.log(e.target.id);
  if(e.target.id==='goldbtn'){
    var newqty=document.getElementById('gCount').value;

    //clear all the tier objects named'gold'
    for(let i=0;i<membership.length;i++){
      if(membership[i].name==='Gold'){
        membership.splice(i,1);
        i--;
      }
    }
    console.log(membership);
    //genenrate new tier objects newqty times
    for(let i=0;i<newqty;i++){
      membership.push(new Tier('Gold', 55, '../membership/img/gold-member.png'));
    }
    //caculate total price
    var newTotal=newqty*55;
    //clear the total price div
    var el=document.getElementById('goldTotal');
    el.innerHTML='';
    el.innerHTML='$'+newTotal;
  }

  if(e.target.id==='silverbtn'){
    var newqty2=document.getElementById('sCount').value;

    //clear all the tier objects named'gold'
    for(let i=0;i<membership.length;i++){
      if(membership[i].name==='Silver'){
        membership.splice(i,1);
        i--;
      }
    }
    console.log(membership);
    //genenrate new tier objects newqty times
    for(let i=0;i<newqty2;i++){
      membership.push(new Tier('Silver', 40, '../membership/img/silver-membership.png'));
    }
    //caculate total price
    var newTotal2=newqty2*40;
    //clear the total price div
    let el=document.getElementById('silverTotal');
    el.innerHTML='';
    el.innerHTML='$'+newTotal2;

  }



  // case 'bronzebtn':

  if(e.target.id==='bronzebtn'){
    var newqty3=document.getElementById('bCount').value;

    //clear all the tier objects named'gold'
    for(let i=0;i<membership.length;i++){
      if(membership[i].name==='Bronze'){
        membership.splice(i,1);
        i--;
      }
    }
    //genenrate new tier objects newqty times
    for(let i=0;i<newqty3;i++){
      membership.push(new Tier('Bronze', 25, '../membership/img/bronze-member.png'));
    }
    //caculate total price
    var newTotal3=newqty3*25;
    //clear the total price div
    let el=document.getElementById('BronzeTotal');
    el.innerHTML='';
    el.innerHTML='$'+newTotal3;

  }


  //update the localstorage
  var stringifyCartData3 = JSON.stringify(membership);
  localStorage.setItem('membershipData', stringifyCartData3);
  //reload the page
  window.location.reload();
}

var btnel=document.getElementById('purchase');
btnel.addEventListener('click',function(e){
  e.preventDefault();
  var like = window.confirm('Your total price is: $'+cartTotal);
  if(like===true){
    location.reload();
    localStorage.clear();
    alert('Thanks for shopping with us!');
  }
  else{
    localStorage.reload();
  }
});


renderCart();
