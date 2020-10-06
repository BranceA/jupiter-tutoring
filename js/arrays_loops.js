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



