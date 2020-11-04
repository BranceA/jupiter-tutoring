"use strict";

// DOM === Document Object Model

// document is the webpage
// You use the document to get data from html and manipulate it.
// What does the Object Model part mean?
// Write code --> get html and stick it in variable --> access/modify html properties with a javascript object.


// How do I grab html elements to do shenanigans?

// document.getElementById("insertHtmlIdHere");
// Ids are unique so this will always return 1 html element.
var welcomeH1 = document.getElementById("welcome");
// console.log(welcomeH1);


// Use this to see all the properties of the element (or any javascript object).
console.dir(welcomeH1);
var thatHThree = welcomeH1.nextElementSibling;

console.dir(thatHThree)



// document.getElementsByClassName("insertHtmlClass");
// Many elements can have the same class so this will return an array with all elements
// with the class name you pass the method.
// Even if there is only 1 element with the class it will return an array with 1 element.

var awesomeElements = document.getElementsByClassName("awesome-class");
// console.log(awesomeElements);

// document.getElementsByTagName("insertHtmlTag");
// indiscriminately grabs every single tag you pass this method.
// returns an array just like getElementsByClassName.
var thatList = document.getElementsByTagName("ul");
console.log(thatList);

var powerRangers = document.getElementsByTagName("li");
console.dir(thatList[0]);

for(let ranger of powerRangers){
    console.log(ranger.innerText);
}


// Ok I have elements. Now how to I perform shenanigans?

// variableName.innerText --> Returns what text is in the html element.
// variableName.innerText = "New text" --> Changes the text to "New text"
// The dot notation works just like the dot notation for objects because THEY ARE OBJECTS.

// document.getElementById("list-title"); returns the <h1> above the unordered list and stores it in a variable.
// The inner text is currently "Extinct animals"
var listTitle = document.getElementById("list-title");

// This changes the text inside the html to "GO GO POWER RANGERS!!!"
// listTitle.innerText = "GO GO POWER RANGERS!!!";


// variableName.innerHtml  --> Returns what html is in the html element.
// variableName.innerHtml = "<p>Text in new html<p/>" --> Changes the html in the variable to a paragraph tag with
// the text "Text in new html"

// I use the id of "morphin-time" to get my unordered list.
// The unordered list innerHtml currently has 5 <li>s with power ranger stuff as text.
var rangerList = document.getElementById("morphin-time");

// This changes the html inside of the <ul> to three <li>s with New things as text
// rangerList.innerHTML = "<li>New thing 1</li><li>New thing 2</li><li>New thing 3</li>"



// Ok that's pretty cool I guess. What else can I do?
// Change the css. Any css. Make things bigger or smaller or red or move it somewhere else.
// If a css property exists you can mess with it with style.
// Literally with style. variableName.style to be more specific.

var stylishDiv = document.getElementById("stylish-div");
// stylishDiv.style.color = "green";
// stylishDiv.style.background = "hotpink";
// stylishDiv.style.height = "20em";


// Why on earth would I do this instead of just writing the html and css right the first time?
// because event listeners.

// Event listeners wait for certain things to happen and code fires when that event happens.
// Most common event listeners are mouse clicks and button presses but there are a ton of options.

// Grab the h1 with id of "comic-sansify"
var comicSansHeading = document.getElementById("comic-sansify");

comicSansHeading.addEventListener("click", function (ev) {
    // Grabs all h1s.
    var hOnes = document.getElementsByTagName("h1");
    // getElementsByTagName returns an array.
    // We can't apply style to an array so we loop through the h1s and apply style to each h1 one at a time.
    for(var i = 0; i < hOnes.length; i++){
        hOnes[i].style.fontFamily = "Comic Sans MS";
    }
})



// Grabs the button that says grow
var growButton = document.getElementById("make-big");

// Adds an event listener that waits for a button click.
// When the button is clicked the callback function fires.
growButton.addEventListener("click", function (ev) {
    // There is no font size at first so the first click I have to set it to something
    // because I can't do math on an empty string.
    if(growButton.style.fontSize === ""){
        growButton.style.fontSize = "16px"
    }
    // .style.fontSize is a string because it isn't just a number, it's a number and a unit of measure(px, em, etc)
    // This is why I have to parse the number, do math, turn it back to a string and concat "px" at the end.
    growButton.style.fontSize = (parseFloat(growButton.style.fontSize) * 2).toString() + "px";
})


// I need to teach you about this
// this is wonderful
// this is a powerful tool

// Seriously though I'm talking about the keyword: this
// this refers to whatever element the event listener is attached to.
// if you click on a button this refers to the button that was clicked on.
// if you have a button press listener on an input, this refers to the input.

// I don't want all buttons so I gave a class of "background-changer"
// to all buttons I want to be able change the background color
var backgroundChangers = document.getElementsByClassName("background-changer");

// Gotta loop through and add event listeners one at a time?
for(var i = 0; i < backgroundChangers.length; i++){
    // an event listener looking for a click event is added to each button
    backgroundChangers[i].addEventListener("click", function (event){
        console.log(this);
        document.body.style.backgroundColor = this.id;
    })
}

// Grabbing the input
var changeInput = document.getElementById("change-input");

// New event lister "keydown". The code will fire everytime a key is pressed down.
changeInput.addEventListener("keydown", function (event) {
    // Grabbing the heading right above the input.
    var changingHeading = document.getElementById("changing-heading");
    // The event listener is attached to the input so this refers to the input.
    // .value refers to what value is in the input.
    // For a text input .value refers to the text in the input.
    var newText = this.value;

    changingHeading.innerText = newText;
})