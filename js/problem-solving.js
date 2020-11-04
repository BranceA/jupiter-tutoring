"use strict";

// Write a function that accepts an array of names
// and returns the name that starts with "j" and is alphabetically first.

var names = ["hank", "jim", "gertrude", "john", "sally", "james"];

// Finds the first name that starts with "j"
function doSomething(array){
    for(var i = 0; i < array.length; i++){
        if(array[i].charAt(0).toLowerCase() === "j"){
            return array[i];
        }
    }
    return false;
}

// Returns an array of all names that start with "j"
function doSomethingTwo(array){
    var bucket = [];
    for(var i = 0; i < array.length; i++){
        if(array[i].charAt(0).toLowerCase() === "j"){
            bucket.push(array[i]);
        }
    }
    return bucket;
}

// Solves the problem
function doSomethingThree(array){
    var bucket = [];
    for(var i = 0; i < array.length; i++){
        if(typeof array[i] === "string" && array[i].charAt(0).toLowerCase() === "j"){
            bucket.push(array[i]);
        }
    }

    bucket.sort();

    return bucket[0];
}

// brance.log(doSomething(names));
// brance.log(doSomethingTwo(names));
// brance.log(doSomethingThree(names));


//How to check if given String is Palindrome?

function isPalindrome(word){
    var reversedWord = word.split("").reverse().join("");
    return word === reversedWord;
}

function isPalindromeBreakdown(word){
    var reversedWord = word;
    brance.log(reversedWord);
    reversedWord = reversedWord.split("");
    console.log(reversedWord);
    reversedWord = reversedWord.reverse();
    console.log(reversedWord);
    reversedWord = reversedWord.join("");
    brance.log(reversedWord);

    return reversedWord === word;
}


function isPalindromeTwo(word){
    var reversedWord = "";
    for(var i = word.length - 1; i >= 0; i--){
        reversedWord += word[i];
    }

    return reversedWord === word;
}

// brance.log(isPalindromeTwo("tacocat"))








// https://www.java67.com/2018/05/top-75-programming-interview-questions-answers.html
// 1. How to find the missing number in a given integer array of 1 to 50?

var fortyNineNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

// Array of numbers from 1 to 50
// 1 number will be missing and I need to find it
// Probably a loop
// returning 1 number
// these are in order then look at a number and see if the next number +1

// return a number if it's missing
function whatMissingNumber(numberArray){
    if(numberArray[0] === 2){
        return 1;
    }

    for(var i = 0; i < numberArray.length; i++){
        if(numberArray[i] !== numberArray[i + 1] - 1){
            return numberArray[i] + 1;
        }
    }


}

// brance.log(whatMissingNumber(fortyNineNumbers))








// 12. How to check if two Strings are anagrams of each other?

// 2 parameters to get the strings I wanna check
// What is an anagram? Same letters in different order to make different words

// computer don't care what they are in
// if the same letters are present we're good


function isAnagrams(string1, string2){

    var charArray1 = string1.split("").sort().join("");
    var charArray2 = string2.split("").sort().join("");

    return charArray1 === charArray2;
}


// brance.log(isAnagrams("egg", "geg"));

// brance.log(isAnagrams("goat", "goats"));





// Write a function that prints a Floyd Triangle
// 1
// 2 3
// 4 5 6
// 7 8 9 10



function floyd(){
    var count = 1;
    for(var i = 1; i <= 4; i++){
        var rowOutput = "";
        for(var j = 1; j <= i; j++){
            rowOutput = rowOutput + count + " ";
            count++
        }
        brance.log(rowOutput);
    }
}

// floyd();









//https://www.educative.io/blog/level-up-javascript-coding-challenges

//Write a function that accepts an array of strings. Return the longest string.




//Write a function that takes a string, and returns the character that is most commonly used in the string.

// takes in a string --> a parameter
// whatever is in the string, what shows up the most
// pretty what letter count is highest

// turn into an array and separate counters

// put in an array and sort. at least group same characters

// probably going to want to loop

// banana

function mostCommonChar(word){
    var wordArray = word.split("").sort();
    var currentHighestCount = 0;
    var currentCharWinner = "";
    while(wordArray.length > 0){
        if(wordArray.lastIndexOf(wordArray[0]) + 1 > currentHighestCount && wordArray[0] !== currentCharWinner){
            currentCharWinner = wordArray[0];
            currentHighestCount = wordArray.lastIndexOf(wordArray[0]) + 1;
        }
        wordArray.shift();
    }
    return currentCharWinner;
}

function samsMostCommonChar(word){
    var wordArray = word.split("");
    var chars = [];
    var tally = [];
    for(var i = 0; i < wordArray.length; i++){
        if(chars.indexOf(wordArray[i]) === -1){
            chars = [...chars, wordArray[i]];
            tally = [...tally, 1];
        }else{
            tally[chars.indexOf(wordArray[i])] = tally[chars.indexOf(wordArray[i])] + 1;
        }
        console.log(chars);
        console.log(tally);
    }
    var highestTally = Math.max(...tally)
    var highestCharIndex = tally.indexOf(highestTally)
    return chars[highestCharIndex];
}

