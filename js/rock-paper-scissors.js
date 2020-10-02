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

function findWinner(player, computer){
    if(player === "rock" && computer === "scissors"){
        return "YOU WIN!!!";
    }else if(player === "rock" && computer === "paper"){
        return "YOU LOSE!!!";
    }else if(player === "paper" && computer === "rock"){
        return "YOU WIN!!!";
    }else if(player === "paper" && computer === "scissors"){
        return "YOU LOSE!!!";
    }else if(player === "scissors" && computer === "paper"){
        return "YOU WIN!!!";
    }else if(player === "scissors" && computer === "rock"){
        return "YOU LOSE";
    }
}