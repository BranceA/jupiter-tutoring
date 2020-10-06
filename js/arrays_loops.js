"use strict"

var numbers = [4, 90, 11, 46, 45, 7];

oddOrEven(numbers);
// loopBreakdown(numbers);

function oddOrEven(numbersArray){
    for(var i = 0; i < numbersArray.length; i++){
        if(numbersArray[i] % 2 === 0){
            brance.log(numbersArray[i] + " is even.");
        }else {
            brance.log(numbersArray[i] + " is odd.");
        }
    }
}

function loopBreakdown(arrayOfNumbers){
    brance.log("Loop starting.")
    for(var i = 0; i < arrayOfNumbers.length; i++){
        brance.log("===========================");
        brance.log("i is " + i + ". The length of arrayOfNumbers is " + arrayOfNumbers.length);
        brance.log(i + " < " + arrayOfNumbers.length + " evaluates to true so the loop runs again.")
        brance.log("The number at arrayOfNumbers[" + i + "] is " + arrayOfNumbers[i]);
        brance.log("arrayOfNumbers[" + i + "] % 2 === 0 evaluates to " + (arrayOfNumbers[i] % 2 === 0));
        if(arrayOfNumbers[i] % 2 === 0){
            brance.log(arrayOfNumbers[i] + " is even so the code in the if statement runs.");
        }else {
            brance.log(arrayOfNumbers[i] + " is odd so the code in the else statement runs.")
        }
        brance.log("At the end of the loop i++ happens so now i is " + (i + 1));
        brance.log("===========================");
    }
}

var pies = ["apple", "cherry", "key lime", "pecan", "key lime", 3.14, "pumpkin"];

brance.log(findSecondIndexOfKeylime(pies));

function findSecondIndexOfKeylime(pieArray){
    var totalKeylimes = 0;
    for(var i = 0; i < pieArray.length; i++){
        if(pieArray[i] === "key lime"){
            if(totalKeylimes === 0){
                totalKeylimes++;
            }else {
                return i;
            }
        }
    }

    return "There ain't 2 key lime pies."
}

function findSecondIndexOfKeylimeRefactor(pieArray){
    for(var i = pieArray.indexOf("key lime") + 1; i < pieArray.length; i++){
        if(pieArray[i] === "key lime"){
            return i;
        }
    }
    return "There ain't 2 key lime pies."
}

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