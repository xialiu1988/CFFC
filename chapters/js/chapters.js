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
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  'TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'];

var emailInfo = ['chapterone@CSSFontFaceRule.com', 'chaptertwo@CSSFontFaceRule.com', 'chapterthree@CSSFontFaceRule.com'];

var allChapters=[];
var arrayChapterNames=['Chapter 1', 'Chapter 2', 'Chapter 3'];
var counterDOM = document.getElementById('counter');
var counter = 0;

function showCart(){
  var membershipData = JSON.parse(localStorage.getItem('membershipData'));
  var productData = JSON.parse(localStorage.getItem('productData'));
  counter = membershipData.length;
  for(var i=0; i<productData.length; i++){
    counter+= Number(productData[i].quantity);
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
