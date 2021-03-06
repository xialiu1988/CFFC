'use strict';
var products = [];
var cartItems = [];

//product constructor
function Product(name,src,price, displayName){
  this.name=name;
  this.src=src;
  this.price=price;
  this.displayName = displayName;
  products.push(this);
}
//cart constructor
function Cart(cartItems){
  this.cartItems=cartItems;
}

var total=0;
function checklocal(){
  var rawData=JSON.parse(localStorage.getItem('productData'));
  var rawMember=JSON.parse(localStorage.getItem('membershipData'));
  if(rawData&&rawMember){
    for(let t=0;t<Object.values(rawData).length;t++){
      new CartItem(Object.values(rawData)[t].product,Object.values(rawData)[t].quantity);
    }
    for(var l=0;l<rawData.length;l++){
      total+=Number(rawData[l].quantity);
    }
    var main=document.getElementById('counter');
    main.textContent=total+Number(rawMember.length);
  }
  else if(rawData===null&&rawMember!==null){
    var main2=document.getElementById('counter');
    main2.innerHTML=Number(rawMember.length);
  }
  else if(rawData!==null&&rawMember===null){
    for(let t=0;t<Object.values(rawData).length;t++){
      new CartItem(Object.values(rawData)[t].product,Object.values(rawData)[t].quantity);
    }
    var main3=document.getElementById('counter');
    for(var ll=0;ll<rawData.length;ll++){
      total+=Number(rawData[ll].quantity);
    }
    main3.innerHTML=total;
  }
  else{
    var mainEl=document.getElementById('counter');
    mainEl.innerHTML=total;
  }
}
checklocal();
//create a new cart
var cart=new Cart(cartItems);
//display all the products on the products.html page
function render(){
  let mainEl = document.getElementById('product-container');
  let divEl;
  for (let i = 0; i < products.length; i++) {
    divEl = document.createElement('div');
    divEl.className = products[i].name;

    mainEl.appendChild(divEl);

    let imgEl=document.createElement('img');
    imgEl.name=products[i].name;
    imgEl.src=products[i].src;

    let pEl=document.createElement('p');
    pEl.textContent=products[i].price;

    let formEl=document.createElement('form');
    let labelEl=document.createElement('label');
    labelEl.textContent='Qty: ';
    let input=document.createElement('input');
    input.min='1';
    input.type='number';
    input.name='quantity';
    input.id='quantity'+products[i].name;
    input.value='1';
    let buttonEl=document.createElement('button');
    buttonEl.type='submit';
    buttonEl.textContent='Add To Cart';
    buttonEl.id=products[i].name;
    buttonEl.addEventListener('click',addtoCart);
    formEl.appendChild(labelEl);
    formEl.appendChild(input);
    formEl.appendChild(buttonEl);
    divEl.appendChild(imgEl);
    divEl.appendChild(pEl);
    divEl.appendChild(formEl);
  }
}

//cartItem constructor
function CartItem(product,quantity){
  this.product=product;
  this.quantity=quantity;
  cartItems.push(this);
}

//cart function-- add item to cart/update the existed product
Cart.prototype.addItem=function(product,quantity){

  var cartItemsNames=[];
  for(var k=0;k<cartItems.length;k++){
    cartItemsNames.push(cartItems[k].product.name);
  }
  for(var ii=0;ii<cartItems.length;ii++){
    if(cartItems[ii].product.name===product.name){
      cartItems[ii].quantity=Number(quantity)+Number( cartItems[ii].quantity);
      break;
    }
  }
  if(!cartItemsNames.includes(product.name)){
    new CartItem(product,quantity);
  }

};


//cart function-- remove one item from cart
//cart function--save to localstorage
Cart.prototype.savetoLocalstorage=function(){
  var cartInfo=JSON.stringify(cartItems);
  localStorage.setItem('productData',cartInfo);
};




