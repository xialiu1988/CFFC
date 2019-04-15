'use strict';
var products=[];
var cartItems=[];

//product constructor
function Product(name,src,price){
  this.name=name;
  this.src=src;
  this.price=price;
  products.push(this);
}

//display all the products on the products.html page
function render(){
  var mainEl=document.getElementById('main-container');
  for(let i=0;i<products.length;i++){
    var imgEl=document.createElement('img');
    imgEl.name=products[i].name;
    imgEl.src=products[i].src;

    var pEl=document.createElement('p');
    pEl.textContent=products[i].price;

    var formEl=document.createElement('form');
    var labelEl=document.createElement('label');
    labelEl.textContent='Qty: ';
    var input=document.createElement('input');
    input.min='1';
    input.type='numbner';
    input.name='quantity';
    input.id='quantity'+products[i].name;
    input.value='1';
    var buttonEl=document.createElement('button');
    buttonEl.type='submit';
    buttonEl.textContent='AddtoCart';
    buttonEl.id=products[i].name;
    buttonEl.addEventListener('click',addtoCart);
    formEl.appendChild(labelEl);
    formEl.appendChild(input);
    formEl.appendChild(buttonEl);
    mainEl.appendChild(imgEl);
    mainEl.appendChild(formEl);
    mainEl.appendChild(pEl);
  }

}
//cart constructor
function Cart(cartItems){
  this.cartItems=cartItems;
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
  var cartInfo=JSON.stringify(this.cartItems);
  localStorage.setItem('cartData',cartInfo);
};



//create a new cart
var cart=new Cart(cartItems);
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
  var pEl=document.createElement('p');
  var total=0;
  for(var l=0;l<cartItems.length;l++){
    total+=Number(cartItems[l].quantity);
  }
  pEl.innerHTML=total;
  divEl.appendChild(pEl);
}

function createInstances(){
  new Product('bag','../images/bag.jpg','$13.56');
  new Product('cffc tshirt','../images/cffcTshirt.png','$39.50');
  new Product('cup','../images/cup.jpg','$21.00');
  new Product('hoodie','../images/hoodie.png','$63.90');
  new Product('soccer_boot','../images/soccer_boot.jpg','$83.00');
  new Product('sticker','../images/sticker.jpg','$4.00');
}

createInstances();
render();
