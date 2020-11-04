"use strict"

var matryoshka = {
    level: 1,
    whatIsHere: "Properties are deadend: a string, rabbithole: another object",
    deadend: "Ha! You can't go any further",
    rabbithole: {
        level: 2,
        whatIsHere: "Properties are colors: an array, goDeeper: another object",
        colors: ["red", "yellow", "blue", "orange", "green"],
        goDeeper: {
            level: 3,
            whatIsHere: "Properties are helloWorld: a function, goEvenDeeper: another object.",
            helloWorld: function (){console.log("Hello World.")},
            goEvenDeeper: {
                level: 4,
                whatIsHere: "Properties are totalLevels: a number, bottom: another object",
                totalLevels: 5,
                bottom: {
                    level: 5,
                    whatIsHere: "Nothing. You've reached the bottom."
                }
            }
        }
    }
}

var rectangleHeight = 6;
var rectangleWidth = 15;
var rectangleBackground = "purple";

function lameRectangleMaker(recHeight, recWidth, recColor){
    var newRectangle = document.createElement("div");
    newRectangle.style.height = recHeight + "em";
    newRectangle.style.width = recWidth + "em";
    newRectangle.style.background = recColor;
    document.body.append(newRectangle);
}

// lameRectangleMaker(rectangleHeight, rectangleWidth, rectangleBackground);



var rectangle = {
    width: 8,
    height: 3,
    rectangleColor: "blue"
}

function makeRectangle(rectangleObject){
    var newRectangle = document.createElement("div");
    newRectangle.style.height = rectangleObject.height + "em";
    newRectangle.style.width = rectangleObject.width + "em";
    newRectangle.style.background = rectangleObject.rectangleColor;
    document.body.append(newRectangle);
}

// makeRectangle(rectangle);


var rectangles = [
    {
        width: 4,
        height: 10,
        rectangleColor: "green"
    },
    {
        width: 11,
        height: 11,
        rectangleColor: "pink"
    },
    {
        width: 9,
        height: 2,
        rectangleColor: "orange"
    }
]

// rectangles.forEach(makeRectangle)

function makeRectangles(rectangleObjectArray){
    rectangleObjectArray.forEach(function (rectangle) {
        var newRectangle = document.createElement("div");
        newRectangle.style.height = rectangle.height + "em";
        newRectangle.style.width = rectangle.width + "em";
        newRectangle.style.background = rectangle.rectangleColor;
        document.body.append(newRectangle);
    })
}

// makeRectangles(rectangles);