function addtoCart(event){
  event.preventDefault();
  addSelectedItemtoCart();
  cart.savetoLocalstorage();
  updateCartCounter();
}

function addSelectedItemtoCart(){
  console.log(event.target.id);
  var q=document.getElementById('quantity'+event.target.id);
  var qNum=q.value;
  for(let j=0;j<products.length;j++){
    if(products[j].name===event.target.id){
      cart.addItem(products[j],qNum);
    }
  }

}

function updateCartCounter(){
  var divEl=document.getElementById('counter');
  //clear the div, then append the latest counter number in there
  divEl.innerHTML='';
  var rawData=JSON.parse(localStorage.getItem('productData'));
  console.log(rawData);
  var rawMember=JSON.parse(localStorage.getItem('membershipData'));
  var total=0;
  if(rawData&&rawMember){
    for(var l=0;l<rawData.length;l++){
      total+=Number(rawData[l].quantity);
    }
    divEl.innerHTML=total+rawMember.length;
  }
  else{
    for(var li=0;li<rawData.length;li++){
      total+=Number(rawData[li].quantity);
    }
    divEl.innerHTML=total;
  }
}

function createInstances(){
  new Product('bag','../images/bag.jpg','$13.56','CFFC Bag');
  new Product('cffc-tshirt','../images/cffcTshirt.png','$39.50','CFFC Tshirt');
  new Product('cup','../images/cup.jpg','$21.00','CFFC Cup');
  new Product('hoodie','../images/hoodie.png','$63.90','CFFC Hoddie');
  new Product('soccer-boot','../images/soccer_boot.jpg','$83.00','Soccer Boot');
  new Product('sticker','../images/sticker.jpg','$4.00', 'CFFC Sticker');
}

createInstances();
render();

//helper function to check if the product contains the letters from user input
//return true if it can find product contains search information
var boo=false;
function checkStock(search){
  for(let i=0;i<products.length;i++){
    if(products[i].name.indexOf(search)>-1){
      boo=true;
    }
  }
  return boo;
}

var btnEl=document.getElementById('site-search');
btnEl.addEventListener('submit',searchTheSite);
function searchTheSite(e){
  e.preventDefault();
  var searchEl=e.target.name;
  var userinput=searchEl.value;
  var dt=userinput.toLowerCase();
  // console.log(dt);

  if(checkStock(dt)){
    var contextEl = document.getElementById('product-container');
    contextEl.innerHTML='';

    let mainEl = document.getElementById('product-container');
    let divEl;
    for (let i = 0; i < products.length; i++) {

      if(products[i].name.indexOf(dt)>-1){
        divEl = document.createElement('div');
        divEl.className = products[i].name;
        mainEl.appendChild(divEl);
        let imgEl=document.createElement('img');
        imgEl.name=products[i].name;
        imgEl.src=products[i].src;

        let pEl=document.createElement('p');
        pEl.textContent=products[i].price;

        let formEl=document.createElement('form');
        let labelEl=document.createElement('label');
        labelEl.textContent='Qty: ';
        let input=document.createElement('input');
        input.min='1';
        input.type='number';
        input.name='quantity';
        input.id='quantity'+products[i].name;
        input.value='1';
        let buttonEl=document.createElement('button');
        buttonEl.type='submit';
        buttonEl.textContent='Add To Cart';
        buttonEl.id=products[i].name;
        buttonEl.addEventListener('click',addtoCart);
        formEl.appendChild(labelEl);
        formEl.appendChild(input);
        formEl.appendChild(buttonEl);
        divEl.appendChild(imgEl);
        divEl.appendChild(pEl);
        divEl.appendChild(formEl);
      }

      boo=false;

    }
  }

  if (!checkStock(dt)){
    var context = document.getElementById('product-container');
    context.innerHTML='';
    var paragraghEL=document.createElement('p');
    paragraghEL.textContent='Sorry , we can\'t find'+' '+userinput;
    context.appendChild(paragraghEL);

  }
}



