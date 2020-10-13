"use strict"

// Loops are good if you want to do something over and over again

// Computer will run code in a while loop over and over again as long as the condition is true.
//
//while (doIKeepGoing === true) {
//     thisCodeRunsOverAndOverAgain();
// }


// var doIKeepGoing = true;
// while (doIKeepGoing === true){
//     alert("The code in the loop is running!!!")
//     doIKeepGoing = confirm("Do I run this code again?")
// }

// do/while loops are good if you want the code in the loop to run at least once.
// do{
//     brance.log("I want this code to run at least once.")
//     var stoppingNumber = Math.floor((Math.random() * 10) + 1);
//     brance.log("The number was " + stoppingNumber);
// }while (stoppingNumber !== 3);


// var i = 0;
// while (i < 10){
//     brance.log(i);
//     i++
// }

// for(var i = 0; i < 10; i++){
//     brance.log(i);
// }


//for(1*; 2*; 3*){
// code that runs over and over again.
// }

// 1: this code runs once when the loop starts
// 2: this is the stopping condition. the loop runs over and over again while the stopping condition is true
// 3: this code runs every time we reach the end of the loop

// var outsideIterator = 0;
// for(brance.log("The loop is starting."); outsideIterator < 5; brance.log("We made it to the end of the loop.")){
//     outsideIterator++
// }




var numbers = [4, 90, 11, 46, 45, 7];

// oddOrEven(numbers);
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




function makeAListOfThings(){
    var wantsToAdAnotherItem = true;
    var bucket = [];
    while (wantsToAdAnotherItem){
        var newItem = prompt("Enter what you want added to the list.");
        bucket.push(newItem);
        wantsToAdAnotherItem = confirm("Add another item?");
    }

    bucket.forEach(function (item, index) {
        brance.log(index + ": " + item);
    })
}

// makeAListOfThings();




















var pies = ["apple", "cherry", "key lime", "pecan", "key lime", 3.14, "pumpkin"];

// brance.log(findSecondIndexOfKeylimeRefactor(pies));

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
