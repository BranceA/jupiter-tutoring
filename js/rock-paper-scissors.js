"use strict"

var wantsToPlay = confirm("You wanna play rock, paper, scissors?")

while (wantsToPlay){
    var someoneWon = false;
    while (!someoneWon){
        var playerChoice = prompt("Type rock paper or scissors");
        var computerChoice = getComputerChoice();
        alert("ROCK PAPER SCISSORS!!!");
        alert("Player: " + playerChoice + "    |     Computer: " + computerChoice)
        if(playerChoice.toLowerCase() === computerChoice){
            alert("It's a tie!!! Get ready to play again.");
        }else {
            var winnerMessage = findWinner(playerChoice, computerChoice);
            alert(winnerMessage);
            someoneWon = true;
        }
    }
    wantsToPlay = confirm("Do you want to play again?");
}
alert("See you later.")



function getComputerChoice(){
    var randomChoice = Math.floor((Math.random() * 3) + 1);
    switch (randomChoice){
        case 1:
            randomChoice = "rock";
            break;
        case 2:
            randomChoice = "paper";
            break;
        case 3:
            randomChoice = "scissors";
            break;
    }
    return randomChoice;
}

function findWinner(pChoice, cChoice){
    if(pChoice === "rock" && cChoice === "scissors"){
        return "YOU WIN!!!";
    }else if(pChoice === "rock" && cChoice === "paper"){
        return "YOU LOSE!!!";
    }else if(pChoice === "paper" && cChoice === "rock"){
        return "YOU WIN!!!";
    }else if(pChoice === "paper" && cChoice === "scissors"){
        return "YOU LOSE!!!";
    }else if(pChoice === "scissors" && cChoice === "paper"){
        return "YOU WIN!!!";
    }else if(pChoice === "scissors" && cChoice === "rock"){
        return "YOU LOSE";
    }
}



// //Initial check to see if the user wants to play. If no then no code will run in the while loop.
// var wantsToPlay = confirm("You wanna play rock, paper, scissors?")
//
// // This loop will continue to run as long as the player keeps wanting to play.
// // There is a confirm at the bottom of the loop that asks the player if they want to continue after every game.
// while (wantsToPlay){
//     // The inner loop will continue to run until there is a winner.
//     // I want the computer and the player to keep playing over and over until there is no tie.
//     // I set the variable to false before the loop runs for the first time because there hasn't even been 1 round yet so there can't be a winner.
//     var someoneWon = false;
//
//     // Inner loop to keep the game going until there is no tie.
//     while (!someoneWon){
//         // Asking player for a choice and capturing response in variable
//         var playerChoice = prompt("Type rock paper or scissors");
//         // Calls function that returns a random string that's either "rock" "paper" or "scissors" and stores the return in a variable
//         var computerChoice = getComputerChoice();
//         // Alert to build suspense.
//         alert("ROCK PAPER SCISSORS!!!");
//         // This alert displays the players choice by concatenating the player and computer choice into a string.
//         alert("Player: " + playerChoice + "    |     Computer: " + computerChoice)
//         // If there's a tie then the alert informs the player that it's a tie AND NOTHING ELSE!!!
//         // The code never looks at the else statement so we end up at the top of the loop since someoneWon is still false
//         if(playerChoice.toLowerCase() === computerChoice){
//             alert("It's a tie!!! Get ready to play again.");
//         }
//         // If there is no tie then there is a winner. Hooray!
//         else {
//             // Here the findWinner function is called by passing the player's and computer's choice as arguments.
//             // The function will return a string of either "YOU WIN!!!" or "YOU LOSE!!!" and we store it in a variable.
//             var winnerMessage = findWinner(playerChoice, computerChoice);
//             // This alert displays the winner message. This was done on 2 lines to read the code easier.
//             alert(winnerMessage);
//             // Since there was no tie we reassign the someoneWon variable to true.
//             // We do this so we don't loop through another round of play. The game is over. Someone won.
//             someoneWon = true;
//         }
//     }
//     // This is outside the inner while loop so it will only run after a winner is declared.
//     // Whether the player hits confirm for true or cancel for false will determine if we start all over with a new game.
//     wantsToPlay = confirm("Do you want to play again?");
// }
//
// // This is outside both loops. This will only run if the player chooses not to play or not play again.
// alert("See you later.")
//
//
// // function to get a random choice for the computer
// function getComputerChoice(){
//     // This line gets a random number between 1 and 3 and stores it in a variable
//     var randomChoice = Math.floor((Math.random() * 3) + 1);
//     // The switch statement will reassign randomChoice to the string of "rock" "paper" or "scissors" depending on the random number
//     switch (randomChoice){
//         case 1:
//             randomChoice = "rock";
//             break;
//         case 2:
//             randomChoice = "paper";
//             break;
//         case 3:
//             randomChoice = "scissors";
//             break;
//     }
//     // This will return randomChoice after it has been reassigned to a string.
//     return randomChoice;
// }
//
// // this function will determine the winner and return the appropriate message to display.
// // The parameters are for the player choice and the computer choice.
// function findWinner(pChoice, cChoice){
//     // an if/else block is used to check all combinations of player and computer choices that don't tie.
//     if(pChoice === "rock" && cChoice === "scissors"){
//         return "YOU WIN!!!";
//     }else if(pChoice === "rock" && cChoice === "paper"){
//         return "YOU LOSE!!!";
//     }else if(pChoice === "paper" && cChoice === "rock"){
//         return "YOU WIN!!!";
//     }else if(pChoice === "paper" && cChoice === "scissors"){
//         return "YOU LOSE!!!";
//     }else if(pChoice === "scissors" && cChoice === "paper"){
//         return "YOU WIN!!!";
//     }else if(pChoice === "scissors" && cChoice === "rock"){
//         return "YOU LOSE";
//     }
// }