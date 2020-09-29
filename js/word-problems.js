// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
// and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3,
//     how much will you have to pay


var littleMermaidDays = 3;
var brotherBearDays = 5;
var herculesDays = 1;

(littleMermaidDays + brotherBearDays + herculesDays) * 3;

//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour.
//Google pays $400, Amazon $380, and Facebook $350.
//How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

var facebookHours = 10;
var googleHours = 6;
var amazonHours = 4;

// var facebookRate = 350;
// var googleRate = 400;
// var amazonRate = 380;

var facebookPay = facebookHours * 350;
var googlePay = googleHours * 400;
var amazonPay = amazonHours * 380;

// (facebookHours * facebookRate) + (googleHours * googleRate) + (amazonHours * amazonRate);
facebookPay + googlePay + amazonPay;



//A student can be enrolled in a class only if the class is not full
// and the class schedule does not conflict with her current schedule.

var isClassFull = false;
var isConflict = false;

var canEnroll = !isClassFull && !isConflict;




var currentClassSize = 20;
var maxClassSize = 30;

var isClassFull = currentClassSize < maxClassSize;

if(!isClassFull && !isConflict){
    canEnroll = true;
}else{
    canEnroll = false;
}

//A product offer can be applied only if a person buys more than 2 items,
//and the offer has not expired. Premium members do not need to buy a specific amount of products.
var itemsBought = 3;
var didBuyTwo = itemsBought > 2;
var expirationDate = "2020-09-20";
var today = "2020-09-25";
var isExpired = expirationDate <= today;
var isPremium = false;

var canGetDiscount;

if(didBuyTwo && !isExpired){
    canGetDiscount = true;
}else if(isPremium && !isExpired){
    canGetDiscount = true;
}else {
    canGetDiscount = false;
}

//Create a variable that holds a boolean value for each of the following conditions:
//
//    the password must be at least 5 characters
//the password must not include the username
//the username must be no more than 20 characters
//neither the username or password can start or end with whitespace

var username = 'codeup';
var password = 'notastrongpassword';

var isFiveCharacters = password.length >= 5;
var doesIncludeUsername = password.indexOf(username) !== -1;
var usernameTooLong = username.length > 20;
var isWhitespace = password.trim() !== password || username.trim() !== username;