"use strict"

//At least 5 characters long
//No more than 12 characters long
//Contains at least 1 capital letter
//Contains at least 1 lowercase letter
//Contains at least 1 special character

var password = "G00dP@ssword";
// var password = "Password";
// var password = "password";



if(password.length >= 5){
    brance.log("It's long enough");
}

if(password.length <= 12){
    brance.log("But not too long");
}

if(password !== password.toLowerCase()){
    brance.log("We found a capital letter!!");
}

if(password !== password.toUpperCase()){
    brance.log("We found a lowercase letter");
}









//
// var capLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//
// for(var i = 0; i < capLetters.length; i++){
//     if(password.indexOf(capLetters[i]) !== -1){
//         alert("WE FOUND A " + capLetters[i]);
//     }
// }











// function calculateTip(percentage, bill) {
//     return (percentage * bill)
// }
//
// var billTotal = prompt ("How much was your bill?");
// var tipPercentage = prompt("What percentage do you want to tip?");
//
//
// if(tipPercentage < 1){
//     alert("You want to tip $" + (calculateTip(tipPercentage, billTotal).toFixed(2)));
// }else {
//     alert("You want to tip $" + (calculateTip(tipPercentage/100, billTotal).toFixed(2)));
// }









//
// if (tipPercentage < 1) {
//     alert("You want to tip $" + (calculateTip(tipPercentage, billTotal).toFixed(2)));
// } else {
//     alert("You want to tip $" + (calculateTip((tipPercentage/100), billTotal).toFixed(2)));
// }