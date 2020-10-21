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


// https://www.java67.com/2018/05/top-75-programming-interview-questions-answers.html
// 1. How to find the missing number in a given integer array of 1 to 50?

var fortyNineNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

// brance.log(fortyNineNumbers.length);
// brance.log(findMissingNumber(fortyNineNumbers))
function findMissingNumber(arrayOfNumbers){
    for(var i = 0; i < fortyNineNumbers.length; i++){
        if(arrayOfNumbers[i] !== arrayOfNumbers[i + 1] - 1){
            return arrayOfNumbers[i] + 1;
        }
    }
}

// 12. How to check if two Strings are anagrams of each other?

// function isAnagram(wordOne, wordTwo){
//     var charArrayOne = wordOne.split("").sort();
//     var charArrayTwo = wordTwo.split("").sort();
//
//     return JSON.stringify(charArrayOne) === JSON.stringify(charArrayTwo);
// }

function isAnagram(wordOne, wordTwo){
    var charArrayOne = wordOne.split("").sort().join();
    var charArrayTwo = wordTwo.split("").sort().join();

    return charArrayOne === charArrayTwo;
}


// brance.log(isAnagram("dog", "god"));



//22. How to check if given String is Palindrome?

function isPalindrome(word){
    var reversedWord = word.split("").reverse().join("");
    return word === reversedWord;
}

function isPalindromeBreakdown(word){
    var reversedWord = word;
    brance.log(reversedWord);
    reversedWord = reversedWord.split("");
    brance.log("reverseWord after .split(\"\"): " + reversedWord);
    reversedWord = reversedWord.reverse();
    brance.log("reverseWord after .reverse(): " + reversedWord);
    reversedWord = reversedWord.join("");
    brance.log("reverseWord after .join(\"\"): " + reversedWord);
    brance.log("The word was " + word + " and after we reverse it, the word is " + reversedWord);
    return word === reversedWord;
}

function isPalindromeTwo(word){
    var reversedWord = "";

    for(var i = word.length - 1; i >= 0; i--){
        reversedWord += word.charAt(i);
    }

    return word === reversedWord;
}

// brance.log(isPalindrome("racecar"));
// brance.log(isPalindrome("car"));
// brance.log(isPalindrome("bob"));
// brance.log(isPalindromeBreakdown("potato"));

// Write a function that prints a Floyd Triangle
// 1
// 2 3
// 4 5 6
// 7 8 9 10

function printFloyd(){
    var currentNumber = 1;
    for(var i = 1; i <= 4; i++){
        var currentRow = "";
        for(var j = 1; j <= i; j++){
            currentRow += currentNumber + " ";
            currentNumber++;
        }
        brance.log(currentRow);
    }
}
// printFloyd();

//https://www.educative.io/blog/level-up-javascript-coding-challenges

//Write a function that accepts an array of strings. Return the longest string.

//Write a function that takes a string, and returns the character that is most commonly used in the string.

//Given a string possibly containing three types of braces ({}, [], ()),
//write a function that returns a Boolean indicating whether the given string contains a valid nesting of braces.

function isValidNesting(string){
    var curlyCount = 0;
    var squareCount = 0;
    var parenthesesCount = 0;

    for(var i = 0; i < string.length; i++){
        var currentChar = string.charAt(i);
        switch (currentChar){
            case "{":
                curlyCount++;
                break;
            case "}":
                curlyCount--;
                break;
            case "[":
                squareCount++;
                break;
            case "]":
                squareCount--;
                break;
            case "(":
                parenthesesCount++;
                break;
            case ")":
                parenthesesCount--;
                break;
        }
    }

    return (squareCount + curlyCount + parenthesesCount) === 0;
}

// brance.log(isValidNesting("if(this works) [we good] [probably] {At least I hope}"));
// brance.log(isValidNesting("if(this works) we good] [probably] {At least I hope}"));


//https://www.florin-pop.com/blog/2019/04/jcc-create-a-phone-number/
// Write a function that accepts an array of 10 integers,
// that returns a string of those numbers in the form of a phone number.
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]


// https://codeguppy.com/code.html?RHA714FYio8gWgmjWYPz
//Coding challenge #17: Calculate the sum of digits of a positive integer number


// Maybe?
//You will be provided with an initial array (the first argument in the destroyer function),
// followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.