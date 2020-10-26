"use strict";

// DOM === Document Object Model

// document is the webpage
// You use the document to get data from html and manipulate it.
// What does the Object Model part mean?
// Write code --> get html and stick it in variable --> access html properties with a javascript object.



// How do I grab html elements to do shenanigans?

// document.getElementById("insertHtmlIdHere");
// Ids are unique so this will always return 1 html element.
var welcomeH1 = document.getElementById("welcome");
console.log(welcomeH1);
// Use this to see all the properties of the element.
// console.dir(welcomeH1);

// document.getElementsByClassName("insertHtmlClass");
// Many elements can have the same class so this will return an array with all elements
// with the class name you pass the method.
// Even if there is only 1 element with the class it will return an array with 1 element.

var awesomeElements = document.getElementsByClassName("awesome-class");
console.log(awesomeElements);

// document.getElementsByTagName("insertHtmlTag");
// indiscriminately grabs every single tag you pass this method.
// returns an array just like getElementsByClassName.
var powerRangers = document.getElementsByTagName("li");
console.log(powerRangers);


// Ok I have elements. Now how to I perform shenanigans?
// variableName.innerText --> Returns what text is in the html element.
// variableName.innerText = "New text" --> Changes the text to "New text"
// The dot notation works just like the dot notation for objects because THEY ARE OBJECTS.



// variableName.innerHtml --> Returns what html is in the html element.
// variableName.innerHtml = "<p>Text in new html<p/>" --> Changes the html in the variable to a paragraph tag with
// the text "Text in new html"

// I use the id of "morphin-time" to get my unordered list.
// The unordered list innerHtml currently has 5 <li>s with power ranger stuff as text.
var rangerList = document.getElementById("morphin-time");

// This changes the html inside of the <ul> to three <li>s with New things as text
// rangerList.innerHTML = "<li>New thing 1</li><li>New thing 2</li><li>New thing 3</li>"