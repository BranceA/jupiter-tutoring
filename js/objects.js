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