// ---------- Build a Stop Watch
// Define an object called stopWatch.
//     Include the following properties...
// intervalId
// count
// Include the following methods...
// start() - starts console logging an increasing count every second
// pause() - pauses counter
// reset() - stops counter and resets count to zero

"use strict"
var intervalId = 0;
var count = 0;

// Include properties
// 2 properties
// 3 methods
var stopWatch = {
    // These will be methods
    start: function (){
        intervalId = setInterval(function (){
            if(isNaN(count)){
                count = 0;
            }
            count++
            document.getElementById("current-time").innerText = count;
        }, 1000);
    },
    pause: function (){
        clearInterval(intervalId);
    },
    reset: function (){
        count = 0;
        clearInterval(intervalId);
        document.getElementById("current-time").innerText = "0";
    }
}

var startButton = document.getElementById("start");
var pauseButton = document.getElementById("pause");
var resetButton = document.getElementById("reset");

startButton.addEventListener("click", stopWatch.start);
pauseButton.addEventListener("click", stopWatch.pause);
resetButton.addEventListener("click", stopWatch.reset);
