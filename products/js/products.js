'use strict';
var products=[];
function Product(name,src,price){
  this.name=name;
  this.src=src;
  this.price=price;
  products.push(this);
}
console.log('im running');
console.log(products);

function render(){
  var mainEl=document.getElementById('main-container');
  for(let i=0;i<products.length;i++){
    var imgEl=document.createElement('img');
    imgEl.name=products[i].name;
    imgEl.src=products[i].src;
    var pEl=document.createElement('p');
    pEl.textContent=products[i].price;
    mainEl.appendChild(imgEl);
    mainEl.appendChild(pEl);
  }

}


function createInstances(){
  new Product('bag','../images/bag.jpg','$13.56');
  new Product('cffc tshirt','../images/cffc tshirt.png','$39.50');
  new Product('cup','../images/cup.jpg','$21.00');
  new Product('hoodie','../images/hoodie.png','$63.90');
  new Product('soccer_boot','../images/soccer_boot.jpg','$83.00');
  new Product('sticker','../images/sticker.jpg','$4.00');
}

createInstances();
render();
