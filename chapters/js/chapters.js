'use strict';
var chapterOne = document.getElementById('chapterOne');
var chapterTwo = document.getElementById('chapterTwo');
var chapterThree = document.getElementById('chapterThree');
var chapters = [chapterOne, chapterTwo, chapterThree];
var venueInfo = [
  'Drink and Dine All Day sports bar',
  'Everything Sports and more pub',
  'We Live Soccer sports bar and club'
];

var eventInfo = [
  'The Seattle Chapter for Code Fellows Football Club supporters gorup is located at Code Fellows Building Seattle. We were established on Jan 1 2009. Our goal is to get the supporters of our club together and create a family environment for everyone to support and poromote our football club. Our captain Sam Ham thrives on making sure our support group is always prepared for showing our support to the club. We are often found on gamedays on our official venue partner Drink and Dine All Day sports bar.',
  'The Kent Chapter for Code Fellows Football Club is located at Kent Soccer Park. We were founded on Jan 1 2009. Our motto is to have a group that can pass the CFFC way of life to soming generations. Our captain Williams Osunkwo has been a member of the club for five years and always makes sure the supporters have the greatest experiences during gamedays. He has even developed a supporters team who play soccer every Saturdays at Kent Soccer Park. Our venue partner Everything Sports and more pub is where we are on gamedays.',
  'The Redmond Chapter for Code Fellows Football Club is located at Red and Mond sporting complex. We were established on Jan 1 2009. Our captain David Marchante built this chapter from the ground up and still going stong. We collaborated with our venue partner We Live Soccer sports bar and club to make sure we can see every CFCC games live. We are heavily involved in our community as well through Lets Clean and play event, where community members and our support group members play soccer every week and afterwards cleanup the community'];

var emailInfo = ['chapterone@cffcsupport.com', 'chaptertwo@cffcsupport.com', 'chapterthree@cffcsupport.com'];

var allChapters=[];
var arrayChapterNames=['Seattle Chapter', 'Kent Chapter', 'Redmond Chapter'];
var counterDOM = document.getElementById('counter');
var counter = 0;

function showCart(){
  var membershipData = JSON.parse(localStorage.getItem('membershipData'));
  var productData = JSON.parse(localStorage.getItem('productData'));
  if(membershipData !== null){
    counter = membershipData.length;
  }
  if(productData !== null){
    for(var i=0; i<productData.length; i++){
      counter+= Number(productData[i].quantity);
    }
  }
  counterDOM.innerHTML = counter;
}

showCart();

var ChapterPage = function(shield, chapterName){
  this.shield=shield;
  this.chapterName=chapterName;
  // this.event=event;
  // this.contact=contact;
  // this.venue=venue;
  allChapters.push(this);
};

function generatePage(){
  new ChapterPage('../images/cf-logo-shield.png', 'Chapter 1');
  new ChapterPage('../images/cf-logo-shield.png', 'Chapter 2');
  new ChapterPage('../images/cf-logo-shield.png', 'Chapter 3');
}

generatePage();

function displayChapter(){
  for(var i=0; i<allChapters.length; i++){
    var placeholderShieldDOM = document.createElement('img');
    var placeholderChapterNameDOM = document.createElement('h2');
    var placeholderEventDOM = document.createElement('h3');
    var placeholderEventDescriptionDOM = document.createElement('p');
    var placeholderContactHeading = document.createElement('h3');
    var placeholderContact = document.createElement('p');
    var placeholderVenueHeading = document.createElement('h3');
    var placeholderVenue = document.createElement('p');

    placeholderShieldDOM.src=allChapters[i].shield;
    chapters[i].appendChild(placeholderShieldDOM);
    placeholderChapterNameDOM.textContent=arrayChapterNames[i];
    chapters[i].appendChild(placeholderChapterNameDOM);
    placeholderEventDOM.innerHTML='About us:';
    chapters[i].appendChild(placeholderEventDOM);
    placeholderEventDescriptionDOM.innerHTML=eventInfo[i];
    chapters[i].appendChild(placeholderEventDescriptionDOM);
    placeholderContactHeading.innerHTML = 'Contact Info:';
    chapters[i].appendChild(placeholderContactHeading);
    placeholderContact.textContent = emailInfo[i];
    chapters[i].appendChild(placeholderContact);
    placeholderVenueHeading.innerHTML = 'Venue: ';
    chapters[i].appendChild(placeholderVenueHeading);
    placeholderVenue.textContent = venueInfo[i];
    chapters[i].appendChild(placeholderVenue);
  }
}

displayChapter();