function countingChars(str){
    var charCount = {};
    var maxCharCount = 0;
    var maxChar = '';
    for(var i = 0; i < str.length; i++) {
        charCount[str[i]] = ++charCount[str[i]] || 1;
    }
    for(var key in charCount) {
        if(charCount[key] >= maxCharCount) {
            maxCharCount = charCount[key]
            maxChar = key;
        }
    }
    return maxChar;
}

// brance.log(samsMostCommonChar("banana"));
// brance.log(samsMostCommonChar("tennessee"));
// brance.log(samsMostCommonChar("potato"));


//Given a string possibly containing three types of braces ({}, [], ()),
//write a function that returns a Boolean indicating whether the given string contains a valid nesting of braces.


// outside info is a string. 1 parameter.
function isValidNesting(stringToCheck){
    // I don't care about total
    // I only care if they are even
    var roundBraces = 0;
    var squareBraces = 0;
    var curlyBraces = 0;
    // I want a loop
    // I'm thinking for loop to iterate over the string
    for(var i = 0; i < stringToCheck.length; i++){
        var currentChar = stringToCheck.charAt(i);
        //need condition to do appropriate math
        switch (currentChar){
            case "(":
                roundBraces++
                break;
            case ")":
                roundBraces--
                break;
            case "[":
                squareBraces++
                break;
            case "]":
                squareBraces--
                break;
            case "{":
                curlyBraces++
                break;
            case "}":
                curlyBraces--
                break;
        }
    }
    // If there are equal opening and closing braces then all variables will be 0
    return roundBraces + squareBraces + curlyBraces === 0;
}


// brance.log(isValidNesting("if(this works) [we good] [probably] {At least I hope}"));
// brance.log(isValidNesting("if(this works) we good] [probably] {At least I hope}"));





//https://www.florin-pop.com/blog/2019/04/jcc-create-a-phone-number/
// Write a function that accepts an array of 10 integers,
// that returns a string of those numbers in the form of a phone number.
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]







// https://codeguppy.com/code.html?RHA714FYio8gWgmjWYPz
//Coding challenge #17: Calculate the sum of digits of a positive integer number









//https://codeguppy.com/code.html?bUduoyY6FfwV5nQGdXzH
//Coding challenge #26: Create a function that will receive two arrays
// and will return an array with elements that are in the first array but not in the second

// receive two arrays. this means two parameters

function uniqueToFirstArray(arrayOne, arrayTwo){
    // comparing the arrays
    // some kind of loop possibly
    // Going to need to loop through 1 or maybe both arrays

    //keep in mind that it is elements in the first but not the second
    //return an array with the stuff that meets criteria

    var bucket = [];
    arrayOne.forEach(function (value) {
        //Which do I start with?
        if(!arrayTwo.includes(value)){
            bucket.push(value);
        }
    })
    return bucket;
}
var testArr = [1, false, "dog", 3.14, "Hello"];
var testArrTwo = [1, true, "cat", 3.14, "Hello"];

// console.log(uniqueToFirstArray(testArr, testArrTwo));


//Good morning! Here's your coding interview problem for today.
//
// This problem was asked by LinkedIn.
//
// Given a string, return whether it represents a number. Here are the different kinds of numbers:
//
// "10", a positive integer
// "-10", a negative integer
// "10.1", a positive real number
// "-10.1", a negative real number
// "1e5", a number in scientific notation
// And here are examples of non-numbers:
//
// "a"
// "x 1"
// "a -2"
// "-"

function numberDeets(possibleNumber){
    if(!possibleNumber.match(/\d/g) || possibleNumber.match(/[a-d f-z]/g)){
        return possibleNumber + " ain't a number."
    }else if(possibleNumber.match(/^\d+[e]\d+$/)){
        return possibleNumber + " is a number in scientific notation."
    }else if(possibleNumber.match(/-\d+\.\d+/)){
        return possibleNumber + " is a negative real number."
    }else if(possibleNumber.match(/\d+\.\d+/)){
        return possibleNumber + " is a positive real number."
    }else if(possibleNumber.match(/-\d/)){
        return possibleNumber + " is a negative integer."
    }else if(!possibleNumber.match(/\D/)){
        return possibleNumber + " is a positive integer."
    }else {
        return possibleNumber + " ain't a number."
    }
}

// console.log(numberDeets("10"));
// console.log(numberDeets("-10"));
// console.log(numberDeets("10.1"));
// console.log(numberDeets("-10.1"));
// console.log(numberDeets("1e5"));
//
// console.log(numberDeets("1e2e8"));
//
// console.log(numberDeets("a"));
// console.log(numberDeets("x 1"));
// console.log(numberDeets("a -2"));
// console.log(numberDeets("-"));
