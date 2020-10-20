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

brance.log(fortyNineNumbers.length);
brance.log(findMissingNumber(fortyNineNumbers))
function findMissingNumber(arrayOfNumbers){
    for(var i = 0; i < fortyNineNumbers.length; i++){
        if(arrayOfNumbers[i] !== arrayOfNumbers[i + 1] - 1){
            return arrayOfNumbers[i] + 1;
        }
    }
}