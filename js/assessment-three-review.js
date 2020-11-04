"use strict"

// Write a function called isNegative that accepts either a number or numeric string
// and return true if the number is negative and false if it is positive or not a number.




// console.log(isNegative(42)) //expect false
// console.log(isNegative(-38.4)) //expect true
// console.log(isNegative("2.22")) // expect false
// console.log(isNegative("-53")) // expect true
// console.log(isNegative("-.23")) // expect true


// Write a function called portmanteau that accepts an array of strings
// and returns a string that is a combination of all words

// console.log(portmanteau(["Row", "row", "fight", "the", "power"]))
// console.log(portmanteau(["Hello", "world"]))
// console.log(portmanteau(["one", "two", "three", "four"]))


// Write a function called noRoberts that accepts an array of strings and
// returns an array that removes all forms of Robert: Robert, Rob, Bob, Bobby, Bobert, Robby



// console.log(["Jim", "Bob", "Martha", "Robert", "Lucille"]);
// console.log(["Hank", "bob", "Robby", "Gertrude", "larry"]);
// console.log(["rob", "sally", "Susan", "Roberto", "roger"]);
// console.log(["Joebob", "roBert", "samantha", "Niel", "rboert"]);



// Write a function called rectangleConstructor that accepts 3 parameters and returns a rectangle object
// The parameters will be 2 numbers for the width and height and a string for rectangleColor.
// return object should be:
// {
//     height: 42,
//     width: 42,
//     rectangleColor: "pink"
// }



// makeRectangle(rectangleConstructor(4, 8, "green"));
// makeRectangle(rectangleConstructor(10, 10, "orange"));
// makeRectangle(rectangleConstructor(20, 5, "pink"));



// Write a function called findLargest that accepts an array of rectangle objects
// and returns the rectangle object that has the largest area

// var rectanglesOne = [{height: 3, width: 7, color: "blue"}, {height: 13, width: 4, color: "pink"}, {height: 40, width: 18, color: "purple"}]
// var rectanglesTwo = [{height: 10, width: 10, color: "yellow"}, {height: 88, width: 7, color: "red"}, {height: 5, width: 6, color: "green"}]
// console.log(findLargest(rectanglesOne))
// console.log(findLargest(rectanglesTwo))

// Write a function called orderDigits that accepts a number
// and returns a number with the digits ordered from smallest to largest


// console.log(orderDigits(847293))
// console.log(orderDigits(6463))
// console.log(orderDigits(29865))
// console.log(orderDigits(3876042))
// console.log(orderDigits(4367))





// Write a function called findWeapon that accepts a D&D character object and
// returns a string of the name of their weapon

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