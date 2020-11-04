"use strict"

// Write a function called isNegative that accepts either a number or numeric string
// and return true if the number is negative and false if it is positive or not a number.

// Parameter is either a number or string.
function isNegative(input){
    return !(isNaN(input) || parseFloat(input) > 0);
}

function isNegativeTwo(input){
    if(isNaN(input) || parseFloat(input) > 0){
        return false;
    }else{
        return true;
    }
}

// console.log(isNegative(42)) //expect false
// console.log(isNegative(-38.4)) //expect true
// console.log(isNegative("2.22")) // expect false
// console.log(isNegative("-53")) // expect true
// console.log(isNegative("-.23")) // expect true
// console.log(isNegative("45hwhg23"))


// Write a function called portmanteau that accepts an array of strings
// and returns ONE string that is a combination of all words

//1 parameter but it's an array so there's going to be be a lot of stuff
function portmanteau(arrayOfStrings){
    // How to combine words? concat seems good
    // I want a loop because I want to do something with every element in the array

    // Have a string variable to act as a "bucket"
    var superString = "";
    for(var i = 0; i < arrayOfStrings.length; i++){
        superString += arrayOfStrings[i].trim();
    }
    return superString;
}

// function portmanteau(arrayOfStrings){
//     for(var i = 0; i < arrayOfStrings.length; i++){
//         arrayOfStrings[i] = arrayOfStrings[i].trim();
//     }
//     return arrayOfStrings.join("");
// }

// console.log(portmanteau(["Row ", "row", "fight", "the", "power"]))
// console.log(portmanteau(["Hello", " world"]))
// console.log(portmanteau(["one", "two ", "three", "four"]))


// Write a function called noRoberts that accepts an array of strings and
// returns an array that removes all forms of Robert: Robert, Rob, Bob, Bobby, Bobert, Robby
// should be case insensitive

// function noRoberts(arrayOfNames){
//     //Need a loop because I need to check all the names
//
//     // Going to be pushing things into the bucket
//     // The things are going to be the not roberts
//     var bucket = [];
//     arrayOfNames.forEach(function (possibleRobert){
//         possibleRobert = possibleRobert.toLowerCase();
//         // I could do .includes or .indexOf !== -1
//         if(!(possibleRobert === "robert" || possibleRobert === "rob" || possibleRobert === "bob" || possibleRobert === "bobby" || possibleRobert === "bobert" || possibleRobert === "robby")){
//             bucket.push(possibleRobert);
//         }
//     })
//     return bucket;
// }

function noRoberts(arrayOfNames){
    var typesOfRobert = ["robert", "rob", "bob", "bobby", "bobert", "robby"];
    var bucket = [];
    arrayOfNames.forEach(function (possibleRobert){
        possibleRobert = possibleRobert.toLowerCase();
        if(!typesOfRobert.includes(possibleRobert)){
            bucket.push(possibleRobert);
        }
    })
    return bucket;
}

console.log(noRoberts(["Jim", "Bob", "Martha", "Robert", "Lucille"]));
console.log(noRoberts(["Hank", "bob", "Robby", "Gertrude", "larry"]));
console.log(noRoberts(["rob", "sally", "Susan", "Roberto", "roger"]));
console.log(noRoberts(["Joebob", "roBert", "samantha", "Niel", "rboert"]));



// Write a function called rectangleConstructor that accepts 3 parameters and returns a rectangle object
// The parameters will be 2 numbers for the width and height and a string for rectangleColor.
// return object should be:
// {
//     height: 42,
//     width: 42,
//     rectangleColor: "pink"
// }

// three parameters
function rectangleConstructor(ht, wt, color){
    var newRectangle = {
        height: parseFloat(ht),
        width: parseFloat(wt),
        rectangleColor: color
    }

    return newRectangle;
}

// function rectangleConstructor(ht, wt, color){
//     var newRectangle = {};
//     newRectangle.height = ht;
//     newRectangle.width = wt;
//     newRectangle.rectangleColor = color;
//
//     return newRectangle;
// }





makeRectangle(rectangleConstructor(4, 8, "green"));
makeRectangle(rectangleConstructor(10, 10, "orange"));
makeRectangle(rectangleConstructor(20, 5, "pink"));



// Write a function called findLargest that accepts an array of rectangle objects
// and returns the rectangle object that has the largest area

// Dealing with array of objects
//  area of a rectangle is width * height
// keep track of what has greatest area and return the object with that largest area
function findLargest(arrayOfRectangles){
    var areaWinner = 0;
    var largestArea = 0;

    // I'm going to need a loop. I want to look at all the objects
    arrayOfRectangles.forEach(function (rectangle){
        // I check the rectangle I'm currently on to see if it's area is larger than the largest area I've found so far.
        // If so then I update the largest area and largest rectangle
        if(rectangle.height * rectangle.width > largestArea){
            areaWinner = rectangle;
            largestArea = rectangle.height * rectangle.width;
        }
    })
    return areaWinner;
}

// function findLargest(arrayOfRectangles){
//     arrayOfRectangles.sort(function (a, b){
//         return (b.height * b.width) - (a.height * a.width);
//     })
//     return arrayOfRectangles[0];
// }

var rectanglesOne = [{height: 3, width: 7, color: "blue"}, {height: 13, width: 4, color: "pink"}, {height: 40, width: 18, color: "purple"}]
var rectanglesTwo = [{height: 10, width: 10, color: "yellow"}, {height: 88, width: 7, color: "red"}, {height: 5, width: 6, color: "green"}]
console.log(findLargest(rectanglesOne))
console.log(findLargest(rectanglesTwo))




// Write a function called orderDigits that accepts a number
// and returns a number with the digits ordered from smallest to largest


// console.log(orderDigits(847293))
// console.log(orderDigits(6463))
// console.log(orderDigits(29865))
// console.log(orderDigits(3876042))
// console.log(orderDigits(4367))





// Write a function called findWeapon that accepts a D&D character object and
// returns a string of the name of their weapon

function findWeapon(dndCharacter){
    // I need a loop
    // I need to loop over the inventory?
    var playerWeapon = "";
    for(var i = 0; i < dndCharacter.inventory.length; i++){
        if(dndCharacter.inventory[i].itemType === "Weapon"){
            playerWeapon = dndCharacter.inventory[i].itemName;
        }
    }
    return playerWeapon;
}

var playerOne = {
    name: "Murder Hobo",
    class: "Barbarian",
    inventory: [
        {
            itemName: "Health Potion",
            itemType: "Potion"
        },
        {
            itemName: "Deck of many things",
            itemType: "Bad idea"
        },
        {
            itemName: "Great Axe",
            itemType: "Weapon"
        }
    ]
}

var playerTwo = {
    name: "Min Max",
    class: "Fighter",
    inventory: [
        {
            itemName: "Long sword",
            itemType: "Weapon"
        },
        {
            itemName: "Ration",
            itemType: "Annoying thing to track"
        },
        {
            itemName: "Elephant",
            itemType: "Mount"
        }
    ]
}

var playerThree = {
    name: "Rules Lawyer",
    class: "Wizard",
    inventory: [
        {
            itemName: "Rat",
            itemType: "Friend"
        },
        {
            itemName: "Peasant rail gun",
            itemType: "Weapon"
        },
        {
            itemName: "Pointy Hat",
            itemType: "Clothing"
        }
    ]
}

console.log(findWeapon(playerOne));
console.log(findWeapon(playerTwo));
console.log(findWeapon(playerThree));