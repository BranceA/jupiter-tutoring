"use strict";

var brance = {
        color: function (newColor){
            document.body.style.color = newColor;
        },
        font: function (newFont){
            document.body.style.fontFamily = newFont;
        },
        log: function (thingToLog){
            var html = document.createElement("div");
            html.innerHTML = "<h1>" + thingToLog + "</h1>";
            document.body.appendChild(html);
    }}





    var test = {
        name: "The dude",
        age: 40,
        greeting: function (){brance.log("Oh hi.")}
    }




// var spacing = '10px';
// var styles =
//     "padding: " + spacing + "; background-color: white; color: green; font-style: italic; border: 1px solid black; font-size: 2em;";
// console.log('%cGeeks for Geeks', styles);